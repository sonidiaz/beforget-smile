"use strict";
import Vue from 'vue';
/* spec properties of JeelizSVGHelper.init method :
   * <string> canvasId : id of the <canvas> element where the head search will be displayed
   * <string> NNCpath : where to find the neural net model
   * <array> Expression logic

*/
var JeelizSVGHelper=(function(){
    //private variables
    var _morphFactorsArr, 
    _morphFactorsDict={
        smileRight: 0,          //0
        smileLeft: 0,           //1
        eyeBrowLeftDown: 0,     //2
        eyeBrowRightDown: 0,    //3
        eyeBrowLeftUp: 0,       //4
        eyeBrowRightUp: 0,      //5
        mouthOpen: 0,           //6
        mouthRound: 0,          //7
        eyeRightClose: 0,       //8
        eyeLeftClose: 0,        //9
        mouthNasty: 0           //10
    };
    var _morphIndexToName=Object.keys(_morphFactorsDict);
    var _expressions;
    var smileSuscribe;
    var _hysteresis=0, _bestCssClassName;
    var _rotation=[0,0,0], _rotationCallback=false;


    //private functions :
    function callbackReady(errCode){

        if (errCode){
            console.log('ERROR in JeelizSVGHelper - CANNOT INITIALIZE JEEFACETRANSFERAPI : errCode =', errCode);
            Vue.set(Vue.prototype, '$isAccessCamera', false);
            return;
        }
        console.log('INFO : JEEFACETRANSFERAPI is ready !!!');
        Vue.set(Vue.prototype, '$videoInit', true);
        _morphFactorsArr=JEEFACETRANSFERAPI.get_morphTargetInfluencesStabilized();
        if (_rotationCallback){
            _rotation=JEEFACETRANSFERAPI.get_rotation();
        }
        JEEFACETRANSFERAPI.set_morphUpdateCallback(onMorphUpdate);
        JEEFACETRANSFERAPI.switch_displayVideo(false)
        JEEFACETRANSFERAPI.on_detect(function(detect){
            Vue.set(Vue.prototype, '$faceDetected', detect);
        });
        
    }
    
    function onMorphUpdate(quality, benchmarkCoeff){

        _morphIndexToName.forEach(function(morphKey, morphIndex){
            _morphFactorsDict[morphKey]=_morphFactorsArr[morphIndex];
        });


        _expressions.forEach(function(expressionVariants, expressionVariantsIndex){
            //which expression variant has the best score ?
            if(expressionVariants['svgSmile'](_morphFactorsDict) >= 0.7){
                Vue.set(Vue.prototype, '$smile', true);
            }else{
                Vue.set(Vue.prototype, '$smile', false);
            }
            // console.log(expressionVariants['svgSmile'](_morphFactorsDict))
            

        }); //end loop on expression groups

        if (_rotationCallback){
            _rotationCallback(_rotation);
        }
        

    } //end onMorphUpdate()



    //permut 2 element in an array
    function permut(arr, i, j){
        var a=arr[j];
        arr[j]=arr[i];
        arr[i]=a;
    }

    //public methods :
    var that={

        init: function(spec){
             _expressions=spec.expressions;
             smileSuscribe = spec.suscribeSmile;
             if (typeof(spec.hysteresis)!=='undefined') _hysteresis=spec.hysteresis;
             if (typeof(spec.rotationCallback)!=='undefined')_rotationCallback=spec.rotationCallback;

             if (spec.isMirror){
                 permut(_morphIndexToName, 0,1);
                 permut(_morphIndexToName, 2,3);
                 permut(_morphIndexToName, 4,5);
                 permut(_morphIndexToName, 8,9);
             }

             JEEFACETRANSFERAPI.init({
                canvasId: spec.canvasId,
                NNCpath: (spec.NNCpath)?spec.NNCpath:'./',
                callbackReady: callbackReady
            });
        }, //end JeelizSVGHelper.init()

        //SOME HANDY SVG MANIP FUNCZ :
        bioSmile: function (postition, expresion) {
            let valExpre = _expressions[postition][expresion](_morphFactorsDict);
        
            if (valExpre < 0.8) {
                detectedSmile = false;
            } else {
                detectedSmile = true;
            }
        },
        posX_SVGpath: function(path, x){
            var CSStransform=path.style.transform;
            var xPx=x.toString()+'px';
            if (CSStransform.indexOf('translate')===-1){
                path.style.transform='translate('+xPx+', 0px) '+CSStransform;
            } else {
                path.style.transform=CSStransform.replace(/translate\([0-9\.\-px]+\s*/, 'translate('+xPx);
            }
        },

        posY_SVGpath: function(path, y){
            var CSStransform=path.style.transform;
            var yPx=y.toString()+'px';
            if (CSStransform.indexOf('translate')===-1){
                path.style.transform='translate(0px, '+yPx+') '+CSStransform;
            } else {
                path.style.transform=CSStransform.replace(/translate\(([0-9\.\-px]+\s*),\s*[0-9\.\-px]+\s*/, 'translate($1,'+yPx);
            }
        },

        pos_SVGpath: function(path, x, y){
            var CSStransform=path.style.transform;
            var xPx=Math.round(x).toString()+'px', yPx=Math.round(y).toString()+'px';
            if (CSStransform.indexOf('translate')===-1){
                path.style.transform='translate('+xPx+','+yPx+') '+CSStransform;
            } else {
                path.style.transform=CSStransform.replace(/translate\(\s*[0-9\.\-px]+\s*,\s*[0-9\.\-px]+\s*/, 'translate('+xPx+','+yPx);
            }
        },

        rot_SVGpath: function(path, angleDeg){
            var CSStransform=path.style.transform;
            var angleStr=angleDeg.toFixed(2)+'deg';
            if (CSStransform.indexOf('rotate')===-1){
                path.style.transform='rotate('+angleStr+') '+CSStransform;
            } else {
                path.style.transform=CSStransform.replace(/rotate\(\s*[0-9\.\-deg]+/, 'rotate('+angleStr);
            }
        },
        smileShow: 'NO SONRRIE'
    };//end that
    return that;
})();

export default JeelizSVGHelper;