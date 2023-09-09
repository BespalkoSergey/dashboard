"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[938],{938:(Dn,lt,d)=>{d.r(lt),d.d(lt,{AuthComponent:()=>Mn});var O=d(814),i=d(946),de=d(715),he=d(592),fe=d(453),pe=d(829),ge=d(564),me=d(251),_e=d(400),ye=d(714),Ce=d(398);let ut=(()=>{var e;class t{constructor(n,o){this._renderer=n,this._elementRef=o,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,o){this._renderer.setProperty(this._elementRef.nativeElement,n,o)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(i.Qsj),i.Y36(i.SBq))},e.\u0275dir=i.lG2({type:e}),t})(),y=(()=>{var e;class t extends ut{}return(e=t).\u0275fac=function(){let r;return function(o){return(r||(r=i.n5z(e)))(o||e)}}(),e.\u0275dir=i.lG2({type:e,features:[i.qOj]}),t})();const f=new i.OlP("NgValueAccessor"),be={provide:f,useExisting:(0,i.Gpc)(()=>E),multi:!0},Ae=new i.OlP("CompositionEventMode");let E=(()=>{var e;class t extends ut{constructor(n,o,s){super(n,o),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Me(){const e=(0,O.q)()?(0,O.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Ae,8))},e.\u0275dir=i.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){1&n&&i.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i._Bn([be]),i.qOj]}),t})();function p(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function dt(e){return null!=e&&"number"==typeof e.length}const u=new i.OlP("NgValidators"),g=new i.OlP("NgAsyncValidators"),De=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class we{static min(t){return function ht(e){return t=>{if(p(t.value)||p(e))return null;const r=parseFloat(t.value);return!isNaN(r)&&r<e?{min:{min:e,actual:t.value}}:null}}(t)}static max(t){return function ft(e){return t=>{if(p(t.value)||p(e))return null;const r=parseFloat(t.value);return!isNaN(r)&&r>e?{max:{max:e,actual:t.value}}:null}}(t)}static required(t){return function pt(e){return p(e.value)?{required:!0}:null}(t)}static requiredTrue(t){return function gt(e){return!0===e.value?null:{required:!0}}(t)}static email(t){return function mt(e){return p(e.value)||De.test(e.value)?null:{email:!0}}(t)}static minLength(t){return function _t(e){return t=>p(t.value)||!dt(t.value)?null:t.value.length<e?{minlength:{requiredLength:e,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function yt(e){return t=>dt(t.value)&&t.value.length>e?{maxlength:{requiredLength:e,actualLength:t.value.length}}:null}(t)}static pattern(t){return function vt(e){if(!e)return F;let t,r;return"string"==typeof e?(r="","^"!==e.charAt(0)&&(r+="^"),r+=e,"$"!==e.charAt(e.length-1)&&(r+="$"),t=new RegExp(r)):(r=e.toString(),t=e),n=>{if(p(n.value))return null;const o=n.value;return t.test(o)?null:{pattern:{requiredPattern:r,actualValue:o}}}}(t)}static nullValidator(t){return null}static compose(t){return Dt(t)}static composeAsync(t){return wt(t)}}function F(e){return null}function Ct(e){return null!=e}function Vt(e){return(0,i.QGY)(e)?(0,de.D)(e):e}function bt(e){let t={};return e.forEach(r=>{t=null!=r?{...t,...r}:t}),0===Object.keys(t).length?null:t}function Mt(e,t){return t.map(r=>r(e))}function At(e){return e.map(t=>function Oe(e){return!e.validate}(t)?t:r=>t.validate(r))}function Dt(e){if(!e)return null;const t=e.filter(Ct);return 0==t.length?null:function(r){return bt(Mt(r,t))}}function H(e){return null!=e?Dt(At(e)):null}function wt(e){if(!e)return null;const t=e.filter(Ct);return 0==t.length?null:function(r){return function ve(...e){const t=(0,ge.jO)(e),{args:r,keys:n}=(0,fe.D)(e),o=new he.y(s=>{const{length:a}=r;if(!a)return void s.complete();const l=new Array(a);let h=a,C=a;for(let _=0;_<a;_++){let at=!1;(0,pe.Xf)(r[_]).subscribe((0,me.x)(s,An=>{at||(at=!0,C--),l[_]=An},()=>h--,void 0,()=>{(!h||!at)&&(C||s.next(n?(0,ye.n)(n,l):l),s.complete())}))}});return t?o.pipe((0,_e.Z)(t)):o}(Mt(r,t).map(Vt)).pipe((0,Ce.U)(bt))}}function U(e){return null!=e?wt(At(e)):null}function Ot(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Et(e){return e._rawValidators}function Ft(e){return e._rawAsyncValidators}function j(e){return e?Array.isArray(e)?e:[e]:[]}function S(e,t){return Array.isArray(e)?e.includes(t):e===t}function St(e,t){const r=j(t);return j(e).forEach(o=>{S(r,o)||r.push(o)}),r}function Nt(e,t){return j(t).filter(r=>!S(e,r))}class xt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=U(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,r){return!!this.control&&this.control.hasError(t,r)}getError(t,r){return this.control?this.control.getError(t,r):null}}class m extends xt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Gt{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let kt=(()=>{var e;class t extends Gt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(m,2))},e.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){2&n&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.qOj]}),t})();const M="VALID",x="INVALID",V="PENDING",A="DISABLED";function G(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Tt{constructor(t,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===x}get pending(){return this.status==V}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(St(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(St(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Nt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Nt(t,this._rawAsyncValidators))}hasValidator(t){return S(this._rawValidators,t)}hasAsyncValidator(t){return S(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=V,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=A,this.errors=null,this._forEachChild(n=>{n.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(n=>{n.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===V)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const r=Vt(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,r={}){this.errors=t,this._updateControlsErrors(!1!==r.emitEvent)}get(t){let r=t;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((n,o)=>n&&n._find(o),this)}getError(t,r){const n=r?this.get(r):this;return n&&n.errors?n.errors[t]:null}hasError(t,r){return!!this.getError(t,r)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(x)?x:M}_anyControlsHaveStatus(t){return this._anyControls(r=>r.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){G(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function xe(e){return Array.isArray(e)?H(e):e||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Ge(e){return Array.isArray(e)?U(e):e||null}(this._rawAsyncValidators)}}const b=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>k}),k="always";function D(e,t,r=k){(function $(e,t){const r=Et(e);null!==t.validator?e.setValidators(Ot(r,t.validator)):"function"==typeof r&&e.setValidators([r]);const n=Ft(e);null!==t.asyncValidator?e.setAsyncValidators(Ot(n,t.asyncValidator)):"function"==typeof n&&e.setAsyncValidators([n]);const o=()=>e.updateValueAndValidity();I(t._rawValidators,o),I(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||"always"===r)&&t.valueAccessor.setDisabledState?.(e.disabled),function Be(e,t){t.valueAccessor.registerOnChange(r=>{e._pendingValue=r,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Ht(e,t)})}(e,t),function Te(e,t){const r=(n,o)=>{t.valueAccessor.writeValue(n),o&&t.viewToModelUpdate(n)};e.registerOnChange(r),t._registerOnDestroy(()=>{e._unregisterOnChange(r)})}(e,t),function Ie(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Ht(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function Pe(e,t){if(t.valueAccessor.setDisabledState){const r=n=>{t.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(r),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(r)})}}(e,t)}function B(e,t,r=!0){const n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),function T(e,t){let r=!1;if(null!==e){if(null!==t.validator){const o=Et(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.validator);s.length!==o.length&&(r=!0,e.setValidators(s))}}if(null!==t.asyncValidator){const o=Ft(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.asyncValidator);s.length!==o.length&&(r=!0,e.setAsyncValidators(s))}}}const n=()=>{};return I(t._rawValidators,n),I(t._rawAsyncValidators,n),r}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function I(e,t){e.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(t)})}function Ht(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Lt(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}function Rt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const X=class extends Tt{constructor(t=null,r,n){super(function q(e){return(G(e)?e.validators:e)||null}(r),function Y(e,t){return(G(t)?t.asyncValidators:e)||null}(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=Rt(t)?t.value:t)}setValue(t,r={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(t,r={}){this.setValue(t,r)}reset(t=this.defaultValue,r={}){this._applyFormState(t),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Lt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Lt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Rt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let Zt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),t})();const K=new i.OlP("NgModelWithFormControlWarning"),Xe={provide:m,useExisting:(0,i.Gpc)(()=>tt)};let tt=(()=>{var e;class t extends m{set isDisabled(n){}constructor(n,o,s,a,l){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=l,this.update=new i.vpe,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=function J(e,t){if(!t)return null;let r,n,o;return Array.isArray(t),t.forEach(s=>{s.constructor===E?r=s:function je(e){return Object.getPrototypeOf(e.constructor)===y}(s)?n=s:o=s}),o||n||r||null}(0,s)}ngOnChanges(n){if(this._isControlChanged(n)){const o=n.form.previousValue;o&&B(o,this,!1),D(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}(function Z(e,t){if(!e.hasOwnProperty("model"))return!1;const r=e.model;return!!r.isFirstChange()||!Object.is(t,r.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&B(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return(e=t)._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(i.Y36(u,10),i.Y36(g,10),i.Y36(f,10),i.Y36(K,8),i.Y36(b,8))},e.\u0275dir=i.lG2({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[i._Bn([Xe]),i.qOj,i.TTD]}),t})(),yn=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[Zt]}),t})(),Cn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:K,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:b,useValue:n.callSetDisabledState??k}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[yn]}),t})(),Vn=(()=>{var e;class t{constructor(){this.size=50,this.color="black"}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-ui-lock-svg"]],inputs:{size:"size",color:"color"},standalone:!0,features:[i.jDz],decls:2,vars:3,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 50 50"],["d","M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"]],template:function(n,o){1&n&&(i.O4$(),i.TgZ(0,"svg",0),i._UZ(1,"path",1),i.qZA()),2&n&&(i.Udp("width",o.size,"px"),i.uIk("fill",o.color))}}),t})();function bn(e,t){1&e&&(i.TgZ(0,"div",12),i._UZ(1,"img",13),i.TgZ(2,"p",14),i._uU(3,"This field is required"),i.qZA()())}let Mn=(()=>{var e;class t{constructor(){this.password=new X("",[we.required])}onClick(n){n.stopPropagation(),n.preventDefault(),this.password.markAsTouched(),this.password.markAsDirty(),this.password.invalid||console.log(this.password.value)}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-root"]],standalone:!0,features:[i.jDz],decls:14,vars:9,consts:[[1,"container-login-form"],[1,"login-form"],[1,"container-login-form-input"],[1,"login-form-input-icon-lock",3,"color","size"],["type","password","placeholder","Type password","name","password-dashboard-auth","id","PasswordDashboardAuth",1,"login-form-input",3,"formControl","spellcheck"],[1,"login-form-input-hr-grey"],[1,"login-form-input-hr-active"],["class","container-login-form-input-required",4,"ngIf"],[1,"container-login-form-btn"],[1,"wrap-login-form-btn"],[1,"login-form-btn-bg"],[1,"login-form-btn",3,"click"],[1,"container-login-form-input-required"],["src","assets/images/importance.png",1,"login-form-input-icon-importance"],[1,"login-form-input-error-msg"]],template:function(n,o){1&n&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2),i._UZ(3,"app-ui-lock-svg",3)(4,"input",4)(5,"hr",5)(6,"hr",6),i.YNc(7,bn,4,0,"div",7),i.qZA(),i.TgZ(8,"div",8)(9,"div",9)(10,"div",10),i._uU(11,"\xa0"),i.qZA(),i.TgZ(12,"button",11),i.NdJ("click",function(a){return o.onClick(a)}),i._uU(13,"Login"),i.qZA()()()()()),2&n&&(i.xp6(3),i.Q6J("color",o.password.hasError("required")&&o.password.touched?"red":"black")("size",30),i.xp6(1),i.Q6J("formControl",o.password)("spellcheck",!1),i.xp6(1),i.ekj("login-form-bgc-red",o.password.hasError("required")&&o.password.touched),i.xp6(1),i.ekj("login-form-bgc-red",o.password.hasError("required")&&o.password.touched),i.xp6(1),i.Q6J("ngIf",o.password.hasError("required")&&o.password.touched))},dependencies:[O.ez,O.O5,Cn,E,kt,tt,Vn],styles:[".container-login-form[_ngcontent-%COMP%]{height:100dvh;width:100dvw;background-image:url(/assets/images/bg-01.jpg);background-clip:border-box;background-size:cover}.login-form[_ngcontent-%COMP%]{position:absolute;left:0;right:0;margin:0 auto;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:20px;width:500px;background:#fff;border-radius:10px;overflow:hidden;padding:60px 55px}.container-login-form-input[_ngcontent-%COMP%]{position:relative;overflow:hidden}.login-form-input-icon-lock[_ngcontent-%COMP%]{left:10px;position:absolute;top:50%;transform:translateY(-50%)}.login-form-input[_ngcontent-%COMP%]{border:none;outline:none;width:100%;box-sizing:border-box;font-family:Poppins-Medium;font-size:16px;color:#333;line-height:1.2;display:block;height:55px;background:0 0;padding:0 7px 0 45px}.container-login-form-input-required[_ngcontent-%COMP%]{right:5px;position:absolute;top:50%;transform:translateY(-50%);display:flex;flex-direction:row-reverse;align-items:center}.login-form-input-icon-importance[_ngcontent-%COMP%]{width:30px;height:30px;cursor:pointer}.login-form-input-error-msg[_ngcontent-%COMP%]{margin:0;font-size:16px;color:red;display:none;-webkit-appearance:none;appearance:none}.login-form-input-icon-importance[_ngcontent-%COMP%]:hover ~ .login-form-input-error-msg[_ngcontent-%COMP%]{display:block;-webkit-appearance:auto;appearance:auto}.login-form-input-hr-grey[_ngcontent-%COMP%]{background-color:gray}.login-form-input-hr-active[_ngcontent-%COMP%]{background-color:#000;transform:translate(-101%)}.login-form-input-hr-grey.login-form-bgc-red[_ngcontent-%COMP%], .login-form-input-hr-active.login-form-bgc-red[_ngcontent-%COMP%]{background-color:red}.container-login-form-input[_ngcontent-%COMP%]:has(.login-form-input:focus)   .login-form-input-hr-active[_ngcontent-%COMP%]{transform:translate(0)}.login-form-input-hr-grey[_ngcontent-%COMP%], .login-form-input-hr-active[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;right:0;bottom:0;margin:0 auto;border:none;border-radius:1px;height:2px;transition:transform .4s ease-in-out}.container-login-form-btn[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.wrap-login-form-btn[_ngcontent-%COMP%]{width:100%;display:block;position:relative;z-index:1;border-radius:25px;overflow:hidden;margin:0 auto;box-shadow:0 5px 30px #03d8de33}.login-form-btn-bg[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:300%;height:100%;background:linear-gradient(to right,#00dbde,#fc00ff,#00dbde,#fc00ff);top:0;left:-100%;transition:all .4s}.login-form-btn[_ngcontent-%COMP%]{cursor:pointer;border:none;background-color:transparent;font-family:Poppins-Medium;font-size:16px;color:#fff;line-height:1.2;text-transform:uppercase;display:flex;justify-content:center;align-items:center;padding:0 20px;width:100%;height:50px}.wrap-login-form-btn[_ngcontent-%COMP%]:hover   .login-form-btn-bg[_ngcontent-%COMP%]{left:0}"]}),t})()}}]);