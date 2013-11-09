(function(){UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};

var baidu = window.baidu || {};

window.baidu = baidu;

window.UE = baidu.editor =  {};

UE.plugins = {};

UE.commands = {};

UE.version = "1.2.0.0";

var dom = UE.dom = {};
///import editor.js
/**
 * @class baidu.editor.browser     �ж������
 */

var browser = UE.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
        /**
         * ���������Ƿ�ΪIE
         * @name baidu.editor.browser.ie
         * @property    ���������Ƿ�ΪIE
         * @grammar     baidu.editor.browser.ie
         * @return     {Boolean}    �����Ƿ�Ϊie�����
         */
        ie		: !!window.ActiveXObject,

        /**
         * ���������Ƿ�ΪOpera
         * @name baidu.editor.browser.opera
         * @property    ���������Ƿ�ΪOpera
         * @grammar     baidu.editor.browser.opera
         * @return     {Boolean}    �����Ƿ�Ϊopera�����
         */
        opera	: ( !!opera && opera.version ),

        /**
         * ���������Ƿ�ΪWebKit�ں�
         * @name baidu.editor.browser.webkit
         * @property    ���������Ƿ�ΪWebKit�ں�
         * @grammar     baidu.editor.browser.webkit
         * @return     {Boolean}    �����Ƿ�ΪWebKit�ں�
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * ����Ƿ�ΪMacintoshϵͳ
         * @name baidu.editor.browser.mac
         * @property    ����Ƿ�ΪMacintoshϵͳ
         * @grammar     baidu.editor.browser.mac
         * @return     {Boolean}    �����Ƿ�ΪMacintoshϵͳ
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * ���������Ƿ�Ϊquirksģʽ
         * @name baidu.editor.browser.quirks
         * @property    ���������Ƿ�Ϊquirksģʽ
         * @grammar     baidu.editor.browser.quirks
         * @return     {Boolean}    �����Ƿ�Ϊquirksģʽ
         */
        quirks : ( document.compatMode == 'BackCompat' )
    };

    /**
     * ���������Ƿ�ΪGecko�ںˣ���Firefox
     * @name baidu.editor.browser.gecko
     * @property    ���������Ƿ�ΪGecko�ں�
     * @grammar     baidu.editor.browser.gecko
     * @return     {Boolean}    �����Ƿ�ΪGecko�ں�
     */
    browser.gecko = ( navigator.product == 'Gecko' && !browser.webkit && !browser.opera );

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie )
    {
        version = parseFloat( agent.match( /msie (\d+)/ )[1] );

        /**
         * ���������Ƿ�Ϊ IE8 �����
         * @name baidu.editor.browser.IE8
         * @property    ���������Ƿ�Ϊ IE8 �����
         * @grammar     baidu.editor.browser.IE8
         * @return     {Boolean}    �����Ƿ�Ϊ IE8 �����
         */
        browser.ie8 = !!document.documentMode;

        /**
         * ���������Ƿ�Ϊ IE8 ģʽ
         * @name baidu.editor.browser.ie8Compat
         * @property    ���������Ƿ�Ϊ IE8 ģʽ
         * @grammar     baidu.editor.browser.ie8Compat
         * @return     {Boolean}    �����Ƿ�Ϊ IE8 ģʽ
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * ���������Ƿ������� ����IE7ģʽ
         * @name baidu.editor.browser.ie7Compat
         * @property    ���������Ƿ�Ϊ����IE7ģʽ
         * @grammar     baidu.editor.browser.ie7Compat
         * @return     {Boolean}    �����Ƿ�Ϊ����IE7ģʽ
         */
        browser.ie7Compat = ( ( version == 7 && !document.documentMode )
                || document.documentMode == 7 );

        /**
         * ���������Ƿ�IE6ģʽ�����ģʽ
         * @name baidu.editor.browser.ie6Compat
         * @property    ���������Ƿ�IE6 ģʽ�����ģʽ
         * @grammar     baidu.editor.browser.ie6Compat
         * @return     {Boolean}    �����Ƿ�ΪIE6 ģʽ�����ģʽ
         */
        browser.ie6Compat = ( version < 7 || browser.quirks );

    }

    // Gecko.
    if ( browser.gecko )
    {
        var geckoRelease = agent.match( /rv:([\d\.]+)/ );
        if ( geckoRelease )
        {
            geckoRelease = geckoRelease[1].split( '.' );
            version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
        }
    }
    /**
     * ���������Ƿ�Ϊchrome
     * @name baidu.editor.browser.chrome
     * @property    ���������Ƿ�Ϊchrome
     * @grammar     baidu.editor.browser.chrome
     * @return     {Boolean}    �����Ƿ�Ϊchrome�����
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = + RegExp['\x241'];
    }
    /**
     * ���������Ƿ�Ϊsafari
     * @name baidu.editor.browser.safari
     * @property    ���������Ƿ�Ϊsafari
     * @grammar     baidu.editor.browser.safari
     * @return     {Boolean}    �����Ƿ�Ϊsafari�����
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
    	browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
        version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
        version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * ������汾
     *
     * gecko�ں�������İ汾��ת��������(�� 1.9.0.2 -> 10900).
     *
     * webkit�ں�������汾��ʹ����build�� (�� 522).
     * @name baidu.editor.browser.version
     * @grammar     baidu.editor.browser.version
     * @return     {Boolean}    ����������汾��
     * @example
     * if ( baidu.editor.browser.ie && <b>baidu.editor.browser.version</b> <= 6 )
     *     alert( "Ouch!" );
     */
    browser.version = version;

    /**
     * �Ƿ��Ǽ���ģʽ�������
     * @name baidu.editor.browser.isCompatible
     * @grammar     baidu.editor.browser.isCompatible
     * @return     {Boolean}    �����Ƿ��Ǽ���ģʽ�������
     * @example
     * if ( baidu.editor.browser.isCompatible )
     *     alert( "Your browser is pretty cool!" );
     */
    browser.isCompatible =
        !browser.mobile && (
        ( browser.ie && version >= 6 ) ||
        ( browser.gecko && version >= 10801 ) ||
        ( browser.opera && version >= 9.5 ) ||
        ( browser.air && version >= 1 ) ||
        ( browser.webkit && version >= 522 ) ||
        false );
    return browser;
}();
//��ݷ�ʽ
var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko;
///import editor.js
///import core/utils.js
/**
 * @class baidu.editor.utils     ������
 */

    var utils = UE.utils =
	/**@lends baidu.editor.utils.prototype*/
    {
		/**
         * ��objΪԭ�ʹ���ʵ��
         * @public
         * @function
         * @param {Object} obj
         * @return {Object} �����µĶ���
         */
		makeInstance: function(obj) {
            var noop = new Function();
			noop.prototype = obj;
			obj = new noop;
			noop.prototype = null;
			return obj;
		},
        /**
         * ��s�����е�������չ��t������
         * @public
         * @function
         * @param {Object} t
         * @param {Object} s
         * @param {Boolean} b �Ƿ�����������
         * @returns {Object}  t ������չ��s�������Ե�t
         */
		extend: function(t, s, b) {
			if (s) {
				for (var k in s) {
					if (!b || ! t.hasOwnProperty(k)) {
						t[k] = s[k];
					}
				}
			}
			return t;
		},
		/**
         * �ж��Ƿ�Ϊ����
         * @public
         * @function
         * @param {Object} array
         * @return {Boolean} true��Ϊ���飬false����Ϊ����
         */
		isArray: function(array) {
			return Object.prototype.toString.apply(array) === '[object Array]'
		},
		/**
         * �ж��Ƿ�Ϊ�ַ���
         * @public
         * @function
         * @param {Object} str
         * @return {Boolean} true��Ϊ�ַ����� false����Ϊ�ַ���
         */
		isString: function(str) {
			return typeof str == 'string' || str.constructor == String;
		},
		/**
         * subClass�̳�superClass
         * @public
         * @function
         * @param {Object} subClass       ����
         * @param {Object} superClass    ����
         * @return    {Object}    ��չ����¶���
         */
		inherits: function(subClass, superClass) {
			var oldP = subClass.prototype,
			    newP = utils.makeInstance(superClass.prototype);
			utils.extend(newP, oldP, true);
			subClass.prototype = newP;
			return (newP.constructor = subClass);
		},

		/**
         * Ϊ����󶨺���
         * @public
         * @function
         * @param {Function} fn        ����
         * @param {Object} this_       ����
         * @return {Function}  �󶨺�ĺ���
         */
		bind: function(fn, this_) {
			return function() {
				return fn.apply(this_, arguments);
			};
		},

		/**
         * �����ӳ�ִ�еĺ���
         * @public
         * @function
         * @param {Function} fn       Ҫִ�еĺ���
         * @param {Number} delay      �ӳ�ʱ�䣬��λΪ����
         * @param {Boolean} exclusion �Ƿ񻥳�ִ�У�true��ִ����һ��deferʱ���Ȱ�ǰһ�ε��ӳٺ���ɾ��
         * @return {Function}    �ӳ�ִ�еĺ���
         */
		defer: function(fn, delay, exclusion) {
			var timerID;
			return function() {
				if (exclusion) {
					clearTimeout(timerID);
				}
				timerID = setTimeout(fn, delay);
			};
		},



		/**
         * ����Ԫ���������е�����, ���Ҳ�������-1
         * @public
         * @function
         * @param {Array} array     Ҫ���ҵ�����
         * @param {*} item          ���ҵ�Ԫ��
         * @param {Number} at       ��ʼ���ҵ�λ��
         * @returns {Number}        �����������е�����
         */
		indexOf: function(array, item, at) {
            for(var i=at||0,l = array.length;i<l;i++){
               if(array[i] === item){
                   return i;
               }
            }
            return -1;
		},

        findNode : function(nodes,tagNames,fn){
            for(var i=0,ci;ci=nodes[i++];){
                if(fn? fn(ci) : this.indexOf(tagNames,ci.tagName.toLowerCase())!=-1){
                    return ci;
                }
            }
        },
		/**
         * �Ƴ������е�Ԫ��
         * @public
         * @function
         * @param {Array} array       Ҫɾ��Ԫ�ص�����
         * @param {*} item            Ҫɾ����Ԫ��
         */
		removeItem: function(array, item) {
            for(var i=0,l = array.length;i<l;i++){
                if(array[i] === item){
                    array.splice(i,1);
                    i--;
                }
            }
		},

		/**
         * ɾ���ַ�����β�ո�
         * @public
         * @function
         * @param {String} str        �ַ���
         * @return {String} str       ɾ���ո����ַ���
         */
		trim: function(str) {
            return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
		},

		/**
         * ���ַ���ת����hashmap
         * @public
         * @function
         * @param {String/Array} list       �ַ������ԡ���������
         * @returns {Object}          ת��hashmap�Ķ���
         */
		listToMap: function(list) {
            if(!list)return {};
            list = utils.isArray(list) ? list : list.split(',');
            for(var i=0,ci,obj={};ci=list[i++];){
                obj[ci.toUpperCase()] = obj[ci] = 1;
            }
            return obj;
		},

		/**
         * ��str�е�html����ת��
         * @public
         * @function
         * @param {String} str      ��Ҫת����ַ���
         * @returns {String}        ת�����ַ���
         */
		unhtml: function(str) {
           return str ? str.replace(/[&<">]/g, function(m){
               return {
                   '<': '&lt;',
                   '&': '&amp',
                   '"': '&quot;',
                   '>': '&gt;'
               }[m]
           }) : '';
		},

		/**
         * ��css��ʽת��Ϊ�շ����ʽ����font-size -> fontSize
         * @public
         * @function
         * @param {String} cssName      ��Ҫת������ʽ
         * @returns {String}        ת�������ʽ
         */
		cssStyleToDomStyle: function() {
            var test = document.createElement('div').style,
               cache = {
                   'float': test.cssFloat != undefined ? 'cssFloat' : test.styleFloat != undefined ? 'styleFloat': 'float'
               };

            return function(cssName) {
               return cache[cssName] || (cache[cssName] = cssName.toLowerCase().replace(/-./g, function(match){return match.charAt(1).toUpperCase();}));
            };
		}(),
		/**
         * ����css�ļ���ִ�лص�����
         * @public
         * @function
         * @param {document}   doc  document����
         * @param {String}    path  �ļ�·��
         * @param {Function}   fun  �ص�����
         * @param {String}     id   Ԫ��id
         */
        loadFile : function(doc,obj,fun){
            if (obj.id && doc.getElementById(obj.id)) {
				return;
			}
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for(var p in obj){
                element.setAttribute(p,obj[p]);
            }
			element.onload = element.onreadystatechange = function() {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    fun && fun();
                    element.onload = element.onreadystatechange = null;
                }
			};

			doc.getElementsByTagName("head")[0].appendChild(element);

        },
        /**
         * �ж϶����Ƿ�Ϊ��
         * @param {Object} obj
         * @return {Boolean} true �գ�false ����
         */
        isEmptyObject : function(obj){
            for ( var p in obj ) {
                return false;
            }
            return true;
        },
        fixColor : function (name, value) {
            if (/color/i.test(name) && /rgba?/.test(value)) {
                var array = value.split(",");
                if (array.length > 3)
                    return "";
                value = "#";
                for (var i = 0, color; color = array[i++];) {
                    color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                    value += color.length == 1 ? "0" + color : color;
                }

                value = value.toUpperCase();
            }
            return  value;
        },
        /**
            * ֻ���border,padding,margin���˴�����Ϊ��������
            * @public
            * @function
            * @param {String}    val style�ַ���
        */
        optCss : function(val){
            var padding,margin,border;
            val = val.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi,function(str,key,name,val){
                if(val.split(' ').length == 1){
                    switch (key){
                        case 'padding':
                            !padding && (padding = {});
                            padding[name] = val;
                            return '';
                        case 'margin':
                            !margin && (margin = {});
                            margin[name] = val;
                            return '';
                        case 'border':
                            return val == 'initial' ? '' : str;

                    }
                }
                return str
            });

            function opt(obj,name){
                if(!obj)
                    return ''
                var t = obj.top ,b = obj.bottom,l = obj.left,r = obj.right,val = '';
                if(!t || !l || !b || !r){
                    for(var p in obj){
                        val +=';'+name+'-' + p + ':' + obj[p]+';';
                    }
                }else{
                    val += ';'+name+':' +
                        (t == b && b == l && l == r ? t :
                            t == b && l == r ? (t + ' ' + l) :
                                l == r ?  (t + ' ' + l + ' ' + b) : (t + ' ' + r + ' ' + b + ' ' + l))+';'
                }
                return val;
            }
            val += opt(padding,'padding') + opt(margin,'margin');

            return val.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/,'').replace(/;([ \n\r\t]+)|\1;/g,';')
                .replace(/(&((l|g)t|quot|#39))?;{2,}/g,function(a,b){

                    return b ? b + ";;" : ';'
                })

        }

	};



///import editor.js
///import core/utils.js

    /**
     * �¼�������
     * @public
     * @class
     * @name baidu.editor.EventBase
     */
    var EventBase = UE.EventBase = function(){};

    EventBase.prototype = /**@lends baidu.editor.EventBase.prototype*/{
        /**
         * ע���¼�������
         * @public
         * @function
         * @param {String} type �¼���
         * @param {Function} listener ����������
         */
        addListener : function ( type, listener ) {
            getListener( this, type, true ).push( listener );
        },
        /**
         * �Ƴ��¼�������
         * @public
         * @function
         * @param {String} type �¼���
         * @param {Function} listener ����������
         */
        removeListener : function ( type, listener ) {
            var listeners = getListener( this, type );
            listeners && utils.removeItem( listeners, listener );
        },
        /**
         * �����¼�
         * @public
         * @function
         * @param {String} type �¼���
         * 
         */
        fireEvent : function ( type ) {
            var listeners = getListener( this, type ),
                r, t, k;
            if ( listeners ) {

                k = listeners.length;
                while ( k -- ) {
                    t = listeners[k].apply( this, arguments );
                    if ( t !== undefined ) {
                        r = t;
                    }

                }
                
            }
            if ( t = this['on' + type.toLowerCase()] ) {
                r = t.apply( this, arguments );
            }
            return r;
        }
    };
    /**
     * ��ö�����ӵ�м������͵����м�����
     * @public
     * @function
     * @param {Object} obj  ��ѯ�������Ķ���
     * @param {String} type �¼�����
     * @param {Boolean} force  Ϊtrue�ҵ�ǰ����type���͵�������������ʱ������һ���ռ���������
     * @returns {Array} ����������
     */
    function getListener( obj, type, force ) {
        var allListeners;
        type = type.toLowerCase();
        return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
            && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
    }


///import editor.js
///import core/dom/dom.js
/**
 * dtd html���廯��������
 * @constructor
 * @namespace dtd
 */
var dtd = dom.dtd = (function() {
    function _( s ) {
        for (var k in s) {
            s[k.toUpperCase()] = s[k];
        }
        return s;
    }
    function X( t ) {
        var a = arguments;
        for ( var i=1; i<a.length; i++ ) {
            var x = a[i];
            for ( var k in x ) {
                if (!t.hasOwnProperty(k)) {
                    t[k] = x[k];
                }
            }
        }
        return t;
    }
    var A = _({isindex:1,fieldset:1}),
        B = _({input:1,button:1,select:1,textarea:1,label:1}),
        C = X( _({a:1}), B ),
        D = X( {iframe:1}, C ),
        E = _({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),
        F = _({ins:1,del:1,script:1,style:1}),
        G = X( _({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}), F ),
        H = X( _({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}), G ),
        I = X( _({p:1}), H ),
        J = X( _({iframe:1}), H, B ),
        K = _({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),

        L = X( _({a:0}), J ),//a���ܱ��п������԰���
        M = _({tr:1}),
        N = _({'#':1}),
        O = X( _({param:1}), K ),
        P = X( _({form:1}), A, D, E, I ),
        Q = _({li:1}),
        R = _({style:1,script:1}),
        S = _({base:1,link:1,meta:1,title:1}),
        T = X( S, R ),
        U = _({head:1,body:1}),
        V = _({html:1});

    var block = _({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),
        //����ſ��embed������˽�����ʶ������ճ������������������ʱȥ�� ,embed:1
        empty =  _({area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1,embed:1});

    return  _({

        // $ ��ʾ�Զ�������

        // body���Ԫ���б�.
        $nonBodyContent: X( V, U, S ),

        //��ṹԪ���б�
        $block : block,

        //����Ԫ���б�
        $inline : L,

        $body : X( _({script:1,style:1}), block ),

        $cdata : _({script:1,style:1}),

        //�Ապ�Ԫ��
        $empty : empty,

        //�����Ապϣ���������rangeѡ�����
        $nonChild : _({iframe:1}),
        //�б�Ԫ���б�
        $listItem : _({dd:1,dt:1,li:1}),

        //�б��Ԫ���б�
        $list: _({ul:1,ol:1,dl:1}),

        //������Ϊ�ǿյ�Ԫ��
        $isNotEmpty : _({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}),

        //���û���ӽڵ�Ϳ���ɾ����Ԫ���б���span,a
        $removeEmpty : _({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1}),

        $removeEmptyBlock : _({'p':1,'div':1}),

        //��tableԪ�����Ԫ���б�
        $tableContent : _({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),
        //��ת���ı�ǩ
        $notTransContent : _({pre:1,script:1,style:1,textarea:1}),
        html: U,
        head: T,
        style: N,
        script: N,
        body: P,
        base: {},
        link: {},
        meta: {},
        title: N,
        col : {},
        tr : _({td:1,th:1}),
        img : {},
        embed: {},
        colgroup : _({thead:1,col:1,tbody:1,tr:1,tfoot:1}),
        noscript : P,
        td : P,
        br : {},
        th : P,
        center : P,
        kbd : L,
        button : X( I, E ),
        basefont : {},
        h5 : L,
        h4 : L,
        samp : L,
        h6 : L,
        ol : Q,
        h1 : L,
        h3 : L,
        option : N,
        h2 : L,
        form : X( A, D, E, I ),
        select : _({optgroup:1,option:1}),
        font : L,
        ins : L,
        menu : Q,
        abbr : L,
        label : L,
        table : _({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),
        code : L,
        tfoot : M,
        cite : L,
        li : P,
        input : {},
        iframe : P,
        strong : L,
        textarea : N,
        noframes : P,
        big : L,
        small : L,
        span :_({'#':1,br:1}),
        hr : L,
        dt : L,
        sub : L,
        optgroup : _({option:1}),
        param : {},
        bdo : L,
        'var' : L,
        div : P,
        object : O,
        sup : L,
        dd : P,
        strike : L,
        area : {},
        dir : Q,
        map : X( _({area:1,form:1,p:1}), A, F, E ),
        applet : O,
        dl : _({dt:1,dd:1}),
        del : L,
        isindex : {},
        fieldset : X( _({legend:1}), K ),
        thead : M,
        ul : Q,
        acronym : L,
        b : L,
        a : X( _({a:1}), J ),
        blockquote :X(_({td:1,tr:1,tbody:1,li:1}),P),
        caption : L,
        i : L,
        u : L,
        tbody : M,
        s : L,
        address : X( D, I ),
        tt : L,
        legend : L,
        q : L,
        pre : X( G, C ),
        p : X(_({'a':1}),L),
        em :L,
        dfn : L
    });
})();

///import editor.js
///import core/utils.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
/**
 * @class baidu.editor.dom.domUtils    dom������
 */

    //for getNextDomNode getPreviousDomNode
    function getDomNode(node, start, ltr, startFromChild, fn, guard) {
        var tmpNode = startFromChild && node[start],
            parent;

        !tmpNode && (tmpNode = node[ltr]);

        while (!tmpNode && (parent = (parent || node).parentNode)) {
            if (parent.tagName == 'BODY' || guard && !guard(parent))
                return null;
            tmpNode = parent[ltr];
        }

        if (tmpNode && fn && !fn(tmpNode)) {
            return  getDomNode(tmpNode, start, ltr, false, fn)
        }
        return tmpNode;
    }

    var attrFix = ie && browser.version < 9 ? {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder"
    } : {
        tabindex: "tabIndex",
        readonly: "readOnly"
    },

    styleBlock = utils.listToMap([
        '-webkit-box','-moz-box','block' ,
        'list-item' ,'table' ,'table-row-group' ,
        'table-header-group','table-footer-group' ,
        'table-row' ,'table-column-group' ,'table-column' ,
        'table-cell' ,'table-caption'
    ]);



    var domUtils = dom.domUtils = {
        //�ڵ㳣��
        NODE_ELEMENT : 1,
        NODE_DOCUMENT : 9,
        NODE_TEXT : 3,
        NODE_COMMENT : 8,
        NODE_DOCUMENT_FRAGMENT : 11,

        //λ�ù�ϵ
        POSITION_IDENTICAL : 0,
        POSITION_DISCONNECTED : 1,
        POSITION_FOLLOWING : 2,
        POSITION_PRECEDING : 4,
        POSITION_IS_CONTAINED : 8,
        POSITION_CONTAINS : 16,
        //ie6ʹ�������Ļ���һ�οհ׳���
        fillChar : ie && browser.version == '6' ? '\ufeff' : '\u200B',
        //-------------------------Node����--------------------------------

        keys : {
            /*Backspace*/ 8:1, /*Delete*/ 46:1,
            /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
            37:1, 38:1, 39:1, 40:1,
            13:1 /*enter*/
        },
        /**
         * ��ȡ�����ڵ��λ�ù�ϵ
         * @function
         * @param {Node} nodeA     �ڵ�A
         * @param {Node} nodeB     �ڵ�B
         * @returns {Number}       ����λ�ù�ϵ
         */
        getPosition : function (nodeA, nodeB) {
            // ��������ڵ���ͬһ���ڵ�
            if (nodeA === nodeB) {
                // domUtils.POSITION_IDENTICAL
                return 0;
            }

            var node,
                parentsA = [nodeA],
                parentsB = [nodeB];


            node = nodeA;
            while (node = node.parentNode) {
                // ���nodeB��nodeA�����Ƚڵ�
                if (node === nodeB) {
                    // domUtils.POSITION_IS_CONTAINED + domUtils.POSITION_FOLLOWING
                    return 10;
                }
                parentsA.push(node);

            }


            node = nodeB;
            while (node = node.parentNode) {
                // ���nodeA��nodeB�����Ƚڵ�
                if (node === nodeA) {
                    // domUtils.POSITION_CONTAINS + domUtils.POSITION_PRECEDING
                    return 20;
                }
                parentsB.push(node);

            }

            parentsA.reverse();
            parentsB.reverse();

            if (parentsA[0] !== parentsB[0])
            // domUtils.POSITION_DISCONNECTED
                return 1;

            var i = -1;
            while (i++,parentsA[i] === parentsB[i]) ;
            nodeA = parentsA[i];
            nodeB = parentsB[i];

            while (nodeA = nodeA.nextSibling) {
                if (nodeA === nodeB) {
                    // domUtils.POSITION_PRECEDING
                    return 4
                }
            }
            // domUtils.POSITION_FOLLOWING
            return  2;
        },

        /**
         * ���ؽڵ�������zero-based
         * @function
         * @param {Node} node     �ڵ�
         * @returns {Number}      �ڵ������
         */
        getNodeIndex : function (node) {
            var child = node.parentNode.firstChild,i = 0;
            while(node!==child){
                i++;
                child = child.nextSibling;
            }
            return i;
        },

        /**
         * �жϽڵ��Ƿ�������
         * @param node
         */
        inDoc: function (node, doc){
            while (node = node.parentNode) {
                if (node === doc) {
                    return true;
                }
            }
            return false;
        },

        /**
         * �������Ƚڵ�
         * @function
         * @param {Node}     node        �ڵ�
         * @param {Function} tester      �Ժ���Ϊ����
         * @param {Boolean} includeSelf �����Լ�
         * @returns {Node}      �������Ƚڵ�
         */
        findParent : function (node, tester, includeSelf) {
            if (!domUtils.isBody(node)) {
                node = includeSelf ? node : node.parentNode;
                while (node) {

                    if (!tester || tester(node) || this.isBody(node)) {

                        return tester && !tester(node) && this.isBody(node) ? null : node;
                    }
                    node = node.parentNode;

                }
            }

            return null;
        },
        /**
         * �������Ƚڵ�
         * @function
         * @param {Node}     node        �ڵ�
         * @param {String}   tagName      ��ǩ����
         * @param {Boolean} includeSelf �����Լ�
         * @returns {Node}      �������Ƚڵ�
         */
        findParentByTagName : function(node, tagName, includeSelf,excludeFn) {
            if (node && node.nodeType && !this.isBody(node) && (node.nodeType == 1 || node.nodeType)) {
                tagName = utils.listToMap(utils.isArray(tagName) ? tagName : [tagName]);
                node = node.nodeType == 3 || !includeSelf ? node.parentNode : node;
                while (node && node.tagName && node.nodeType != 9) {
                    if(excludeFn && excludeFn(node))
                        break;
                    if (tagName[node.tagName])
                        return node;
                    node = node.parentNode;
                }
            }

            return null;
        },
        /**
         * �������Ƚڵ㼯��
         * @param {Node} node               �ڵ�
         * @param {Function} tester         ����
         * @param {Boolean} includeSelf     �Ƿ������ʼ��
         * @param {Boolean} closerFirst
         * @returns {Array}     ���Ƚڵ㼯��
         */
        findParents: function (node, includeSelf, tester, closerFirst) {
            var parents = includeSelf && ( tester && tester(node) || !tester ) ? [node] : [];
            while (node = domUtils.findParent(node, tester)) {
                parents.push(node);
            }
            return closerFirst ? parents : parents.reverse();
        },

        /**
         * �������ڵ�
         * @function
         * @param  {Node}     node            ��׼�ڵ�
         * @param  {Node}     nodeToInsert    Ҫ����Ľڵ�
         * @return {Node}     ����node
         */
        insertAfter : function (node, nodeToInsert) {
            return node.parentNode.insertBefore(nodeToInsert, node.nextSibling);
        },

        /**
         * ɾ���ýڵ�
         * @function
         * @param {Node} node            Ҫɾ���Ľڵ�
         * @param {Boolean} keepChildren �Ƿ����ӽڵ㲻ɾ��
         * @return {Node} ����Ҫɾ���Ľڵ�
         */
        remove :  function (node, keepChildren) {
            var parent = node.parentNode,
                child;
            if (parent) {
                if (keepChildren && node.hasChildNodes()) {
                    while (child = node.firstChild) {
                        parent.insertBefore(child, node);
                    }
                }
                parent.removeChild(node);
            }
            return node;
        },

        /**
         * ȡ��node�ڵ���dom���ϵ���һ���ڵ�
         * @function
         * @param {Node} node       �ڵ�
         * @param {Boolean} startFromChild Ϊtrue���ӽڵ㿪ʼ��
         * @param {Function} fn fnΪ��Ľڵ�
         * @return {Node}    ������һ���ڵ�
         */
        getNextDomNode : function(node, startFromChild, filter, guard) {
            return getDomNode(node, 'firstChild', 'nextSibling', startFromChild, filter, guard);

        },
        /**
         * ��bookmark�ڵ�
         * @param {Node} node        �ж��Ƿ�Ϊ��ǩ�ڵ�
         * @return {Boolean}        �����Ƿ�Ϊ��ǩ�ڵ�
         */
        isBookmarkNode : function(node) {
            return node.nodeType == 1 && node.id && /^_baidu_bookmark_/i.test(node.id);
        },
        /**
         * ��ȡ�ڵ�����window����
         * @param {Node} node     �ڵ�
         * @return {window}    ����window����
         */
        getWindow : function (node) {
            var doc = node.ownerDocument || node;
            return doc.defaultView || doc.parentWindow;
        },
        /**
         * �õ����������Ƚڵ�
         * @param   {Node}     nodeA      �ڵ�A
         * @param   {Node}     nodeB      �ڵ�B
         * @return {Node} nodeA��nodeB�Ĺ����ڵ�
         */
        getCommonAncestor : function(nodeA, nodeB) {
            if (nodeA === nodeB)
                return nodeA;
            var parentsA = [nodeA] ,parentsB = [nodeB], parent = nodeA,
                i = -1;


            while (parent = parent.parentNode) {

                if (parent === nodeB)
                    return parent;
                parentsA.push(parent)
            }
            parent = nodeB;
            while (parent = parent.parentNode) {
                if (parent === nodeA)
                    return parent;
                parentsB.push(parent)
            }

            parentsA.reverse();
            parentsB.reverse();
            while (i++,parentsA[i] === parentsB[i]);
            return i == 0 ? null : parentsA[i - 1];

        },
        /**
         * ����ýڵ����ҿյ�inline�ڵ�
         * @function
         * @param {Node}     node
         * @param {Boolean} ingoreNext   Ĭ��Ϊfalse����ұ�Ϊ�յ�inline�ڵ㡣trueΪ������ұ�Ϊ�յ�inline�ڵ�
         * @param {Boolean} ingorePre    Ĭ��Ϊfalse������Ϊ�յ�inline�ڵ㡣trueΪ��������Ϊ�յ�inline�ڵ�
         * @exmaple <b></b><i></i>xxxx<b>bb</b> --> xxxx<b>bb</b>
         */
        clearEmptySibling : function(node, ingoreNext, ingorePre) {
            function clear(next, dir) {
                var tmpNode;
                while(next && !domUtils.isBookmarkNode(next) && (domUtils.isEmptyInlineElement(next) || domUtils.isWhitespace(next) )){
                    tmpNode = next[dir];
                    domUtils.remove(next);
                    next = tmpNode;
                }
            }

            !ingoreNext && clear(node.nextSibling, 'nextSibling');
            !ingorePre && clear(node.previousSibling, 'previousSibling');
        },

        //---------------------------Text----------------------------------

        /**
         * ��һ���ı��ڵ��ֳ������ı��ڵ�
         * @param {TextNode} node          �ı��ڵ�
         * @param {Integer} offset         ��ֵ�λ��
         * @return {TextNode}   ��ֺ�ĺ�һ���ı���
         */
        split: function (node, offset) {
            var doc = node.ownerDocument;
            if (browser.ie && offset == node.nodeValue.length) {
                var next = doc.createTextNode('');
                return domUtils.insertAfter(node, next);
            }

            var retval = node.splitText(offset);


            //ie8��splitText�������childNodes,�����ֶ��������ĸ���

            if (browser.ie8) {
                var tmpNode = doc.createTextNode('');
                domUtils.insertAfter(retval, tmpNode);
                domUtils.remove(tmpNode);

            }

            return retval;
        },

        /**
         * �ж��Ƿ�Ϊ�հ׽ڵ�
         * @param {TextNode}   node   �ڵ�
         * @return {Boolean}      �����Ƿ�Ϊ�ı��ڵ�
         */
        isWhitespace : function(node) {
            return !new RegExp('[^ \t\n\r' + domUtils.fillChar + ']').test(node.nodeValue);
        },

        //------------------------------Element-------------------------------------------
        /**
         * ��ȡԪ�������viewport����������
         * @param {Element} element      Ԫ��
         * @returns {Object}             �����������{x:left,y:top}
         */
        getXY : function (element) {
            var x = 0,y = 0;
            while (element.offsetParent) {
                y += element.offsetTop;
                x += element.offsetLeft;
                element = element.offsetParent;
            }

            return {
                'x': x,
                'y': y
            };
        },
        /**
         * ��ԭ��DOM�¼�
         * @param {Element|Window|Document} target     Ԫ��
         * @param {Array|String} type                  �¼�����
         * @param {Function} handler                   ִ�к���
         */
        on : function (obj, type, handler) {
            var types = type instanceof Array ? type : [type],
                k = types.length;
            if (k) while (k --) {
                type = types[k];
                if (obj.addEventListener) {
                    obj.addEventListener(type, handler, false);
                } else {
                    if(!handler._d)
                        handler._d ={};
                    var key = type+handler.toString();
                    if(!handler._d[key]){
                         handler._d[key] =  function(evt) {
                            return handler.call(evt.srcElement, evt || window.event);
                        };

                        obj.attachEvent('on' + type,handler._d[key]);
                    }
                }
            }

            obj = null;
        },

        /**
         * ���ԭ��DOM�¼���
         * @param {Element|Window|Document} obj         Ԫ��
         * @param {Array|String} type                   �¼�����
         * @param {Function} handler                    ִ�к���
         */
        un : function (obj, type, handler) {
            var types = type instanceof Array ? type : [type],
                k = types.length;
            if (k) while (k --) {
                type = types[k];
                if (obj.removeEventListener) {
                    obj.removeEventListener(type, handler, false);
                } else {
                    var key = type+handler.toString();
                    obj.detachEvent('on' + type, handler._d ? handler._d[key] : handler);
                    if(handler._d &&  handler._d[key]){
                        delete handler._d[key];
                    }
                }
            }
        },

        /**
         * �Ƚ������ڵ��Ƿ�tagName��ͬ������ͬ�����Ժ�����ֵ
         * @param {Element}   nodeA              �ڵ�A
         * @param {Element}   nodeB              �ڵ�B
         * @return {Boolean}     ���������ڵ�ı�ǩ�����Ժ�����ֵ�Ƿ���ͬ
         * @example
         * &lt;span  style="font-size:12px"&gt;ssss&lt;/span&gt;��&lt;span style="font-size:12px"&gt;bbbbb&lt;/span&gt; ���
         *  &lt;span  style="font-size:13px"&gt;ssss&lt;/span&gt;��&lt;span style="font-size:12px"&gt;bbbbb&lt;/span&gt; �����
         */
         isSameElement : function(nodeA, nodeB) {
            
            if (nodeA.tagName != nodeB.tagName)
                return 0;

            var thisAttribs = nodeA.attributes,
                otherAttribs = nodeB.attributes;


            if (!ie && thisAttribs.length != otherAttribs.length)
                return 0;

            var attrA,attrB,al = 0,bl=0;
            for(var i= 0;attrA=thisAttribs[i++];){
                if(attrA.nodeName == 'style' ){
                    if(attrA.specified)al++;
                    if(domUtils.isSameStyle(nodeA,nodeB)){
                        continue
                    }else{
                        return 0;
                    }
                }
                if(ie){
                    if(attrA.specified){
                        al++;
                        attrB = otherAttribs.getNamedItem(attrA.nodeName);
                    }else{
                        continue;
                    }
                }else{
                    attrB = nodeB.attributes[attrA.nodeName];
                }
                if(!attrB.specified)return 0;
                if(attrA.nodeValue != attrB.nodeValue)
                    return 0;

            }
            // �п���attrB�����԰�����attrA������֮�⻹���Լ�������
            if(ie){
                for(i=0;attrB = otherAttribs[i++];){
                    if(attrB.specified){
                        bl++;
                    }
                }
                if(al!=bl)
                    return 0;
            }
            return 1;
        },

        /**
         * �ж�����Ԫ�ص�style�����ǲ���һ��
         * @param {Element} elementA       Ԫ��A
         * @param {Element} elementB       Ԫ��B
         * @return   {boolean}   �����жϽ����trueΪһ��
         */
        isSameStyle : function (elementA, elementB) {
            var styleA = elementA.style.cssText.replace(/( ?; ?)/g,';').replace(/( ?: ?)/g,':'),
                styleB = elementB.style.cssText.replace(/( ?; ?)/g,';').replace(/( ?: ?)/g,':');

            if(!styleA || !styleB){
                return styleA == styleB ? 1: 0;
            }
            styleA = styleA.split(';');
            styleB = styleB.split(';');

            if(styleA.length != styleB.length)
                return 0;
            for(var i = 0,ci;ci=styleA[i++];){
                if(utils.indexOf(styleB,ci) == -1)
                    return 0
            }
            return 1;
        },

        /**
         * ����Ƿ�Ϊ��Ԫ��
         * @function
         * @param {Element} node       Ԫ��
         * @param {String} customNodeNames �Զ���Ŀ�Ԫ�ص�tagName
         * @return {Boolean} �Ƿ�Ϊ��Ԫ��
         */
        isBlockElm : function (node) {
            return node.nodeType == 1 && (dtd.$block[node.tagName]||styleBlock[domUtils.getComputedStyle(node,'display')])&& !dtd.$nonChild[node.tagName];
        },

        /**
         * �ж��Ƿ�body
         * @param {Node} �ڵ�
         * @return {Boolean}   �Ƿ���body�ڵ�
         */
        isBody : function(node) {
            return  node && node.nodeType == 1 && node.tagName.toLowerCase() == 'body';
        },
        /**
         * ��node�ڵ�Ϊ���ģ����ýڵ�ĸ��ڵ��ֳ�2��
         * @param {Element} node       �ڵ�
         * @param {Element} parent Ҫ����ֵĸ��ڵ�
         * @example <div>xxxx<b>xxx</b>xxx</div> ==> <div>xxx</div><b>xx</b><div>xxx</div>
         */
        breakParent : function(node, parent) {
            var tmpNode, parentClone = node, clone = node, leftNodes, rightNodes;
            do {
                parentClone = parentClone.parentNode;

                if (leftNodes) {
                    tmpNode = parentClone.cloneNode(false);
                    tmpNode.appendChild(leftNodes);
                    leftNodes = tmpNode;

                    tmpNode = parentClone.cloneNode(false);
                    tmpNode.appendChild(rightNodes);
                    rightNodes = tmpNode;

                } else {
                    leftNodes = parentClone.cloneNode(false);
                    rightNodes = leftNodes.cloneNode(false);
                }


                while (tmpNode = clone.previousSibling) {
                    leftNodes.insertBefore(tmpNode, leftNodes.firstChild);
                }

                while (tmpNode = clone.nextSibling) {
                    rightNodes.appendChild(tmpNode);
                }

                clone = parentClone;
            } while (parent !== parentClone);

            tmpNode = parent.parentNode;
            tmpNode.insertBefore(leftNodes, parent);
            tmpNode.insertBefore(rightNodes, parent);
            tmpNode.insertBefore(node, rightNodes);
            domUtils.remove(parent);
            return node;
        },

        /**
         * ����Ƿ��ǿ�inline�ڵ�
         * @param   {Node}    node      �ڵ�
         * @return {Boolean}  ����1Ϊ�ǣ�0Ϊ��
         * @example
         * &lt;b&gt;&lt;i&gt;&lt;/i&gt;&lt;/b&gt; //true
         * <b><i></i><u></u></b> true
         * &lt;b&gt;&lt;/b&gt; true  &lt;b&gt;xx&lt;i&gt;&lt;/i&gt;&lt;/b&gt; //false
         */
        isEmptyInlineElement : function(node) {

            if (node.nodeType != 1 || !dtd.$removeEmpty[ node.tagName ])
                return 0;

            node = node.firstChild;
            while (node) {
                //����Ǵ�����bookmark������
                if (domUtils.isBookmarkNode(node))
                    return 0;
                if (node.nodeType == 1 && !domUtils.isEmptyInlineElement(node) ||
                    node.nodeType == 3 && !domUtils.isWhitespace(node)
                    ) {
                    return 0;
                }
                node = node.nextSibling;
            }
            return 1;

        },

        /**
         * ɾ���հ��ӽڵ�
         * @param   {Element}   node    ��Ҫɾ���հ��ӽڵ��Ԫ��
         */
        trimWhiteTextNode : function(node) {

            function remove(dir) {
                var child;
                while ((child = node[dir]) && child.nodeType == 3 && domUtils.isWhitespace(child))
                    node.removeChild(child)

            }

            remove('firstChild');
            remove('lastChild');

        },

        /**
         * �ϲ��ӽڵ�
         * @param    {Node}    node     �ڵ�
         * @param    {String}    tagName     ��ǩ
         * @param    {String}    attrs     ����
         * @example &lt;span style="font-size:12px;"&gt;xx&lt;span style="font-size:12px;"&gt;aa&lt;/span&gt;xx&lt;/span  ʹ�ú�
         * &lt;span style="font-size:12px;"&gt;xxaaxx&lt;/span
         */
        mergChild : function(node, tagName, attrs) {

            var list = domUtils.getElementsByTagName(node, node.tagName.toLowerCase());
            for (var i = 0,ci; ci = list[i++];) {

                if (!ci.parentNode || domUtils.isBookmarkNode(ci)) continue;
                //span��������
                if (ci.tagName.toLowerCase() == 'span') {
                    if (node === ci.parentNode) {
                        domUtils.trimWhiteTextNode(node);
                        if (node.childNodes.length == 1) {
                            node.style.cssText = ci.style.cssText + ";" + node.style.cssText;
                            domUtils.remove(ci, true);
                            continue;
                        }
                    }
                    ci.style.cssText = node.style.cssText + ';' + ci.style.cssText;
                    if (attrs) {
                        var style = attrs.style;
                        if (style) {
                            style = style.split(';');
                            for (var j = 0,s; s = style[j++];) {
                                ci.style[utils.cssStyleToDomStyle(s.split(':')[0])] = s.split(':')[1];
                            }
                        }
                    }
                    if (domUtils.isSameStyle(ci, node)) {

                        domUtils.remove(ci, true)
                    }
                    continue;
                }
                if (domUtils.isSameElement(node, ci)) {
                    domUtils.remove(ci, true);
                }
            }

            if (tagName == 'span') {
                var as = domUtils.getElementsByTagName(node, 'a');
                for (var i = 0,ai; ai = as[i++];) {

                    ai.style.cssText = ';' + node.style.cssText;

                    ai.style.textDecoration = 'underline';

                }
            }
        },

        /**
         * ��װԭ����getElemensByTagName
         * @param  {Node}    node       ���ڵ�
         * @param  {String}   name      ��ǩ��tagName
         * @return {Array}      ���ط���������Ԫ������
         */
        getElementsByTagName : function(node, name) {
            var list = node.getElementsByTagName(name),arr = [];
            for (var i = 0,ci; ci = list[i++];) {
                arr.push(ci)
            }
            return arr;
        },
        /**
         * ���ӽڵ�ϲ������ڵ���
         * @param {Element} node    �ڵ�
         * @example &lt;span style="color:#ff"&gt;&lt;span style="font-size:12px"&gt;xxx&lt;/span&gt;&lt;/span&gt; ==&gt; &lt;span style="color:#ff;font-size:12px"&gt;xxx&lt;/span&gt;
         */
        mergToParent : function(node) {
            var parent = node.parentNode;

            while (parent && dtd.$removeEmpty[parent.tagName]) {
                if (parent.tagName == node.tagName || parent.tagName == 'A') {//���a��ǩ��������
                    domUtils.trimWhiteTextNode(parent);
                    //span��Ҫ���⴦��  ��������������� <span stlye="color:#fff">xxx<span style="color:#ccc">xxx</span>xxx</span>
                    if (parent.tagName == 'SPAN' && !domUtils.isSameStyle(parent, node)
                        || (parent.tagName == 'A' && node.tagName == 'SPAN')) {
                        if (parent.childNodes.length > 1 || parent !== node.parentNode) {
                            node.style.cssText = parent.style.cssText + ";" + node.style.cssText;
                            parent = parent.parentNode;
                            continue;
                        } else {

                            parent.style.cssText += ";" + node.style.cssText;
                            //trace:952 a��ǩҪ�����»���
                            if (parent.tagName == 'A') {
                                parent.style.textDecoration = 'underline';
                            }

                        }
                    }
                    if(parent.tagName != 'A' ){
                       
                         parent === node.parentNode &&  domUtils.remove(node, true);
                        break;
                    }
                }
                parent = parent.parentNode;
            }

        },
        /**
         * �ϲ������ֵܽڵ�
         * @function
         * @param {Node}     node
         * @param {Boolean} ingoreNext   Ĭ��Ϊfalse�ϲ���һ���ֵܽڵ㡣trueΪ���ϲ���һ���ֵܽڵ�
         * @param {Boolean} ingorePre    Ĭ��Ϊfalse�ϲ���һ���ֵܽڵ㡣trueΪ���ϲ���һ���ֵܽڵ�
         * @example &lt;b&gt;xxxx&lt;/b&gt;&lt;b&gt;xxx&lt;/b&gt;&lt;b&gt;xxxx&lt;/b&gt; ==> &lt;b&gt;xxxxxxxxxxx&lt;/b&gt;
         */
        mergSibling : function(node, ingorePre, ingoreNext) {
            function merg(rtl, start, node) {
                var next;
                if ((next = node[rtl]) && !domUtils.isBookmarkNode(next) && next.nodeType == 1 && domUtils.isSameElement(node, next)) {
                    while (next.firstChild) {
                        if (start == 'firstChild') {
                            node.insertBefore(next.lastChild, node.firstChild);
                        } else {
                            node.appendChild(next.firstChild)
                        }

                    }
                    domUtils.remove(next);
                }
            }

            !ingorePre && merg('previousSibling', 'firstChild', node);
            !ingoreNext && merg('nextSibling', 'lastChild', node);
        },

        /**
         * ʹ��Ԫ�ؼ����ӽڵ㲻�ܱ�ѡ��
         * @function
         * @param   {Node}     node      �ڵ�
         */
        unselectable :
            gecko ?
                function(node) {
                    node.style.MozUserSelect = 'none';
                }
                : webkit ?
                function(node) {
                    node.style.KhtmlUserSelect = 'none';
                }
                :
                function(node) {
                    //for ie9
                    node.onselectstart = function () { return false; };
                    node.onclick = node.onkeyup = node.onkeydown = function(){return false};
                    node.unselectable = 'on';
                    node.setAttribute("unselectable","on");
                    for (var i = 0,ci; ci = node.all[i++];) {
                        switch (ci.tagName.toLowerCase()) {
                            case 'iframe' :
                            case 'textarea' :
                            case 'input' :
                            case 'select' :

                                break;
                            default :
                                ci.unselectable = 'on';
                                node.setAttribute("unselectable","on");
                        }
                    }
                },
        /**
         * ɾ��Ԫ���ϵ����ԣ�����ɾ�����
         * @function
         * @param {Element} element      Ԫ��
         * @param {Array} attrNames      Ҫɾ������������
         */
        removeAttributes : function (elm, attrNames) {
            for(var i = 0,ci;ci=attrNames[i++];){
                ci = attrFix[ci] || ci;
                switch (ci){
                    case 'className':
                        elm[ci] = '';
                        break;
                    case 'style':
                        elm.style.cssText = '';
                        !browser.ie && elm.removeAttributeNode(elm.getAttributeNode('style'))
                }
                elm.removeAttribute(ci);
            }
        },
        /**
         * ���ڵ��������
         * @function
         * @param {Node} node      �ڵ�
         * @param {Object} attrNames     Ҫ��ӵ��������ƣ�����json������
         */
        setAttributes : function(node, attrs) {
            for (var name in attrs) {
                var value = attrs[name];
                switch (name) {
                    case 'class':
                        //ie��Ҫ������ֵ��setAttribute��������
                        node.className = value;
                        break;
                    case 'style' :
                        node.style.cssText = node.style.cssText + ";" + value;
                        break;
                    case 'innerHTML':
                        node[name] = value;
                        break;
                    case 'value':
                        node.value = value;
                        break;
                    default:
                        node.setAttribute(attrFix[name]||name, value);
                }
            }

            return node;
        },

        /**
         * ��ȡԪ�ص���ʽ
         * @function
         * @param {Element} element    Ԫ��
         * @param {String} styleName    ��ʽ����
         * @return  {String}    ��ʽֵ
         */
        getComputedStyle : function (element, styleName) {
            function fixUnit(key, val) {
                if (key == 'font-size' && /pt$/.test(val)) {
                    val = Math.round(parseFloat(val) / 0.75) + 'px';
                }
                return val;
            }
            if(element.nodeType == 3){
                element = element.parentNode;
            }

            //ie��font-size��body�¶�����font-size�����currentStyle���ȡ�����font-size. ȡ����ʵ��ֵ���ʴ��޸�.
            if (browser.ie && browser.version < 9 && styleName == 'font-size' && !element.style.fontSize &&
                !dtd.$empty[element.tagName] && !dtd.$nonChild[element.tagName]) {
                var span = element.ownerDocument.createElement('span');
                span.style.cssText = 'padding:0;border:0;font-family:simsun;';
                span.innerHTML = '.';
                element.appendChild(span);
                var result = span.offsetHeight;
                element.removeChild(span);
                span = null;
                return result + 'px';
            }

            try {
                var value = domUtils.getStyle(element, styleName) ||
                    (window.getComputedStyle ? domUtils.getWindow(element).getComputedStyle(element, '').getPropertyValue(styleName) :
                        ( element.currentStyle || element.style )[utils.cssStyleToDomStyle(styleName)]);

            } catch(e) {
                return null;
            }

            return fixUnit(styleName, utils.fixColor(styleName, value));
        },

        /**
         * ɾ��cssClass������֧��ɾ�����class�����Կո�ָ�
         * @param {Element} element         Ԫ��
         * @param {Array} classNames        ɾ����className
         */
        removeClasses : function (element, classNames) {
            element.className = (' ' + element.className + ' ').replace(
                new RegExp('(?:\\s+(?:' + classNames.join('|') + '))+\\s+', 'g'), ' ');
        },
        /**
         * ɾ��Ԫ�ص���ʽ
         * @param {Element} elementԪ��
         * @param {String} name        ɾ������ʽ����
         */
        removeStyle : function(node, name) {
            node.style[utils.cssStyleToDomStyle(name)] = '';
            if(!node.style.cssText)
                domUtils.removeAttributes(node,['style'])
        },
        /**
         * �ж�Ԫ���������Ƿ����ĳһ��classname
         * @param {Element} element    Ԫ��
         * @param {String} className    ��ʽ��
         * @returns {Boolean}       �Ƿ������classname
         */
        hasClass : function (element, className) {
            return ( ' ' + element.className + ' ' ).indexOf(' ' + className + ' ') > -1;
        },

        /**
         * ��ֹ�¼�Ĭ����Ϊ
         * @param {Event} evt    ��Ҫ��֯���¼�����
         */
        preventDefault : function (evt) {
            evt.preventDefault  ? evt.preventDefault() : (evt.returnValue = false);
        },
        /**
         * ���Ԫ����ʽ
         * @param {Element} element    Ԫ��
         * @param {String}  name    ��ʽ����
         * @return  {String}   ����Ԫ����ʽֵ
         */
        getStyle : function(element, name) {
            var value = element.style[ utils.cssStyleToDomStyle(name) ];
            return utils.fixColor(name, value);
        },
        setStyle: function (element, name, value) {
            element.style[utils.cssStyleToDomStyle(name)] = value;
        },
        setStyles: function (element, styles) {
            for (var name in styles) {
                if (styles.hasOwnProperty(name)) {
                    domUtils.setStyle(element, name, styles[name]);
                }
            }
        },
        /**
         * ɾ��_moz_dirty����
         * @function
         * @param {Node}    node    �ڵ�
         */
        removeDirtyAttr : function(node) {
            for (var i = 0,ci,nodes = node.getElementsByTagName('*'); ci = nodes[i++];) {
                ci.removeAttribute('_moz_dirty')
            }
            node.removeAttribute('_moz_dirty')
        },
        /**
         * �����ӽڵ������
         * @function
         * @param {Node}    node    ���ڵ�
         * @param  {Function}    fn    �����ӽڵ�Ĺ�����Ϊ�գ���õ������ӽڵ������
         * @return {Number}    ���������ӽڵ������
         */
        getChildCount : function (node, fn) {
            var count = 0,first = node.firstChild;
            fn = fn || function() {
                return 1
            };
            while (first) {
                if (fn(first))
                    count++;
                first = first.nextSibling;
            }
            return count;
        },

        /**
         * �ж��Ƿ�Ϊ�սڵ�
         * @function
         * @param {Node}    node    �ڵ�
         * @return {Boolean}    �Ƿ�Ϊ�սڵ�
         */
        isEmptyNode : function(node) {
            return !node.firstChild || domUtils.getChildCount(node, function(node) {
                return  !domUtils.isBr(node) && !domUtils.isBookmarkNode(node) && !domUtils.isWhitespace(node)
            }) == 0
        },
        /**
         * ��սڵ����е�className
         * @function
         * @param {Array}    nodes    �ڵ�����
         */
        clearSelectedArr : function(nodes) {
            var node;
            while(node = nodes.pop()){
                domUtils.removeAttributes(node,['class']);
            }
        },


        /**
         * ����ʾ�����������ʾ�ڵ��λ��
         * @function
         * @param    {Node}   node    �ڵ�
         * @param    {window}   win      window����
         * @param    {Number}    offsetTop    �����Ϸ���ƫ����
         */
        scrollToView : function(node, win, offsetTop) {
            var
                getViewPaneSize = function() {
                    var doc = win.document,
                        mode = doc.compatMode == 'CSS1Compat';

                    return {
                        width : ( mode ? doc.documentElement.clientWidth : doc.body.clientWidth ) || 0,
                        height : ( mode ? doc.documentElement.clientHeight : doc.body.clientHeight ) || 0
                    };

                },
                getScrollPosition = function(win) {

                    if ('pageXOffset' in win) {
                        return {
                            x : win.pageXOffset || 0,
                            y : win.pageYOffset || 0
                        };
                    }
                    else {
                        var doc = win.document;
                        return {
                            x : doc.documentElement.scrollLeft || doc.body.scrollLeft || 0,
                            y : doc.documentElement.scrollTop || doc.body.scrollTop || 0
                        };
                    }
                };


            var winHeight = getViewPaneSize().height,offset = winHeight * -1 + offsetTop;


            offset += (node.offsetHeight || 0);

            var elementPosition = domUtils.getXY(node);
            offset += elementPosition.y;

            var currentScroll = getScrollPosition(win).y;

            // offset += 50;
            if (offset > currentScroll || offset < currentScroll - winHeight)
                win.scrollTo(0, offset + (offset < 0 ? -20 : 20));
        },
        /**
         * �жϽڵ��Ƿ�Ϊbr
         * @function
         * @param {Node}    node   �ڵ�
         */
        isBr : function(node) {
            return node.nodeType == 1 && node.tagName == 'BR';
        },
      
        isFillChar : function(node){
            return node.nodeType == 3 && !node.nodeValue.replace(new RegExp( domUtils.fillChar ),'').length
        },
        isStartInblock : function(range){
            
            var tmpRange = range.cloneRange(),
                flag = 0,
                start = tmpRange.startContainer,
                tmp;

            while(start && domUtils.isFillChar(start)){
                tmp = start;
                start = start.previousSibling
            }
            if(tmp){
                tmpRange.setStartBefore(tmp);
                start = tmpRange.startContainer;

            }
            if(start.nodeType == 1 && domUtils.isEmptyNode(start) && tmpRange.startOffset == 1){
                tmpRange.setStart(start,0).collapse(true);
            }
            while(!tmpRange.startOffset){
                start = tmpRange.startContainer;


                if(domUtils.isBlockElm(start)||domUtils.isBody(start)){
                    flag = 1;
                    break;
                }
                var pre = tmpRange.startContainer.previousSibling,
                    tmpNode;
                if(!pre){
                    tmpRange.setStartBefore(tmpRange.startContainer);
                }else{
                    while(pre && domUtils.isFillChar(pre)){
                        tmpNode = pre;
                        pre = pre.previousSibling;

                    }
                    if(tmpNode){
                        tmpRange.setStartBefore(tmpNode);
                    }else
                        tmpRange.setStartBefore(tmpRange.startContainer);
                }



            }
           
            return flag && !domUtils.isBody(tmpRange.startContainer) ? 1 : 0;
        },
        isEmptyBlock : function(node){
            var reg = new RegExp( '[ \t\r\n' + domUtils.fillChar+']', 'g' );

            if(node[browser.ie?'innerText':'textContent'].replace(reg,'').length >0)
                return 0;

            for(var n in dtd.$isNotEmpty){
                if(node.getElementsByTagName(n).length)
                    return 0;
            }
           
            return 1;
        },
       
        setViewportOffset: function (element, offset){
            var left = parseInt(element.style.left) | 0;
            var top = parseInt(element.style.top) | 0;
            var rect = element.getBoundingClientRect();
            var offsetLeft = offset.left - rect.left;
            var offsetTop = offset.top - rect.top;
            if (offsetLeft) {
                element.style.left = left + offsetLeft + 'px';
            }
            if (offsetTop) {
                element.style.top = top + offsetTop + 'px';
            }
        },
        fillNode : function(doc,node){
            var tmpNode = browser.ie ? doc.createTextNode(domUtils.fillChar) : doc.createElement('br');
            node.innerHTML = '';
            node.appendChild(tmpNode);

        },
        moveChild : function(src,tag,dir){
            while(src.firstChild){
                if(dir && tag.firstChild){
                    tag.insertBefore(src.lastChild,tag.firstChild);
                }else{
                    tag.appendChild(src.firstChild)
                }
            }
           
        },
        //�ж��Ƿ��ж�������
        hasNoAttributes : function(node){
            return browser.ie ? /^<\w+\s*?>/.test(node.outerHTML) :node.attributes.length == 0;
        }


    }; 

    var fillCharReg = new RegExp( domUtils.fillChar, 'g' );
///import editor.js
///import core/utils.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
/**
 * @class baidu.editor.dom.Range    Range��
 */
/**
 * @description Range��ʵ��
 * @author zhanyi
 */
(function() {
    var guid = 0,
        fillChar = domUtils.fillChar,
        fillData;

    /**
     * ����range��collapse״̬
     * @param  {Range}   range    range����
     */
    function updateCollapse( range ) {
        range.collapsed =
            range.startContainer && range.endContainer &&
                range.startContainer === range.endContainer &&
                range.startOffset == range.endOffset;
    }
    
    function setEndPoint( toStart, node, offset, range ) {
        //���node���Ապϱ�ǩҪ����
        if ( node.nodeType == 1 && (dtd.$empty[node.tagName] || dtd.$nonChild[node.tagName])) {
            offset = domUtils.getNodeIndex( node ) + (toStart ? 0 : 1);
            node = node.parentNode;
        }
        if ( toStart ) {
            range.startContainer = node;
            range.startOffset = offset;
            if ( !range.endContainer ) {
                range.collapse( true );
            }
        } else {
            range.endContainer = node;
            range.endOffset = offset;
            if ( !range.startContainer ) {
                range.collapse( false );
            }
        }
        updateCollapse( range );
        return range;
    }

    function execContentsAction ( range, action ) {
        //�����߽�
        //range.includeBookmark();

        var start = range.startContainer,
            end = range.endContainer,
            startOffset = range.startOffset,
            endOffset = range.endOffset,
            doc = range.document,
            frag = doc.createDocumentFragment(),
            tmpStart,tmpEnd;

        if ( start.nodeType == 1 ) {
            start = start.childNodes[startOffset] || (tmpStart = start.appendChild( doc.createTextNode( '' ) ));
        }
        if ( end.nodeType == 1 ) {
            end = end.childNodes[endOffset] || (tmpEnd = end.appendChild( doc.createTextNode( '' ) ));
        }

        if ( start === end && start.nodeType == 3 ) {

            frag.appendChild( doc.createTextNode( start.substringData( startOffset, endOffset - startOffset ) ) );
            //is not clone
            if ( action ) {
                start.deleteData( startOffset, endOffset - startOffset );
                range.collapse( true );
            }

            return frag;
        }


        var current,currentLevel,clone = frag,
            startParents = domUtils.findParents( start, true ),endParents = domUtils.findParents( end, true );
        for ( var i = 0; startParents[i] == endParents[i]; i++ );


        for ( var j = i,si; si = startParents[j]; j++ ) {
            current = si.nextSibling;
            if ( si == start ) {
                if ( !tmpStart ) {
                    if ( range.startContainer.nodeType == 3 ) {
                        clone.appendChild( doc.createTextNode( start.nodeValue.slice( startOffset ) ) );
                        //is not clone
                        if ( action ) {
                            start.deleteData( startOffset, start.nodeValue.length - startOffset );

                        }
                    } else {
                        clone.appendChild( !action ? start.cloneNode( true ) : start );
                    }
                }

            } else {
                currentLevel = si.cloneNode( false );
                clone.appendChild( currentLevel );
            }


            while ( current ) {
                if ( current === end || current === endParents[j] )break;
                si = current.nextSibling;
                clone.appendChild( !action ? current.cloneNode( true ) : current );


                current = si;
            }
            clone = currentLevel;

        }


        clone = frag;

        if ( !startParents[i] ) {
            clone.appendChild( startParents[i - 1].cloneNode( false ) );
            clone = clone.firstChild;
        }
        for ( var j = i,ei; ei = endParents[j]; j++ ) {
            current = ei.previousSibling;
            if ( ei == end ) {
                if ( !tmpEnd && range.endContainer.nodeType == 3 ) {
                    clone.appendChild( doc.createTextNode( end.substringData( 0, endOffset ) ) );
                    //is not clone
                    if ( action ) {
                        end.deleteData( 0, endOffset );

                    }
                }


            } else {
                currentLevel = ei.cloneNode( false );
                clone.appendChild( currentLevel );
            }
            //�������ͬ�����ұߵ�һ���Ѿ�����ʼ����
            if ( j != i || !startParents[i] ) {
                while ( current ) {
                    if ( current === start )break;
                    ei = current.previousSibling;
                    clone.insertBefore( !action ? current.cloneNode( true ) : current, clone.firstChild );


                    current = ei;
                }

            }
            clone = currentLevel;
        }


        if ( action ) {
            range.setStartBefore( !endParents[i] ? endParents[i - 1] : !startParents[i] ? startParents[i - 1] : endParents[i] ).collapse( true )
        }
        tmpStart && domUtils.remove( tmpStart );
        tmpEnd && domUtils.remove( tmpEnd );
        return frag;
    }


    /**
     * Range��
     * @param {Document} document �༭��ҳ��document����
     */
    var Range = dom.Range = function( document ) {
        var me = this;
        me.startContainer =
        me.startOffset =
        me.endContainer =
        me.endOffset = null;
        me.document = document;
        me.collapsed = true;
    };

    function removeFillData(doc,excludeNode){
        try{
            if ( fillData && domUtils.inDoc(fillData,doc)  ) {

                  if(!fillData.nodeValue.replace( fillCharReg, '' ).length){
                      var tmpNode = fillData.parentNode;
                      domUtils.remove(fillData);
                      while(tmpNode && domUtils.isEmptyInlineElement(tmpNode) && !tmpNode.contains(excludeNode)){
                          fillData = tmpNode.parentNode;
                          domUtils.remove(tmpNode);
                          tmpNode = fillData
                      }

                  }else
                      fillData.nodeValue = fillData.nodeValue.replace( fillCharReg, '' )
            }
        }catch(e){}

    }
    function mergSibling(node,dir){
       var tmpNode;
       node = node[dir];
       while(node && domUtils.isFillChar(node)){
           tmpNode = node[dir];
           domUtils.remove(node);
           node = tmpNode;
       }
   }
    Range.prototype = {
        /**
         * ��¡ѡ�е����ݵ�һ��fragment��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.cloneContents
         * @return {Fragment}    frag|null ����ѡ�����ݵ��ı�Ƭ�λ��߿�
         */
        cloneContents : function() {
            return this.collapsed ? null : execContentsAction( this, 0 );
        },
        /**
         * ɾ����ѡ����
         * @public
         * @function
         * @name    baidu.editor.dom.Range.deleteContents
         * @return {Range}    ɾ��ѡ�����ݺ��Range
         */
        deleteContents : function() {
            if ( !this.collapsed )
                execContentsAction( this, 1 );
            if(browser.webkit){
                var txt = this.startContainer;
                if(txt.nodeType == 3 && !txt.nodeValue.length){

                    this.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt)
                }
            }
            return this;
        },
        /**
         * ȡ������
         * @public
         * @function
         * @name    baidu.editor.dom.Range.extractContents
         * @return {String}    ���Rangeѡ�е�����
         */
        extractContents : function() {
            return this.collapsed ? null : execContentsAction( this, 2 );
        },
        /**
         * ����range�Ŀ�ʼλ��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.setStart
         * @param    {Node}     node     range��ʼ�ڵ�
         * @param    {Number}   offset   ƫ����
         * @return   {Range}    ����Range
         */
        setStart : function( node, offset ) {
            return setEndPoint( true, node, offset, this );
        },
        /**
         * ����range�������λ��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.setEnd
         * @param    {Node}     node     range�����ڵ�
         * @param    {Number}   offset   ƫ����
         * @return   {Range}    ����Range
         */
        setEnd : function( node, offset ) {
            return setEndPoint( false, node, offset, this );
        },
        /**
         * ����ʼλ�����õ�node��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.setStartAfter
         * @param    {Node}     node     �ڵ�
         * @return   {Range}    ����Range
         */
        setStartAfter : function( node ) {
            return this.setStart( node.parentNode, domUtils.getNodeIndex( node ) + 1 );
        },
        /**
         * ����ʼλ�����õ�nodeǰ
         * @public
         * @function
         * @name    baidu.editor.dom.Range.setStartBefore
         * @param    {Node}     node     �ڵ�
         * @return   {Range}    ����Range
         */
        setStartBefore : function( node ) {
            return this.setStart( node.parentNode, domUtils.getNodeIndex( node ) );
        },
        /**
         * ��������λ�����õ�node��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.setEndAfter
         * @param    {Node}     node     �ڵ�
         * @return   {Range}    ����Range
         */
        setEndAfter : function( node ) {
            return this.setEnd( node.parentNode, domUtils.getNodeIndex( node ) + 1 );
        },
        /**
         * ��������λ�����õ�nodeǰ
         * @public
         * @function
         * @name    baidu.editor.dom.Range.setEndBefore
         * @param    {Node}     node     �ڵ�
         * @return   {Range}    ����Range
         */
        setEndBefore : function( node ) {
            return this.setEnd( node.parentNode, domUtils.getNodeIndex( node ) );
        },
        /**
         * ѡ��ָ���ڵ�
         * @public
         * @function
         * @name    baidu.editor.dom.Range.selectNode
         * @param    {Node}     node     �ڵ�
         * @return   {Range}    ����Range
         */
        selectNode : function( node ) {
            return this.setStartBefore( node ).setEndAfter( node );
        },
        /**
         * ѡ��node�µ����нڵ�
         * @public
         * @function
         * @name    baidu.editor.dom.Range.selectNodeContents
         * @param {Element} node Ҫ���õĽڵ�
         * @return   {Range}    ����Range
         */
        selectNodeContents : function( node ) {
            return this.setStart( node, 0 ).setEnd( node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length );
        },

        /**
         * ��¡range
         * @public
         * @function
         * @name    baidu.editor.dom.Range.cloneRange
         * @return {Range} ��¡��range����
         */
        cloneRange : function() {
            var me = this,range = new Range( me.document );
            return range.setStart( me.startContainer, me.startOffset ).setEnd( me.endContainer, me.endOffset );

        },

        /**
         * ��ѡ���պ�
         * @public
         * @function
         * @name    baidu.editor.dom.Range.collapse
         * @param {Boolean} toStart �Ƿ���ѡ����ʼλ�ñպ�ѡ����true�ڿ�ʼλ�ñպϣ�false��֮
         * @return {Range}  range����
         */
        collapse : function( toStart ) {
            var me = this;
            if ( toStart ) {
                me.endContainer = me.startContainer;
                me.endOffset = me.startOffset;
            }
            else {
                me.startContainer = me.endContainer;
                me.startOffset = me.endOffset;
            }

            me.collapsed = true;
            return me;
        },
        /**
         * ����range�ı߽磬�����������ʵ�λ��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.shrinkBoundary
         * @param    {Boolean}     ignoreEnd      �Ƿ���ǰ���Ԫ��
         */
        shrinkBoundary : function( ignoreEnd ) {
            var me = this,child,
                collapsed = me.collapsed;
            while ( me.startContainer.nodeType == 1 //��element
                && (child = me.startContainer.childNodes[me.startOffset]) //�ӽڵ�Ҳ��element
                && child.nodeType == 1  && !domUtils.isBookmarkNode(child)
                && !dtd.$empty[child.tagName] && !dtd.$nonChild[child.tagName] ) {
                me.setStart( child, 0 );
            }
            if ( collapsed )
                return me.collapse( true );
            if ( !ignoreEnd ) {
                while ( me.endContainer.nodeType == 1//��element
                    && me.endOffset > 0 //����ǿ�Ԫ�ؾ��˳� endOffset=0��ôendOffst-1Ϊ��ֵ��childNodes[endOffset]����
                    && (child = me.endContainer.childNodes[me.endOffset - 1]) //�ӽڵ�Ҳ��element
                    && child.nodeType == 1 && !domUtils.isBookmarkNode(child)
                    && !dtd.$empty[child.tagName] && !dtd.$nonChild[child.tagName]) {
                    me.setEnd( child, child.childNodes.length );
                }
            }

            return me;
        },
        /**
         * �ҵ�startContainer��endContainer�Ĺ������Ƚڵ�
         * @public
         * @function
         * @name    baidu.editor.dom.Range.getCommonAncestor
         * @param {Boolean} includeSelf �Ƿ��������
         * @param {Boolean} ignoreTextNode �Ƿ�����ı��ڵ�
         * @return   {Node}   ���Ƚڵ�
         */
        getCommonAncestor : function( includeSelf, ignoreTextNode ) {
            var start = this.startContainer,
                end = this.endContainer;
            if ( start === end ) {
                if ( includeSelf && start.nodeType == 1 && this.startOffset == this.endOffset - 1 ) {
                    return start.childNodes[this.startOffset];
                }
                //ֻ������������ȵ�����²Ż�������ı������
                return ignoreTextNode && start.nodeType == 3 ? start.parentNode : start;
            }
            return domUtils.getCommonAncestor( start, end );

        },
        /**
         * �и��ı��ڵ㣬���߽�����element
         * @public
         * @function
         * @name    baidu.editor.dom.Range.trimBoundary
         * @param {Boolean}  ignoreEnd    Ϊ��Ͳ���������߽�
         * @return {Range}    range����
         * @example <b>|xxx</b>
         * startContainer = xxx; startOffset = 0
         * ִ�к�
         * startContainer = <b>;  startOffset = 0
         * @example <b>xx|x</b>
         * startContainer = xxx;  startOffset = 2
         * ִ�к�
         * startContainer = <b>; startOffset = 1  ��Ϊ��xxx�и��2���ڵ���
         */
        trimBoundary : function( ignoreEnd ) {
            this.txtToElmBoundary();
            var start = this.startContainer,
                offset = this.startOffset,
                collapsed = this.collapsed,
                end = this.endContainer;
            if ( start.nodeType == 3 ) {
                if ( offset == 0 ) {
                    this.setStartBefore( start )
                } else {
                    if ( offset >= start.nodeValue.length ) {
                        this.setStartAfter( start );
                    } else {
                        var textNode = domUtils.split( start, offset );
                        //���½����߽�
                        if ( start === end )
                            this.setEnd( textNode, this.endOffset - offset );
                        else if ( start.parentNode === end )
                            this.endOffset += 1;
                        this.setStartBefore( textNode );
                    }
                }
                if ( collapsed ) {
                    return this.collapse( true );
                }
            }
            if ( !ignoreEnd ) {
                offset = this.endOffset;
                end = this.endContainer;
                if ( end.nodeType == 3 ) {
                    if ( offset == 0 ) {
                        this.setEndBefore( end );
                    } else {
                        if ( offset >= end.nodeValue.length ) {
                            this.setEndAfter( end );
                        } else {
                            domUtils.split( end, offset );
                            this.setEndAfter( end );
                        }
                    }

                }
            }
            return this;
        },
        /**
         * ���ѡ�����ı��ı߽��ϣ�����չѡ�����ı��ĸ��ڵ���
         * @public
         * @function
         * @name    baidu.editor.dom.Range.txtToElmBoundary
         * @return {Range}    range����
         * @example <b> |xxx</b>
         * startContainer = xxx;  startOffset = 0
         * ִ�к�
         * startContainer = <b>; startOffset = 0
         * @example <b> xxx| </b>
         * startContainer = xxx; startOffset = 3
         * ִ�к�
         * startContainer = <b>; startOffset = 1
         */
        txtToElmBoundary : function() {
            function adjust( r, c ) {
                var container = r[c + 'Container'],
                    offset = r[c + 'Offset'];
                if ( container.nodeType == 3 ) {
                    if ( !offset ) {
                        r['set' + c.replace( /(\w)/, function( a ) {
                            return a.toUpperCase()
                        } ) + 'Before']( container )
                    } else if ( offset >= container.nodeValue.length ) {
                        r['set' + c.replace( /(\w)/, function( a ) {
                            return a.toUpperCase()
                        } ) + 'After' ]( container )
                    }
                }
            }

            if ( !this.collapsed ) {
                adjust( this, 'start' );
                adjust( this, 'end' );
            }

            return this;
        },

        /**
         * �ڵ�ǰѡ���Ŀ�ʼλ��ǰ����һ���ڵ����fragment
         * @public
         * @function
         * @name    baidu.editor.dom.Range.insertNode
         * @param {Node/DocumentFragment}    node    Ҫ����Ľڵ��fragment
         * @return  {Range}    ����range����
         */
        insertNode : function( node ) {
            var first = node,length = 1;
            if ( node.nodeType == 11 ) {
                first = node.firstChild;
                length = node.childNodes.length;
            }


            this.trimBoundary( true );

            var start = this.startContainer,
                offset = this.startOffset;

            var nextNode = start.childNodes[ offset ];

            if ( nextNode ) {
                start.insertBefore( node, nextNode );

            }
            else {
                start.appendChild( node );
            }


            if ( first.parentNode === this.endContainer ) {
                this.endOffset = this.endOffset + length;
            }


            return this.setStartBefore( first );
        },
        /**
         * ���ù��λ��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.setCursor
         * @param {Boolean}   toEnd   trueΪ�պϵ�ѡ���Ľ���λ�ú�falseΪ�պϵ�ѡ���Ŀ�ʼλ��ǰ
         * @return  {Range}    ����range����
         */
        setCursor : function( toEnd ,notFillData) {
            return this.collapse( toEnd ? false : true ).select(notFillData);
        },
        /**
         * ������ǩ
         * @public
         * @function
         * @name    baidu.editor.dom.Range.createBookmark
         * @param {Boolean}   serialize    true��Ϊtrue�򷵻ض�������id���ֱ��ʾ��ǩ�Ŀ�ʼ�ͽ����ڵ�
         * @param  {Boolean}   same        true���Ƿ����Ψһ��id��false����Ϊÿһ����ǩ����һ��Ψһ��id
         * @returns {Object} bookmark����
         */
        createBookmark : function( serialize, same ) {
            var endNode,
                startNode = this.document.createElement( 'span' );
            startNode.style.cssText = 'display:none;line-height:0px;';
            startNode.appendChild( this.document.createTextNode( '\uFEFF' ) );
            startNode.id = '_baidu_bookmark_start_' + (same ? '' : guid++);

            if ( !this.collapsed ) {
                endNode = startNode.cloneNode( true );
                endNode.id = '_baidu_bookmark_end_' + (same ? '' : guid++);
            }
            this.insertNode( startNode );

            if ( endNode ) {
                this.collapse( false ).insertNode( endNode );
                this.setEndBefore( endNode )
            }
            this.setStartAfter( startNode );

            return {
                start : serialize ? startNode.id : startNode,
                end : endNode ? serialize ? endNode.id : endNode : null,
                id : serialize
            }
        },
        /**
         *  �ƶ��߽絽��ǩ����ɾ����ǩ
         *  @public
         *  @function
         *  @name    baidu.editor.dom.Range.moveToBookmark
         *  @params {Object} bookmark����
         *  @returns {Range}    Range����
         */
        moveToBookmark : function( bookmark ) {
            var start = bookmark.id ? this.document.getElementById( bookmark.start ) : bookmark.start,
                end = bookmark.end && bookmark.id ? this.document.getElementById( bookmark.end ) : bookmark.end;
            this.setStartBefore( start );
            domUtils.remove( start );
            if ( end ) {
                this.setEndBefore( end );
                domUtils.remove( end )
            } else {
                this.collapse( true );
            }

            return this;
        },
        /**
         * �����߽絽һ��blockԪ���ϣ������ƶ�������λ��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.enlarge
         * @params {Boolean}  toBlock    ��չ��blockԪ��
         * @params {Function} stopFn      ֹͣ������������true��������չ
         * @return   {Range}    Range����
         */
        enlarge : function( toBlock, stopFn ) {
            var isBody = domUtils.isBody,
                pre,node,tmp = this.document.createTextNode( '' );
            if ( toBlock ) {
                node = this.startContainer;
                if ( node.nodeType == 1 ) {
                    if ( node.childNodes[this.startOffset] ) {
                        pre = node = node.childNodes[this.startOffset]
                    } else {
                        node.appendChild( tmp );
                        pre = node = tmp;
                    }
                } else {
                    pre = node;
                }

                while ( 1 ) {
                    if ( domUtils.isBlockElm( node ) ) {
                        node = pre;
                        while ( (pre = node.previousSibling) && !domUtils.isBlockElm( pre ) ) {
                            node = pre;
                        }
                        this.setStartBefore( node );

                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                node = this.endContainer;
                if ( node.nodeType == 1 ) {
                    if(pre = node.childNodes[this.endOffset]) {
                        node.insertBefore( tmp, pre );
                    }else{
                        node.appendChild(tmp)
                    }

                    pre = node = tmp;
                } else {
                    pre = node;
                }

                while ( 1 ) {
                    if ( domUtils.isBlockElm( node ) ) {
                        node = pre;
                        while ( (pre = node.nextSibling) && !domUtils.isBlockElm( pre ) ) {
                            node = pre;
                        }
                        this.setEndAfter( node );

                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                if ( tmp.parentNode === this.endContainer ) {
                    this.endOffset--;
                }
                domUtils.remove( tmp )
            }

            // ��չ�߽絽���
            if ( !this.collapsed ) {
                while ( this.startOffset == 0 ) {
                    if ( stopFn && stopFn( this.startContainer ) )
                        break;
                    if ( isBody( this.startContainer ) )break;
                    this.setStartBefore( this.startContainer );
                }
                while ( this.endOffset == (this.endContainer.nodeType == 1 ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length) ) {
                    if ( stopFn && stopFn( this.endContainer ) )
                        break;
                    if ( isBody( this.endContainer ) )break;

                    this.setEndAfter( this.endContainer )
                }
            }

            return this;
        },
        /**
         * �����߽�
         * @public
         * @function
         * @name    baidu.editor.dom.Range.adjustmentBoundary
         * @return   {Range}    Range����
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>[xx</b><i>]xxx</i> ==> <b>[xx</b>]<i>xxx</i>
         *
         */
        adjustmentBoundary : function() {
            if(!this.collapsed){
                while ( !domUtils.isBody( this.startContainer ) &&
                    this.startOffset == this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                ) {
                    this.setStartAfter( this.startContainer );
                }
                while ( !domUtils.isBody( this.endContainer ) && !this.endOffset ) {
                    this.setEndBefore( this.endContainer );
                }
            }
            return this;
        },
        /**
         * ��ѡ���е����ݼ���inline��ʽ
         * @public
         * @function
         * @name    baidu.editor.dom.Range.applyInlineStyle
         * @param {String} tagName ��ǩ����
         * @param {Object} attrObj ����
         * @return   {Range}    Range����
         */
        applyInlineStyle : function( tagName, attrs ,list) {
            
            if(this.collapsed)return this;
            this.trimBoundary().enlarge( false,
                function( node ) {
                    return node.nodeType == 1 && domUtils.isBlockElm( node )
                } ).adjustmentBoundary();


            var bookmark = this.createBookmark(),
                end = bookmark.end,
                filterFn = function( node ) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace( node )
                },
                current = domUtils.getNextDomNode( bookmark.start, false, filterFn ),
                node,
                pre,
                range = this.cloneRange();

            while ( current && (domUtils.getPosition( current, end ) & domUtils.POSITION_PRECEDING) ) {


                if ( current.nodeType == 3 || dtd[tagName][current.tagName] ) {
                    range.setStartBefore( current );
                    node = current;
                    while ( node && (node.nodeType == 3 || dtd[tagName][node.tagName]) && node !== end ) {

                        pre = node;
                        node = domUtils.getNextDomNode( node, node.nodeType == 1, null, function( parent ) {
                            return dtd[tagName][parent.tagName]
                        } )
                    }

                    var frag = range.setEndAfter( pre ).extractContents(),elm;
                    if(list && list.length > 0){
                        var level,top;
                        top = level = list[0].cloneNode(false);
                        for(var i=1,ci;ci=list[i++];){

                            level.appendChild(ci.cloneNode(false));
                            level = level.firstChild;

                        }
                        elm = level;

                    }else{
                        elm = range.document.createElement( tagName )
                    }
                    
                    if ( attrs ) {
                        domUtils.setAttributes( elm, attrs )
                    }
                    elm.appendChild( frag );


                    range.insertNode( list ?  top : elm );
                    //�����»�����a�ϵ����
                    var aNode;
                    if(tagName == 'span' && attrs.style && /text\-decoration/.test(attrs.style) && (aNode = domUtils.findParentByTagName(elm,'a',true)) ){

                            domUtils.setAttributes(aNode,attrs);
                            domUtils.remove(elm,true);
                            elm = aNode;



                    }else{
                        domUtils.mergSibling( elm );
                        domUtils.clearEmptySibling( elm );
                    }
                     //ȥ���ӽڵ���ͬ��
                    domUtils.mergChild( elm, tagName,attrs );
                    current = domUtils.getNextDomNode( elm, false, filterFn );
                    domUtils.mergToParent( elm );
                    if ( node === end )break;
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn )
                }
            }

            return this.moveToBookmark( bookmark );
        },
        /**
         * ȥ��inline��ʽ
         * @public
         * @function
         * @name    baidu.editor.dom.Range.removeInlineStyle
         * @param  {String/Array}    tagName    Ҫȥ���ı�ǩ��
         * @return   {Range}    Range����
         */
        removeInlineStyle : function( tagName ) {
            if(this.collapsed)return this;
            tagName = utils.isArray( tagName ) ? tagName : [tagName];

            this.shrinkBoundary().adjustmentBoundary();

            var start = this.startContainer,end = this.endContainer;

            while ( 1 ) {

                if ( start.nodeType == 1 ) {
                    if ( utils.indexOf( tagName, start.tagName.toLowerCase() ) > -1 ) {
                        break;
                    }
                    if ( start.tagName.toLowerCase() == 'body' ) {
                        start = null;
                        break;
                    }


                }
                start = start.parentNode;

            }

            while ( 1 ) {
                if ( end.nodeType == 1 ) {
                    if ( utils.indexOf( tagName, end.tagName.toLowerCase() ) > -1 ) {
                        break;
                    }
                    if ( end.tagName.toLowerCase() == 'body' ) {
                        end = null;
                        break;
                    }

                }
                end = end.parentNode;
            }


            var bookmark = this.createBookmark(),
                frag,
                tmpRange;
            if ( start ) {
                tmpRange = this.cloneRange().setEndBefore( bookmark.start ).setStartBefore( start );
                frag = tmpRange.extractContents();
                tmpRange.insertNode( frag );
                domUtils.clearEmptySibling( start, true );
                start.parentNode.insertBefore( bookmark.start, start );

            }

            if ( end ) {
                tmpRange = this.cloneRange().setStartAfter( bookmark.end ).setEndAfter( end );
                frag = tmpRange.extractContents();
                tmpRange.insertNode( frag );
                domUtils.clearEmptySibling( end, false, true );
                end.parentNode.insertBefore( bookmark.end, end.nextSibling );


            }

            var current = domUtils.getNextDomNode( bookmark.start, false, function( node ) {
                return node.nodeType == 1
            } ),next;

            while ( current && current !== bookmark.end ) {

                next = domUtils.getNextDomNode( current, true, function( node ) {
                    return node.nodeType == 1
                } );
                if ( utils.indexOf( tagName, current.tagName.toLowerCase() ) > -1 ) {

                    domUtils.remove( current, true );


                }
                current = next;
            }



            return this.moveToBookmark( bookmark );
        },
        /**
         * �õ�һ���ԱպϵĽڵ�
         * @public
         * @function
         * @name    baidu.editor.dom.Range.getClosedNode
         * @return  {Node}    �պϽڵ�
         * @example
         * <img />,<br />
         */
        getClosedNode : function() {

            var node;
            if ( !this.collapsed ) {
                var range = this.cloneRange().adjustmentBoundary().shrinkBoundary();
                if ( range.startContainer.nodeType == 1 && range.startContainer === range.endContainer && range.endOffset - range.startOffset == 1 ) {
                    var child = range.startContainer.childNodes[range.startOffset];
                    if ( child && child.nodeType == 1 && (dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName])) {
                        node = child;
                    }
                }
            }
            return node;
        },
        /**
         * ����rangeѡ��Ԫ��
         * @public
         * @function
         * @name    baidu.editor.dom.Range.select
         * @param  {Boolean}    notInsertFillData        trueΪ����ռλ��
         */
        select : browser.ie ? function( notInsertFillData ,textRange) {

            var nativeRange;

            if ( !this.collapsed )
                this.shrinkBoundary();
            var node = this.getClosedNode();
            if ( node && !textRange) {
                try {
                    nativeRange = this.document.body.createControlRange();
                    nativeRange.addElement( node );
                    nativeRange.select();
                } catch( e ) {
                }
                return this;
            }

            var bookmark = this.createBookmark(),
                start = bookmark.start,
                end;

            nativeRange = this.document.body.createTextRange();
            nativeRange.moveToElementText( start );
            nativeRange.moveStart( 'character', 1 );
            if ( !this.collapsed ) {
                var nativeRangeEnd = this.document.body.createTextRange();
                end = bookmark.end;
                nativeRangeEnd.moveToElementText( end );
                nativeRange.setEndPoint( 'EndToEnd', nativeRangeEnd );

            } else {
                if ( !notInsertFillData && this.startContainer.nodeType != 3 ) {

                    //ʹ��<span>|x<span>�̶�ס���
                    var tmpText = this.document.createTextNode( fillChar ),
                        tmp = this.document.createElement( 'span' );



                    tmp.appendChild( this.document.createTextNode( fillChar) );
                    start.parentNode.insertBefore( tmp, start );
                    start.parentNode.insertBefore( tmpText, start );
                    //����b,i,uʱ���������i�ϱߵ�b
                    removeFillData(this.document,tmpText);
                    fillData = tmpText;

                    mergSibling(tmp,'previousSibling');
                    mergSibling(start,'nextSibling');
                    nativeRange.moveStart( 'character', -1 );
                    nativeRange.collapse( true );

                }
            }

            this.moveToBookmark( bookmark );
            tmp && domUtils.remove( tmp );
            nativeRange.select();
            return this;

        } : function( notInsertFillData ) {

            var win = domUtils.getWindow( this.document ),
                sel = win.getSelection(),
                txtNode;
           
            browser.gecko ?  this.document.body.focus() : win.focus();

            if ( sel ) {
                sel.removeAllRanges();

                // trace:870 chrome/safari�����br���ڱպϵ�range���ܶ�λ ����ȥ�����ж�
                // this.startContainer.nodeType != 3 &&! ((child = this.startContainer.childNodes[this.startOffset]) && child.nodeType == 1 && child.tagName == 'BR'
                if ( this.collapsed && !notInsertFillData  ){



                    txtNode =  this.document.createTextNode( fillChar );

                    //����ǰ����
                    this.insertNode( txtNode );
                    removeFillData(this.document,txtNode);
                    mergSibling(txtNode,'previousSibling');
                    mergSibling(txtNode,'nextSibling');
                    fillData = txtNode;
                    this.setStart( txtNode, browser.webkit ? 1 : 0 ).collapse( true );

                }
                var nativeRange = this.document.createRange();
                nativeRange.setStart( this.startContainer, this.startOffset );
                nativeRange.setEnd( this.endContainer, this.endOffset );

                sel.addRange( nativeRange );

            }
            return this;
        },
        /**
         * ���������ӷ�Χ
         * @public
         * @function
         * @name    baidu.editor.dom.Range.scrollToView
         * @param    {Boolean}   win       ������window������Ϊ�գ���ʹ�õ�ǰ��window����
         * @param    {Number}   offset     ������ƫ����
         * @return   {Range}    Range����
         */
        scrollToView : function(win,offset){

            win = win ? window : domUtils.getWindow(this.document);

            var span = this.document.createElement('span');
            //trace:717
            span.innerHTML = '&nbsp;';
            var tmpRange = this.cloneRange();
            tmpRange.insertNode(span);
            domUtils.scrollToView(span,win,offset);

            domUtils.remove(span);
            return this;
        }

    };
})();
///import editor.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
///import core/dom/Range.js
/**
 * @class baidu.editor.dom.Selection    Selection��
 */
(function () {

    function getBoundaryInformation( range, start ) {

        var getIndex = domUtils.getNodeIndex;

        range = range.duplicate();
        range.collapse( start );


        var parent = range.parentElement();

        //����ڵ���û���ӽڵ㣬ֱ���˳�
        if ( !parent.hasChildNodes() ) {
            return  {container:parent,offset:0};
        }

        var siblings = parent.children,
            child,
            testRange = range.duplicate(),
            startIndex = 0,endIndex = siblings.length - 1,index = -1,
            distance;

        while ( startIndex <= endIndex ) {
            index = Math.floor( (startIndex + endIndex) / 2 );
            child = siblings[index];
            testRange.moveToElementText( child );
            var position = testRange.compareEndPoints( 'StartToStart', range );


            if ( position > 0 ) {

                endIndex = index - 1;
            } else if ( position < 0 ) {

                startIndex = index + 1;
            } else {
                //trace:1043
                return  {container:parent,offset:getIndex( child )};
            }
        }

        if ( index == -1 ) {
            testRange.moveToElementText( parent );
            testRange.setEndPoint( 'StartToStart', range );
            distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
            siblings = parent.childNodes;
            if ( !distance ) {
                child = siblings[siblings.length - 1];
                return  {container:child,offset:child.nodeValue.length};
            }

            var i = siblings.length;
            while ( distance > 0 )
                distance -= siblings[ --i ].nodeValue.length;

            return {container:siblings[i],offset:-distance}
        }

        testRange.collapse( position > 0 );
        testRange.setEndPoint( position > 0 ? 'StartToStart' : 'EndToStart', range );
        distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
        if ( !distance ) {
            return  dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName]?

            {container : parent,offset:getIndex( child ) + (position > 0 ? 0 : 1)} :
            {container : child,offset: position > 0 ? 0 : child.childNodes.length}
        }

        while ( distance > 0 ) {
            try{
                var pre = child;
                child = child[position > 0 ? 'previousSibling' : 'nextSibling'];
                distance -= child.nodeValue.length;
            }catch(e){
                return {container:parent,offset:getIndex(pre)};
            }

        }
        return  {container:child,offset:position > 0 ? -distance : child.nodeValue.length + distance}
    }

    /**
     * ��ieRangeת��ΪRange����
     * @param {Range}   ieRange    ieRange����
     * @param {Range}   range      Range����
     * @return  {Range}  range       ����ת�����Range����
     */
    function transformIERangeToRange( ieRange, range ) {
        if ( ieRange.item ) {
            range.selectNode( ieRange.item( 0 ) );
        } else {
            var bi = getBoundaryInformation( ieRange, true );
            range.setStart( bi.container, bi.offset );
            if ( ieRange.compareEndPoints( 'StartToEnd',ieRange ) != 0 ) {
                bi = getBoundaryInformation( ieRange, false );
                range.setEnd( bi.container, bi.offset );
            }
        }
        return range;
    }

    /**
     * ���ieRange
     * @param {Selection} sel    Selection����
     * @return {ieRange}    �õ�ieRange
     */
    function _getIERange(sel){
        var ieRange;
        //ie���п��ܱ���
        try{
            ieRange = sel.getNative().createRange();
        }catch(e){
            return null;
        }
        var el = ieRange.item ? ieRange.item( 0 ) : ieRange.parentElement();
        if ( ( el.ownerDocument || el ) === sel.document ) {
            return ieRange;
        }
        return null;
    }
    var Selection = dom.Selection = function ( doc ) {
        var me = this, iframe;
        me.document = doc;

        if ( ie ) {
            iframe = domUtils.getWindow(doc).frameElement;
            domUtils.on( iframe, 'beforedeactivate', function () {
                me._bakIERange = me.getIERange();
            } );
            domUtils.on( iframe, 'activate', function () {
                try {
                    if ( !_getIERange(me) && me._bakIERange ) {
                        me._bakIERange.select();
                    }
                } catch ( ex ) {
                }
                me._bakIERange = null;
            } );
        }
        iframe = doc = null;
    };

    Selection.prototype = {
        /**
         * ��ȡԭ��seleciton����
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getNative
         * @return {Selection}    ���selection����
         */
        getNative : function () {
            var doc = this.document;
            return !doc ? null : ie ? doc.selection : domUtils.getWindow( doc ).getSelection();
        },



        /**
         * ���ieRange
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getIERange
         * @return {ieRange}    ����ieԭ����Range
         */
        getIERange : function () {

            var ieRange = _getIERange(this);
            if ( !ieRange ) {
                if ( this._bakIERange ) {
                    return this._bakIERange;
                }
            }
            return ieRange;
        },

        /**
         * ���浱ǰѡ����range��ѡ���Ŀ�ʼ�ڵ�
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.cache
         */
        cache : function () {
            this.clear();
            this._cachedRange = this.getRange();
            this._cachedStartElement = this.getStart();

            this._cachedStartElementPath = this.getStartElementPath();
        },

        getStartElementPath : function(){
            if(this._cachedStartElementPath){
                return this._cachedStartElementPath;
            }
            var start = this.getStart();
            if(start){
                return domUtils.findParents(start,true,null,true)
            }
            return [];
        },
        /**
         * ��ջ���
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.clear
         */
        clear : function () {
            this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null;
        },
        /**
         * �༭���Ƿ�õ���ѡ��
         */
        isFocus : function(){
            return browser.ie  && _getIERange(this) || !browser.ie &&  this.getNative().rangeCount ? true : false;
        },
        /**
         * ��ȡѡ����Ӧ��Range
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getRange
         * @returns {baidu.editor.dom.Range}    �õ�Range����
         */
        getRange : function () {
            var me = this;
            
            function optimze(range){
                var child = me.document.body.firstChild,
                    collapsed = range.collapsed;
                while(child && child.firstChild){
                    range.setStart(child,0);
                    child = child.firstChild;
                }
                if(!range.startContainer){
                    range.setStart(me.document.body,0)
                }
                if(collapsed){
                    range.collapse(true);
                }
            }
            if ( me._cachedRange != null ) {
                return this._cachedRange;
            }
            var range = new baidu.editor.dom.Range( me.document );

            if ( ie ) {
                var nativeRange = me.getIERange();
                if(nativeRange){
                    transformIERangeToRange( nativeRange, range );
                }else{
                    optimze(range)
                }

            } else {
                var sel = me.getNative();
                if ( sel && sel.rangeCount ) {
                    var firstRange = sel.getRangeAt( 0 ) ;
                    var lastRange = sel.getRangeAt( sel.rangeCount - 1 );
                    range.setStart( firstRange.startContainer, firstRange.startOffset ).setEnd( lastRange.endContainer, lastRange.endOffset );
                    if(range.collapsed && domUtils.isBody(range.startContainer) && !range.startOffset){
                        optimze(range)
                    }
                } else {
                    //trace:1734 �п����Ѿ�����dom�����ˣ���ʶ�Ľڵ�
                    if(this._bakRange && domUtils.inDoc(this._bakRange.startContainer,this.document))
                        return this._bakRange;
                    optimze(range)
                        
                }
                
            }

            return this._bakRange = range;
        },

        /**
         * ��ȡ��ʼԪ�أ�����״̬����
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getStart
         * @return {Element}     ��ÿ�ʼԪ��
         */
        getStart : function () {
            if ( this._cachedStartElement ) {
                return this._cachedStartElement;
            }
            var range = ie ? this.getIERange()  : this.getRange(),
                tmpRange,
                start,tmp,parent;

            if (ie) {
                if(!range){
                    //todo ����һ��ֵ���ܻ�������
                   return this.document.body.firstChild;
                }
                //controlԪ��
                if (range.item)
                    return range.item(0);

                tmpRange = range.duplicate();
                //����ie��<b>x</b>[xx] �պϺ� <b>x|</b>xx
                tmpRange.text.length > 0 && tmpRange.moveStart('character',1);
                tmpRange.collapse(1);
                start = tmpRange.parentElement();


                parent = tmp = range.parentElement();
                while (tmp = tmp.parentNode) {
                    if (tmp == start) {
                        start = parent;
                        break;
                    }
                }

            } else {
                range.shrinkBoundary();
                start = range.startContainer;

                if (start.nodeType == 1 && start.hasChildNodes())
                    start = start.childNodes[Math.min(start.childNodes.length - 1, range.startOffset)];

                if (start.nodeType == 3)
                    return start.parentNode;


            }
            return start;

        },
        /**
         * �õ�ѡ���е��ı�
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getText
         * @return  {String}    ѡ���а������ı�
         */
        getText : function(){
            if(this.isFocus()){
                var nativeSel = this.getNative(),
                    nativeRange = browser.ie ? nativeSel.createRange() : nativeSel.getRangeAt(0);

                return nativeRange.text || nativeRange.toString();
            }
            return '';
        }
    };


})();
///import editor.js
///import core/utils.js
///import core/EventBase.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/domUtils.js
///import core/dom/Selection.js
///import core/dom/dtd.js
(function () {


    var uid = 0,
        _selectionChangeTimer;

    function replaceSrc(div){
         var imgs = div.getElementsByTagName("img"),
             orgSrc;
         for(var i=0,img;img = imgs[i++];){
             if(orgSrc = img.getAttribute("orgSrc")){
                 img.src = orgSrc;
                 img.removeAttribute("orgSrc");
             }
         }
         var as = div.getElementsByTagName("a");
         for(var i=0,ai;ai=as[i++];i++){
            if(ai.getAttribute('data_ue_src')){
                ai.setAttribute('href',ai.getAttribute('data_ue_src'))
               
            }
         }

     }

    /**
     * �༭����
     * @public
     * @class
     * @extends baidu.editor.EventBase
     * @name baidu.editor.Editor
     * @param {Object} options
     */
    var Editor = UE.Editor = function( options ) {
        var me = this;
        me.uid = uid ++;
        EventBase.call( me );
        me.commands = {};
        me.options = utils.extend( options || {}, UEDITOR_CONFIG, true );
        //��ʼ�����
        for ( var pi in UE.plugins ) {
            UE.plugins[pi].call( me )
        }
    };
    Editor.prototype = /**@lends baidu.editor.Editor.prototype*/{

        destroy : function(){
            this.fireEvent('destroy');
            this.container.innerHTML = '';
            domUtils.remove(this.container);

        },
        /**
         * ��Ⱦ�༭����DOM��ָ��������������ֻ�ܵ���һ��
         * @public
         * @function
         * @param {Element|String} container
         */
        render : function ( container ) {
            if (container.constructor === String) {
                container = document.getElementById(container);
            }
            if(container){
                container.innerHTML = '<iframe id="' + 'baidu_editor_' + this.uid + '"' + 'width="100%" height="100%"  frameborder="0"></iframe>';
                container.style.overflow = 'hidden';
                this._setup( container.firstChild.contentWindow.document );
            }

        },

        _setup: function ( doc ) {
            var options = this.options,
                me = this;
            //��ֹ��chrome�����Ӻ�ߴ�# ������������
            !browser.webkit && doc.open();
            var useBodyAsViewport = ie && browser.version < 9;
            doc.write( ( ie && browser.version < 9 ? '' : '<!DOCTYPE html>') +
                '<html xmlns="http://www.w3.org/1999/xhtml"' + (!useBodyAsViewport ? ' class="view"' : '')  + '><head>' +
                ( options.iframeCssUrl ? '<link rel="stylesheet" type="text/css" href="' + utils.unhtml( /^http/.test(options.iframeCssUrl) ? options.iframeCssUrl : (options.UEDITOR_HOME_URL + options.iframeCssUrl) ) + '"/>' : '' ) +
                '<style type="text/css">'
                + ( options.initialStyle ||' ' ) +
                '</style></head><body' + (useBodyAsViewport ? ' class="view"' : '')  + '></body></html>' );
            !browser.webkit && doc.close();
            if ( ie ) {
                doc.body.disabled = true;
                doc.body.contentEditable = true;
                doc.body.disabled = false;
            } else {
                doc.body.contentEditable = true;
                doc.body.spellcheck = false;
            }
            this.document = doc;
            this.window = doc.defaultView || doc.parentWindow;

            this.iframe = this.window.frameElement;
            this.body = doc.body;
            if (this.options.minFrameHeight) {
                this.setHeight(this.options.minFrameHeight);
                this.body.style.height = this.options.minFrameHeight;
            }
            this.selection = new dom.Selection( doc );
            //gecko��ʼ�����ܵõ�range,�޷��ж�isFocus��
            if(browser.gecko){
                this.selection.getNative().removeAllRanges();
            }
            this._initEvents();
            if(me.options.initialContent){
                if(me.options.autoClearinitialContent){
                    var oldExecCommand = me.execCommand;
                    me.execCommand = function(){
                        me.fireEvent('firstBeforeExecCommand');
                        oldExecCommand.apply(me,arguments)
                    };
                    this.setDefaultContent(this.options.initialContent);
                }else
                    this.setContent(this.options.initialContent,true);
            }
            //Ϊform�ύ�ṩһ�����ص�textarea
            for(var form = this.iframe.parentNode;!domUtils.isBody(form);form = form.parentNode){

                if(form.tagName == 'FORM'){
                    domUtils.on(form,'submit',function(){

                        var textarea = document.getElementById('ueditor_textarea_' + me.options.textarea);

                        if(!textarea){
                            textarea = document.createElement('textarea');
                            textarea.setAttribute('name',me.options.textarea);
                            textarea.id = 'ueditor_textarea_' + me.options.textarea;
                            textarea.style.display = 'none';
                            this.appendChild(textarea);
                        }
                        textarea.value = me.getContent();

                    });
                    break;
                }
            }
            //�༭������Ϊ������
            if(domUtils.isEmptyNode(me.body)){
                this.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
            }
            //���Ҫ��focus, �Ͱѹ�궨λ�����ݿ�ʼ
            if(me.options.focus){
                setTimeout(function(){
                    me.focus();
                    //����Զ�������ţ��Ͳ���Ҫ��selectionchange;
                    !me.options.autoClearinitialContent &&  me._selectionChange()
                });


            }

            if(!this.container){
                this.container = this.iframe.parentNode;
            }

            if(me.options.fullscreen && me.ui){
                me.ui.setFullScreen(true)
            }
            this.fireEvent( 'ready' );
            if(!browser.ie){
                domUtils.on(me.window,'blur',function(){
                    me._bakRange = me.selection.getRange();
                    me.selection.getNative().removeAllRanges();
                });
            }

            //trace:1518 ff3.6body���������ᵼ�µ���հ״��޷���ý���
            if(browser.gecko && browser.version <= 10902){
                //�޸�ff3.6��ʼ�����������ܵ����ý���
               me.body.contentEditable = false;
               setTimeout(function(){
                   me.body.contentEditable = true;
               },100);
                setInterval(function(){
                    me.body.style.height = me.iframe.offsetHeight - 20 + 'px'
                },100)
            }

        },
        /**
         * ����textarea,ͬ���༭�����ݵ�textarea,Ϊ��̨��ȡ������׼��
         * @param formId �ƶ����Ǹ�form�����
         * @public
         * @function
         */

        sync : function(formId){
            var me = this,
                form;
            function setValue(form){
                var textarea = document.getElementById('ueditor_textarea_' + me.options.textarea);

                if(!textarea){
                    textarea = document.createElement('textarea');
                    textarea.setAttribute('name',me.options.textarea);
                    textarea.id = 'ueditor_textarea_' + me.options.textarea;
                    textarea.style.display = 'none';
                    form.appendChild(textarea);
                }
                textarea.value = me.getContent();
            }
            if(formId){
                form = document.getElementById(formId);
                form && setValue(form);
            }else{
                for(form = me.iframe.parentNode;!domUtils.isBody(form);form = form.parentNode){
                    if(form.tagName == 'FORM'){
                        setValue(form);
                        break;
                    }
                }
            }

        },
        /**
         * ���ñ༭���߶�
         * @public
         * @function
         * @param {Number} height    �߶�
         */
        setHeight: function (height){
            if (height !== parseInt(this.iframe.parentNode.style.height)){
                this.iframe.parentNode.style.height = height  +  'px';

            }
            //ie9��body �߶�100%ʧЧ����Ϊ�ֶ�����
            if(browser.ie && browser.version == 9){
                this.document.body.style.height = height - 20 + 'px'
            }
        },

        /**
         * ��ȡ�༭������
         * @public
         * @function
         * @returns {String}
         */
        getContent : function (cmd) {
            this.fireEvent( 'beforegetcontent',cmd );
            var reg = new RegExp( domUtils.fillChar, 'g' ),
                //ie��ȡ�õ�html���ܻ���\n���ڣ�Ҫȥ�����ڴ���replace(/[\t\r\n]*/g,'');���������\n����ȥ��
                html = this.document.body.innerHTML.replace(reg,'').replace(/>[\t\r\n]*?</g,'><');
            this.fireEvent( 'aftergetcontent',cmd );
            if (this.serialize) {
                var node = this.serialize.parseHTML(html);
                node = this.serialize.transformOutput(node);
                html = this.serialize.toHTML(node);
            }
            return html;
        },

        /**
         * ��ȡ�༭���е��ı�����
         * @public
         * @function
         * @returns {String}
         */
        getContentTxt : function(){
            var reg = new RegExp( domUtils.fillChar,'g' );
            return this.body[browser.ie ? 'innerText':'textContent'].replace(reg,'')
        },

        /**
         * ���ñ༭������
         * @public
         * @function
         * @param {String} html
         */
        setContent : function ( html,notFireSelectionchange) {
            var me = this,
                inline = utils.extend({a:1,A:1},dtd.$inline,true),
                lastTagName;

            html = html
                .replace(/^[ \t\r\n]*?</,'<')
                .replace(/>[ \t\r\n]*?$/,'>')
                .replace(/>[\t\r\n]*?</g,'><')//���������\n����ȥ��
                .replace(/[\s\/]?(\w+)?>[ \t\r\n]*?<\/?(\w+)/gi,function(a,b,c){
                    if(b){
                        lastTagName = c;
                    }else{
                        b = lastTagName
                    }
                    return !inline[b] && !inline[c] ? a.replace(/>[ \t\r\n]*?</,'><') : a;
                });
            me.fireEvent( 'beforesetcontent' );
            var serialize = this.serialize;
            if (serialize) {
                var node = serialize.parseHTML(html);
                node = serialize.transformInput(node);
                node = serialize.filter(node);
                html = serialize.toHTML(node);
            }
            //html.replace(new RegExp('[\t\n\r' + domUtils.fillChar + ']*','g'),'');
            //ȥ����\t\n\r ����в���Ĵ��룬��Դ���л�����������ģʽʱ�����ж�������
            //\r��ie�µĲ��ɼ��ַ�����Դ���л�ʱ���ɶ��&nbsp;
            //trace:1559
            this.document.body.innerHTML = html.replace(new RegExp('[\r' + domUtils.fillChar + ']*','g'),'');


            //����ie6��innerHTML�Զ������·��ת���ɾ���·��������
            if(browser.ie && browser.version < 7 && me.options.relativePath){
                replaceSrc(this.document.body);
            }

            //���ı�����inline�ڵ���p��ǩ
            if(me.options.enterTag == 'p'){
                var child = this.body.firstChild,
                    p = me.document.createElement('p'),
                    tmpNode;
                if(!child || child.nodeType == 1 && dtd.$cdata[child.tagName]){
                    this.body.innerHTML = '<p>'+(browser.ie ? '' :'<br/>')+'</p>' + this.body.innerHTML;
                }else{
                     while(child){
                        if(child.nodeType ==3 || child.nodeType == 1 && dtd.p[child.tagName]){
                            tmpNode = child.nextSibling;

                            p.appendChild(child);
                            child = tmpNode;
                            if(!child){
                                me.body.appendChild(p);
                            }
                        }else{
                            if(p.firstChild){
                                me.body.insertBefore(p,child);
                                p = me.document.createElement('p')


                            }
                            child = child.nextSibling
                        }


                    }
                }


            }

            me.adjustTable && me.adjustTable(me.body);
            me.fireEvent( 'aftersetcontent' );
            me.fireEvent( 'contentchange' );
            !notFireSelectionchange && me._selectionChange();
            //��������ѡ��
            me._bakRange = me._bakIERange = null;
            //trace:1742 setContent��gecko�ܵõ���������
            if(browser.gecko){
                me.selection.getNative().removeAllRanges();
            }
        },

        /**
         * �ñ༭����ý���
         * @public
         * @function
         */
        focus : function () {
            this.selection.getRange().select(true);
        },

         /**
         * ��ʼ���¼�����selectionchange
         * @private
         * @function
         */
        _initEvents : function () {
            var me = this,
                doc = me.document,
                win = me.window;
            me._proxyDomEvent = utils.bind( me._proxyDomEvent, me );
            domUtils.on( doc, ['click',  'contextmenu','mousedown','keydown', 'keyup','keypress', 'mouseup', 'mouseover', 'mouseout', 'selectstart'], me._proxyDomEvent );

            domUtils.on( win, ['focus', 'blur'], me._proxyDomEvent );

            domUtils.on( doc, ['mouseup','keydown'], function(evt){

                //�����������selectionchange
                if(evt.type == 'keydown' && (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey)){
                    return;
                }
                if(evt.button == 2)return;
                me._selectionChange(250, evt );
            });


            //������ק
            //ie ff���ܴ��������
            //chromeֻ��Դ������������ݹ���
            var innerDrag = 0,source = browser.ie ? me.body : me.document,dragoverHandler;

            domUtils.on(source,'dragstart',function(){
                innerDrag = 1;
            });

            domUtils.on(source,browser.webkit ? 'dragover' : 'drop',function(){
                return browser.webkit ?
                    function(){
                        clearTimeout( dragoverHandler );
                        dragoverHandler = setTimeout( function(){
                            if(!innerDrag){
                                var sel = me.selection,
                                    range = sel.getRange();
                                if(range){
                                    var common = range.getCommonAncestor();
                                    if(common && me.serialize){
                                        var f = me.serialize,
                                            node =
                                                f.filter(
                                                    f.transformInput(
                                                        f.parseHTML(
                                                            f.word(common.innerHTML)
                                                        )
                                                    )
                                                );
                                        common.innerHTML = f.toHTML(node)
                                    }

                                }
                            }
                            innerDrag = 0;
                        }, 200 );
                    } :
                    function(e){

                        if(!innerDrag){
                            e.preventDefault ? e.preventDefault() :(e.returnValue = false) ;

                        }
                        innerDrag = 0;
                    }

            }());

        },
        _proxyDomEvent: function ( evt ) {

            return this.fireEvent( evt.type.replace( /^on/, '' ), evt );
        },

        _selectionChange : function ( delay, evt ) {

            var me = this;
            //�й�����selectionchange
            if(!me.selection.isFocus())
                return;

            var hackForMouseUp = false;
            var mouseX, mouseY;
            if (browser.ie && browser.version < 9 && evt && evt.type == 'mouseup') {
                var range = this.selection.getRange();
                if (!range.collapsed) {
                    hackForMouseUp = true;
                    mouseX = evt.clientX;
                    mouseY = evt.clientY;
                }
            }
            clearTimeout(_selectionChangeTimer);
            _selectionChangeTimer = setTimeout(function(){
                if(!me.selection.getNative()){
                    return;
                }
                //�޸�һ��IE�µ�bug: �����һ����ѡ����ı��м�ʱ��������mouseup���һ��ʱ����ȡ����range����selection��typeΪNone�µĴ���ֵ.
                //IE������û�����קһ����ѡ���ı����򲻻ᴥ��mouseup�¼���������������⴦���������Ӱ��
                var ieRange;
                if (hackForMouseUp && me.selection.getNative().type == 'None' ) {
                    ieRange = me.document.body.createTextRange();
                    try {
                        ieRange.moveToPoint( mouseX, mouseY );
                    } catch(ex){
                        ieRange = null;
                    }
                }
                var bakGetIERange;
                if (ieRange) {
                    bakGetIERange = me.selection.getIERange;
                    me.selection.getIERange = function (){
                        return ieRange;
                    };
                }
                me.selection.cache();
                if (bakGetIERange) {
                    me.selection.getIERange = bakGetIERange;
                }
                if ( me.selection._cachedRange && me.selection._cachedStartElement ) {
                    me.fireEvent( 'beforeselectionchange' );
                    // �ڶ�������causeByUiΪtrue�������û�������ɵ�selectionchange.
                    me.fireEvent( 'selectionchange', !!evt );
                    me.fireEvent('afterselectionchange');
                    me.selection.clear();
                }
            }, delay || 50);

        },

        _callCmdFn: function ( fnName, args ) {
            var cmdName = args[0].toLowerCase(),
                cmd, cmdFn;
            cmdFn = ( cmd = this.commands[cmdName] ) && cmd[fnName] ||
                ( cmd = UE.commands[cmdName]) && cmd[fnName];
            if ( cmd && !cmdFn && fnName == 'queryCommandState' ) {
                return false;
            } else if ( cmdFn ) {
                return cmdFn.apply( this, args );
            }
        },

        /**
         * ִ������
         * @public
         * @function
         * @param {String} cmdName ִ�е�������
         * 
         */
        execCommand : function ( cmdName ) {
            cmdName = cmdName.toLowerCase();
            var me = this,
                result,
                cmd = me.commands[cmdName] || UE.commands[cmdName];
            if ( !cmd || !cmd.execCommand ) {
                return;
            }

            if ( !cmd.notNeedUndo && !me.__hasEnterExecCommand ) {
                me.__hasEnterExecCommand = true;
                if(me.queryCommandState(cmdName) !=-1){
                    me.fireEvent( 'beforeexeccommand', cmdName );
                    result = this._callCmdFn( 'execCommand', arguments );
                    me.fireEvent( 'afterexeccommand', cmdName );
                }

                me.__hasEnterExecCommand = false;
            } else {
                result = this._callCmdFn( 'execCommand', arguments );
            }
            me._selectionChange();
            return result;
        },

        /**
         * ��ѯ�����״̬
         * @public
         * @function
         * @param {String} cmdName ִ�е�������
         * @returns {Number|*} -1 : disabled, false : normal, true : enabled.
         * 
         */
        queryCommandState : function ( cmdName ) {
            return this._callCmdFn( 'queryCommandState', arguments );
        },

        /**
         * ��ѯ�����ֵ
         * @public
         * @function
         * @param {String} cmdName ִ�е�������
         * @returns {*}
         */
        queryCommandValue : function ( cmdName ) {
            return this._callCmdFn( 'queryCommandValue', arguments );
        },
        /**
         * ���༭�������Ƿ�������
         * @public
         * @params{Array} �Զ���ı�ǩ
         * @function
         * @returns {Boolean} true ��,false û��
         */
        hasContents : function(tags){
            if(tags){
               for(var i=0,ci;ci=tags[i++];){
                    if(this.document.getElementsByTagName(ci).length > 0)
                        return true;
               }
            }
            if(!domUtils.isEmptyBlock(this.body)){
                return true
            }

            return false;
        },
        /**
         * ��������
         * @public
         * @function
         */
        reset : function(){
            this.fireEvent('reset');
        },
        /**
         * ����Ĭ������
         * @function
         * @param    {String}    cont     Ҫ���������
         */
        setDefaultContent : function(){
             function clear(){
                var me = this;
                if(me.document.getElementById('initContent')){
                    me.document.body.innerHTML = '<p>'+(ie ? '' : '<br/>')+'</p>';
                    var range = me.selection.getRange();

                    me.removeListener('firstBeforeExecCommand',clear);
                    me.removeListener('focus',clear);
                
                    setTimeout(function(){
                        range.setStart(me.document.body.firstChild,0).collapse(true).select(true);
                        me._selectionChange();
                    })


                }
            }
            return function (cont){
                var me = this;
                me.document.body.innerHTML = '<p id="initContent">'+cont+'</p>';
                if(browser.ie && browser.version < 7 && me.options.relativePath){
                    replaceSrc(me.document.body);
                }
                me.addListener('firstBeforeExecCommand',clear);
                me.addListener('focus',clear);
            }


        }()

    };
    utils.inherits( Editor, EventBase );
})();

/**
 * Created by .
 * User: taoqili
 * Date: 11-8-18
 * Time: ����3:18
 * To change this template use File | Settings | File Templates.
 */
/**
 * ajax������
 */
UE.ajax = function() {
	return {
		/**
		 * ��url����ajax����
		 * @param url
		 * @param ajaxOptions
		 */
		request:function(url, ajaxOptions) {
            var ajaxRequest = creatAjaxRequest(),
                //�Ƿ�ʱ
                timeIsOut = false,
                //Ĭ�ϲ���
                defaultAjaxOptions = {
                    method:"POST",
                    timeout:5000,
                    async:true,
                    data:{},//��Ҫ���ݶ���Ļ�ֻ�ܸ���
                    onsuccess:function() {
                    },
                    onerror:function() {
                    }
                };

			if (typeof url === "object") {
				ajaxOptions = url;
				url = ajaxOptions.url;
			}
			if (!ajaxRequest || !url) return;
			var ajaxOpts = ajaxOptions ? utils.extend(defaultAjaxOptions,ajaxOptions) : defaultAjaxOptions;

			var submitStr = json2str(ajaxOpts);  // { name:"Jim",city:"Beijing" } --> "name=Jim&city=Beijing"
			//����û�ֱ��ͨ��data��������json�����������ҲҪ����json����ת��Ϊ�ַ���
			if (!utils.isEmptyObject(ajaxOpts.data)){
                submitStr += (submitStr? "&":"") + json2str(ajaxOpts.data);
			}
            //��ʱ���
            var timerID = setTimeout(function() {
                if (ajaxRequest.readyState != 4) {
                    timeIsOut = true;
                    ajaxRequest.abort();
                    clearTimeout(timerID);
                }
            }, ajaxOpts.timeout);

			var method = ajaxOpts.method.toUpperCase();
            var str = url + (url.indexOf("?")==-1?"?":"&") + (method=="POST"?"":submitStr) + "&noCache=" + +new Date;
			ajaxRequest.open(method, str, ajaxOpts.async);
			ajaxRequest.onreadystatechange = function() {
				if (ajaxRequest.readyState == 4) {
					if (!timeIsOut && ajaxRequest.status == 200) {
						ajaxOpts.onsuccess(ajaxRequest);
					} else {
						ajaxOpts.onerror(ajaxRequest);
					}
				}
			};
			if (method == "POST") {
				ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajaxRequest.send(submitStr);
			} else {
				ajaxRequest.send(null);
			}
		}
	};

	/**
	 * ��json����ת�����ʺ�ajax�ύ�Ĳ����б�
	 * @param json
	 */
	function json2str(json) {
		var strArr = [];
		for (var i in json) {
			//����Ĭ�ϵļ�������
			if(i=="method" || i=="timeout" || i=="async") continue;
			//���ݹ����Ķ���ͺ��������ύ֮��
			if (!((typeof json[i]).toLowerCase() == "function" || (typeof json[i]).toLowerCase() == "object")) {
				strArr.push( encodeURIComponent(i) + "="+encodeURIComponent(json[i]) );
			}
		}
		return strArr.join("&");

	}

	/**
	 * ����һ��ajaxRequest����
	 */
	function creatAjaxRequest() {
		var xmlHttp = null;
		if (window.XMLHttpRequest) {
			xmlHttp = new XMLHttpRequest();
		} else {
			try {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
				}
			}
		}
		return xmlHttp;
	}
}();

///import core
/**
 * @description ��������
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     inserthtml�������ݵ�����
 * @param   {String}   html                Ҫ���������
 * @author zhanyi
    */
    UE.commands['inserthtml'] = {
        execCommand: function (command,html){
            var me = this,
                range,deletedElms, i,ci,
                div,
                tds = me.currentSelectedArr;

            range = me.selection.getRange();

            div = range.document.createElement( 'div' );
            div.style.display = 'inline';
            div.innerHTML = utils.trim( html );

            try{
                me.adjustTable && me.adjustTable(div);
            }catch(e){}


            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    ti.className = ''
                }
                tds[0].innerHTML = '';
                range.setStart(tds[0],0).collapse(true);
                me.currentSelectedArr = [];
            }

            if ( !range.collapsed ) {

                range.deleteContents();
                if(range.startContainer.nodeType == 1){
                    var child = range.startContainer.childNodes[range.startOffset],pre;
                    if(child && domUtils.isBlockElm(child) && (pre = child.previousSibling) && domUtils.isBlockElm(pre)){
                        range.setEnd(pre,pre.childNodes.length).collapse();
                        while(child.firstChild){
                            pre.appendChild(child.firstChild);

                        }
                        domUtils.remove(child);
                    }
                }

            }


            var child,parent,pre,tmp,hadBreak = 0;
            while ( child = div.firstChild ) {
                range.insertNode( child );
                if ( !hadBreak && child.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm( child ) ){

                    parent = domUtils.findParent( child,function ( node ){ return domUtils.isBlockElm( node ); } );
                    if ( parent && parent.tagName.toLowerCase() != 'body' && !(dtd[parent.tagName][child.nodeName] && child.parentNode === parent)){
                        if(!dtd[parent.tagName][child.nodeName]){
                            pre = parent;
                        }else{
                            tmp = child.parentNode;
                            while (tmp !== parent){
                                pre = tmp;
                                tmp = tmp.parentNode;
    
                            }    
                        }
                        
                       
                        domUtils.breakParent( child, pre || tmp );
                        //ȥ��break��ǰһ������Ľڵ�  <p>|<[p> ==> <p></p><div></div><p>|</p>
                        var pre = child.previousSibling;
                        domUtils.trimWhiteTextNode(pre);
                        if(!pre.childNodes.length){
                            domUtils.remove(pre);
                        }
                        hadBreak = 1;
                    }
                }
                var next = child.nextSibling;
                if(!div.firstChild && next && domUtils.isBlockElm(next)){

                    range.setStart(next,0).collapse(true);
                    break;
                }
                range.setEndAfter( child ).collapse();

            }
//            if(!range.startContainer.childNodes[range.startOffset] && domUtils.isBlockElm(range.startContainer)){
//                next = editor.document.createElement('br');
//                range.insertNode(next);
//                range.collapse(true);
//            }
            //blockΪ���޷���λ���

            child = range.startContainer;
            //��chrome�����пհ�չλ��
            if(domUtils.isBlockElm(child) && domUtils.isEmptyNode(child)){
                child.innerHTML = browser.ie ? '' : '<br/>'
            }
            //����true��Ϊ��ɾ�������ʱ��ɾ���Σ���һ����ɾ��fillData
            range.select(true);


            setTimeout(function(){
                range = me.selection.getRange();
                range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
            },200)



            
        }
    };

///import core
///commands �Զ��Ű�
///commandsName  autotypeset
///commandsTitle  �Զ��Ű�
/**
 * �Զ��Ű�
 * @function
 * @name baidu.editor.execCommands
 */

UE.plugins['autotypeset'] = function(){
    //�����˰汾����������Ŀ��û��autotypeset
    if(!this.options.autotypeset){
        return;
    }
    var me = this,
        opt = me.options.autotypeset,
        remainClass = {
            'selectTdClass':1,
            'pagebreak':1,
            'anchorclass':1
        },
        remainTag = {
            'li':1
        },
        tags = {
            div:1,
            p:1
        },
        highlightCont;
    function isLine(node,notEmpty){

        if(node && node.parentNode && tags[node.tagName.toLowerCase()]){
            if(highlightCont && highlightCont.contains(node)
                ||
                node.getAttribute('pagebreak')
            ){
                return 0;
            }

            return notEmpty ? !domUtils.isEmptyBlock(node) : domUtils.isEmptyBlock(node);
        }
    }

    function removeNotAttributeSpan(node){
        if(!node.style.cssText){
            domUtils.removeAttributes(node,['style']);
            if(node.tagName.toLowerCase() == 'span' && domUtils.hasNoAttributes(node)){
                domUtils.remove(node,true)
            }
        }
    }
    function autotype(type,html){

        var cont;
        if(html){
            if(!opt.pasteFilter)return;
            cont = me.document.createElement('div');
            cont.innerHTML = html.html;
        }else{
            cont = me.document.body;
        }
        var nodes = domUtils.getElementsByTagName(cont,'*');

          // �������������䷽�򣬶μ�࣬���ڼ��
        for(var i=0,ci;ci=nodes[i++];){
            if(!highlightCont && ci.tagName == 'DIV' && ci.getAttribute('highlighter')){
                highlightCont = ci;
            }
             //font-size
            if(opt.clearFontSize && ci.style.fontSize){
                ci.style.fontSize = '';
                removeNotAttributeSpan(ci)

            }
            //font-family
            if(opt.clearFontFamily && ci.style.fontFamily){
                ci.style.fontFamily = '';
                removeNotAttributeSpan(ci)
            }

            if(isLine(ci)){
                //�ϲ�����
                if(opt.mergeEmptyline ){
                    var next = ci.nextSibling,tmpNode;
                    while(isLine(next)){
                        tmpNode = next;
                        next = tmpNode.nextSibling;
                        domUtils.remove(tmpNode);
                    }

                }
                 //ȥ�����У�����ռλ�Ŀ���
                if(opt.removeEmptyline && domUtils.inDoc(ci,cont) && !remainTag[ci.parentNode.tagName.toLowerCase()] ){
                    domUtils.remove(ci);
                    continue;

                }

            }
            if(isLine(ci,true) ){
                if(opt.indent)
                    ci.style.textIndent = opt.indentValue;
                if(opt.textAlign)
                    ci.style.textAlign = opt.textAlign;
//                if(opt.lineHeight)
//                    ci.style.lineHeight = opt.lineHeight + 'cm';


            }

            //ȥ��class,������class��ȥ��
            if(opt.removeClass && ci.className && !remainClass[ci.className.toLowerCase()]){

                if(highlightCont && highlightCont.contains(ci)){
                     continue;
                }
                domUtils.removeAttributes(ci,['class'])
            }

            //���鲻����
            if(opt.imageBlockLine && ci.tagName.toLowerCase() == 'img' && !ci.getAttribute('emotion')){
                if(html){
                    var img = ci;
                    switch (opt.imageBlockLine){
                        case 'left':
                        case 'right':
                        case 'none':
                            var pN = img.parentNode,tmpNode,pre,next;
                            while(dtd.$inline[pN.tagName] || pN.tagName == 'A'){
                                pN = pN.parentNode;
                            }
                            tmpNode = pN;
                            if(tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode,'text-align') == 'center'){
                                if(!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1){
                                    pre = tmpNode.previousSibling;
                                    next = tmpNode.nextSibling;
                                    if(pre && next && pre.nodeType == 1 &&  next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)){
                                        pre.appendChild(tmpNode.firstChild);
                                        while(next.firstChild){
                                            pre.appendChild(next.firstChild)
                                        }
                                        domUtils.remove(tmpNode);
                                        domUtils.remove(next);
                                    }else{
                                        domUtils.setStyle(tmpNode,'text-align','')
                                    }


                                }


                            }
                            domUtils.setStyle(img,'float',opt.imageBlockLine);
                            break;
                        case 'center':
                            if(me.queryCommandValue('imagefloat') != 'center'){
                                pN = img.parentNode;
                                domUtils.setStyle(img,'float','none');
                                tmpNode = img;
                                while(pN && domUtils.getChildCount(pN,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1
                                    && (dtd.$inline[pN.tagName] || pN.tagName == 'A')){
                                    tmpNode = pN;
                                    pN = pN.parentNode;
                                }
                                var pNode = me.document.createElement('p');
                                domUtils.setAttributes(pNode,{

                                    style:'text-align:center'
                                });
                                tmpNode.parentNode.insertBefore(pNode,tmpNode);
                                pNode.appendChild(tmpNode);
                                domUtils.setStyle(tmpNode,'float','');

                            }


                    }
                }else{
                    var range = me.selection.getRange();
                    range.selectNode(ci).select();
                    me.execCommand('imagefloat',opt.imageBlockLine);
                }



            }

            //ȥ������ı�ǩ
            if(opt.removeEmptyNode){
                if(opt.removeTagNames[ci.tagName.toLowerCase()] && domUtils.hasNoAttributes(ci) && domUtils.isEmptyBlock(ci)){
                    domUtils.remove(ci)
                }
            }
        }
        if(html)
            html.html = cont.innerHTML
    }
    if(opt.pasteFilter){
        me.addListener('beforepaste',autotype);
    }

    me.commands['autotypeset'] = {
        execCommand:function () {
            me.removeListener('beforepaste',autotype);
            if(opt.pasteFilter){
                me.addListener('beforepaste',autotype);
            }
            autotype();
        }

    };

};


///import core
///import plugins\inserthtml.js
///import plugins\catchremoteimage.js
///commands ����ͼƬ������ͼƬ�Ķ��뷽ʽ
///commandsName  InsertImage,ImageNone,ImageLeft,ImageRight,ImageCenter
///commandsTitle  ͼƬ,Ĭ��,����,����,����
///commandsDialog  dialogs\image\image.html
/**
 * Created by .
 * User: zhanyi
 * for image
 */

UE.commands['imagefloat'] = {
    execCommand : function (cmd, align){
        var me = this,
            range = me.selection.getRange();
        if(!range.collapsed ){
            var img = range.getClosedNode();
            if(img && img.tagName == 'IMG'){
                switch (align){
                    case 'left':
                    case 'right':
                    case 'none':
                        var pN = img.parentNode,tmpNode,pre,next;
                        while(dtd.$inline[pN.tagName] || pN.tagName == 'A'){
                            pN = pN.parentNode;
                        }
                        tmpNode = pN;
                        if(tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode,'text-align') == 'center'){
                            if(!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1){
                                pre = tmpNode.previousSibling;
                                next = tmpNode.nextSibling;
                                if(pre && next && pre.nodeType == 1 &&  next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)){
                                    pre.appendChild(tmpNode.firstChild);
                                    while(next.firstChild){
                                        pre.appendChild(next.firstChild)
                                    }
                                    domUtils.remove(tmpNode);
                                    domUtils.remove(next);
                                }else{
                                    domUtils.setStyle(tmpNode,'text-align','')
                                }


                            }

                            range.selectNode(img).select()
                        }
                        domUtils.setStyle(img,'float',align);
                        break;
                    case 'center':
                        if(me.queryCommandValue('imagefloat') != 'center'){
                            pN = img.parentNode;
                            domUtils.setStyle(img,'float','none');
                            tmpNode = img;
                            while(pN && domUtils.getChildCount(pN,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1
                                && (dtd.$inline[pN.tagName] || pN.tagName == 'A')){
                                tmpNode = pN;
                                pN = pN.parentNode;
                            }
                            range.setStartBefore(tmpNode).setCursor(false);
                            pN = me.document.createElement('div');
                            pN.appendChild(tmpNode);
                            domUtils.setStyle(tmpNode,'float','');

                            me.execCommand('insertHtml','<p id="_img_parent_tmp" style="text-align:center">'+pN.innerHTML+'</p>');

                            tmpNode = me.document.getElementById('_img_parent_tmp');
                            tmpNode.removeAttribute('id');
                            tmpNode = tmpNode.firstChild;
                            range.selectNode(tmpNode).select();
                            //ȥ����߶����Ԫ��
                            next = tmpNode.parentNode.nextSibling;
                            if(next && domUtils.isEmptyNode(next)){
                                domUtils.remove(next)
                            }

                        }

                        break;
                }

            }
        }
    },
    queryCommandValue : function() {
        var range = this.selection.getRange(),
            startNode,floatStyle;
        if(range.collapsed){
            return 'none';
        }
        startNode = range.getClosedNode();
        if(startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG'){
            floatStyle = domUtils.getComputedStyle(startNode,'float');
            if(floatStyle == 'none'){
                floatStyle = domUtils.getComputedStyle(startNode.parentNode,'text-align') == 'center' ? 'center' : floatStyle
            }
            return {
                    left : 1,
                    right : 1,
                    center : 1
                }[floatStyle] ? floatStyle : 'none'
        }
        return 'none'


    },
    queryCommandState : function(){
        if(this.highlight){
                   return -1;
               }
        var range = this.selection.getRange(),
            startNode;
        if(range.collapsed){
            return -1;
        }
        startNode = range.getClosedNode();
        if(startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG'){
            return 0;
        }
        return -1;
    }
};

UE.commands['insertimage'] = {
    execCommand : function (cmd, opt){

        opt = utils.isArray(opt) ? opt : [opt];
        if(!opt.length) return;
        var me = this,
            range = me.selection.getRange(),
            img = range.getClosedNode();
        if(img && /img/i.test( img.tagName ) && img.className != "edui-faked-video" &&!img.getAttribute("word_img") ){
            var first = opt.shift();
            var floatStyle = first['floatStyle'];
            delete first['floatStyle'];
////                img.style.border = (first.border||0) +"px solid #000";
////                img.style.margin = (first.margin||0) +"px";
//                img.style.cssText += ';margin:' + (first.margin||0) +"px;" + 'border:' + (first.border||0) +"px solid #000";
            domUtils.setAttributes(img,first);
            me.execCommand('imagefloat',floatStyle);
            if(opt.length > 0){
                range.setStartAfter(img).setCursor(false,true);
                me.execCommand('insertimage',opt);
            }

        }else{
            var html = [],str = '',ci;
            ci = opt[0];
            if(opt.length == 1){
                str = '<img src="'+ci.src+'" '+ (ci.data_ue_src ? ' data_ue_src="' + ci.data_ue_src +'" ':'') +
                        (ci.width ? 'width="'+ci.width+'" ':'') +
                        (ci.height ? ' height="'+ci.height+'" ':'') +
                        (ci['floatStyle']&&ci['floatStyle']!='center' ? ' style="float:'+ci['floatStyle']+';"':'') +
                        (ci.title?' title="'+ci.title+'"':'') + ' border="'+ (ci.border||0) + '" hspace = "'+(ci.hspace||0)+'" vspace = "'+(ci.vspace||0)+'" />';
                if(ci['floatStyle'] == 'center'){
                        str = '<p style="text-align: center">'+str+'</p>'
                 }
                html.push(str)

            }else{
                for(var i=0;ci=opt[i++];){
                    str =  '<p ' + (ci['floatStyle'] == 'center' ? 'style="text-align: center" ' : '') + '><img src="'+ci.src+'" '+
                        (ci.width ? 'width="'+ci.width+'" ':'') +   (ci.data_ue_src ? ' data_ue_src="' + ci.data_ue_src +'" ':'') +
                        (ci.height ? ' height="'+ci.height+'" ':'') +
                        ' style="' + (ci['floatStyle']&&ci['floatStyle']!='center' ? 'float:'+ci['floatStyle']+';':'') +
                        (ci.border||'') + '" ' +
                        (ci.title?' title="'+ci.title+'"':'') + ' /></p>';
//                        if(ci['floatStyle'] == 'center'){
//                            str = '<p style="text-align: center">'+str+'</p>'
//                        }
                    html.push(str)
                }
            }

            me.execCommand('insertHtml',html.join(''));
        }
    },
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};
///import core
///commands �����ʽ,����,����,����,���˶���
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  �������,���ж���,���Ҷ���,���˶���
/**
 * @description ��������
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     justifyִ�ж��뷽ʽ������
 * @param   {String}   align               ���뷽ʽ��left����right���ң�center���У�justify���˶���
 * @author zhanyi
 */
(function(){
    var block = domUtils.isBlockElm,
        defaultValue = {
            left : 1,
            right : 1,
            center : 1,
            justify : 1
        },
        doJustify = function(range,style){
            var bookmark = range.createBookmark(),
                filterFn = function( node ) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node )
                };

            range.enlarge(true);
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode(bookmark2.start,false,filterFn),
                tmpRange = range.cloneRange(),
                tmpNode;
            while(current &&  !(domUtils.getPosition(current,bookmark2.end)&domUtils.POSITION_FOLLOWING)){
                if(current.nodeType == 3 || !block(current)){
                    tmpRange.setStartBefore(current);
                    while(current && current!==bookmark2.end &&  !block(current)){
                        tmpNode = current;
                        current = domUtils.getNextDomNode(current,false,null,function(node){
                            return !block(node)
                        });
                    }
                    tmpRange.setEndAfter(tmpNode);
                    var common = tmpRange.getCommonAncestor();
                    if( !domUtils.isBody(common) && block(common)){
                        domUtils.setStyles(common,utils.isString(style) ? {'text-align':style} : style);
                        current = common;
                    }else{
                        var p = range.document.createElement('p');
                         domUtils.setStyles(p,utils.isString(style) ? {'text-align':style} : style);
                        var frag = tmpRange.extractContents();
                        p.appendChild(frag);
                        tmpRange.insertNode(p);
                        current = p;
                    }
                    current = domUtils.getNextDomNode(current,false,filterFn);
                }else{
                    current = domUtils.getNextDomNode(current,true,filterFn);
                }
            }
            return range.moveToBookmark(bookmark2).moveToBookmark(bookmark)
        };
    UE.commands['justify'] =  {
        execCommand : function( cmdName,align ) {

            var  range = this.selection.getRange(),
                txt;
           
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    if(domUtils.isEmptyNode(ti)){
                        txt = this.document.createTextNode('p');
                        range.setStart(ti,0).collapse(true).insertNode(txt).selectNode(txt);
                        
                    }else{
                        range.selectNodeContents(ti)
                    }

                    doJustify(range,align);
                    txt && domUtils.remove(txt);
                }
                range.selectNode(this.currentSelectedArr[0]).select()
            }else{

                //�պ�ʱ��������
                if(range.collapsed){
                    txt = this.document.createTextNode('p');
                    range.insertNode(txt);
                }
                doJustify(range,align);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }
                
                range.select();

            }
            return true;
        },
        queryCommandValue : function() {
            var startNode = this.selection.getStart(),
                value = domUtils.getComputedStyle(startNode,'text-align');
            return defaultValue[value] ? value : 'left';
        },
        queryCommandState : function(){
            return this.highlight ? -1 : 0;
                
        }

    }


})();

///import core
///import plugins\removeformat.js
///commands ������ɫ,����ɫ,�ֺ�,����,�»���,ɾ����
///commandsName  ForeColor,BackColor,FontSize,FontFamily,Underline,StrikeThrough
///commandsTitle  ������ɫ,����ɫ,�ֺ�,����,�»���,ɾ����
/**
 * @description ����
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    ִ�еĹ�������
 * @param {String}    value             �����ֵ
 */
(function() {

    var fonts = {
            'forecolor':'color',
            'backcolor':'background-color',
            'fontsize':'font-size',
            'fontfamily':'font-family',
            'underline':'text-decoration',
            'strikethrough':'text-decoration'
        };



    for ( var p in fonts ) {
        (function( cmd, style ) {
            UE.commands[cmd] = {
                execCommand : function( cmdName, value ) {
                    value = value || (this.queryCommandState(cmdName) ? 'none' : cmdName == 'underline' ? 'underline' : 'line-through');
                    var me = this,
                        range = this.selection.getRange(),
                        text;

                    if ( value == 'default' ) {

                        if(range.collapsed){
                            text = me.document.createTextNode('font');
                            range.insertNode(text).select()

                        }
                        me.execCommand( 'removeFormat', 'span,a', style);
                        if(text){
                            range.setStartBefore(text).setCursor();
                            domUtils.remove(text)
                        }


                    } else {
                        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                                range.selectNodeContents(ci);
                                range.applyInlineStyle( 'span', {'style':style + ':' + value} );

                            }
                            range.selectNodeContents(this.currentSelectedArr[0]).select();
                        }else{
                            if ( !range.collapsed ) {
                                if((cmd == 'underline'||cmd=='strikethrough') && me.queryCommandValue(cmd)){
                                     me.execCommand( 'removeFormat', 'span,a', style );
                                }
                                range = me.selection.getRange();

                                range.applyInlineStyle( 'span', {'style':style + ':' + value} ).select();
                            } else {

                                var span = domUtils.findParentByTagName(range.startContainer,'span',true);
                                text = me.document.createTextNode('font');
                                if(span && !span.children.length && !span[browser.ie ? 'innerText':'textContent'].replace(fillCharReg,'').length){
                                    //for ie hack when enter
                                    range.insertNode(text);
                                     if(cmd == 'underline'||cmd=='strikethrough'){
                                         range.selectNode(text).select();
                                         me.execCommand( 'removeFormat','span,a', style, null );

                                         span = domUtils.findParentByTagName(text,'span',true);
                                         range.setStartBefore(text)

                                    }
                                    span.style.cssText = span.style.cssText +  ';' + style + ':' + value;
                                    range.collapse(true).select();


                                }else{


                                    range.insertNode(text);
                                    range.selectNode(text).select();
                                    span = range.document.createElement( 'span' );

                                    if(cmd == 'underline'||cmd=='strikethrough'){
                                        //a��ǩ�ڵĲ���������
                                        if(domUtils.findParentByTagName(text,'a',true)){
                                            range.setStartBefore(text).setCursor();
                                             domUtils.remove(text);
                                             return;
                                         }
                                         me.execCommand( 'removeFormat','span,a', style );
                                    }

                                    span.style.cssText = style + ':' + value;


                                    text.parentNode.insertBefore(span,text);
                                    //�޸���span��span ����ʽ���̳е�����
                                    if(!browser.ie || browser.ie && browser.version == 9){
                                        var spanParent = span.parentNode;
                                        while(!domUtils.isBlockElm(spanParent)){
                                            if(spanParent.tagName == 'SPAN'){
                                                span.style.cssText = spanParent.style.cssText + span.style.cssText;
                                            }
                                            spanParent = spanParent.parentNode;
                                        }
                                    }



                                    range.setStart(span,0).setCursor();
                                    //trace:981
                                    //domUtils.mergToParent(span)


                                }
                                domUtils.remove(text)
                            }
                        }

                    }
                    return true;
                },
                queryCommandValue : function (cmdName) {
                    var startNode = this.selection.getStart();

                    //trace:946
                    if(cmdName == 'underline'||cmdName=='strikethrough' ){
                        var tmpNode = startNode,value;
                        while(tmpNode && !domUtils.isBlockElm(tmpNode) && !domUtils.isBody(tmpNode)){
                            if(tmpNode.nodeType == 1){
                                value = domUtils.getComputedStyle( tmpNode, style );

                                if(value != 'none'){
                                    return value;
                                }
                            }

                            tmpNode = tmpNode.parentNode;
                        }
                        return 'none'
                    }
                    return  domUtils.getComputedStyle( startNode, style );
                },
                queryCommandState : function(cmdName){
                    if(this.highlight){
                       return -1;
                   }
                    if(!(cmdName == 'underline'||cmdName=='strikethrough'))
                        return 0;
                    return this.queryCommandValue(cmdName) == (cmdName == 'underline' ? 'underline' : 'line-through')
                }
            }
        })( p, fonts[p] );
    }


})();
///import core
///commands ������,ȡ������
///commandsName  Link,Unlink
///commandsTitle  ������,ȡ������
///commandsDialog  dialogs\link\link.html
/**
 * ������
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     link���볬����
 * @param   {Object}  options         url��ַ��title���⣬target�Ƿ����ҳ
 * @author zhanyi
 */
/**
 * ȡ������
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     unlinkȡ������
 * @author zhanyi
 */
(function() {
    function optimize( range ) {
        var start = range.startContainer,end = range.endContainer;

        if ( start = domUtils.findParentByTagName( start, 'a', true ) ) {
            range.setStartBefore( start )
        }
        if ( end = domUtils.findParentByTagName( end, 'a', true ) ) {
            range.setEndAfter( end )
        }
    }

    UE.commands['unlink'] = {
        execCommand : function() {
            var as,
                range = new dom.Range(this.document),
                tds = this.currentSelectedArr,
                bookmark;
            if(tds && tds.length >0){
                for(var i=0,ti;ti=tds[i++];){
                    as = domUtils.getElementsByTagName(ti,'a');
                    for(var j=0,aj;aj=as[j++];){
                        domUtils.remove(aj,true);
                    }
                }
                if(domUtils.isEmptyNode(tds[0])){
                    range.setStart(tds[0],0).setCursor();
                }else{
                    range.selectNodeContents(tds[0]).select()
                }
            }else{
                range = this.selection.getRange();
                if(range.collapsed && !domUtils.findParentByTagName( range.startContainer, 'a', true )){
                    return;
                }
                bookmark = range.createBookmark();
                optimize( range );
                range.removeInlineStyle( 'a' ).moveToBookmark( bookmark ).select();
            }
        },
        queryCommandState : function(){
            return !this.highlight && this.queryCommandValue('link') ?  0 : -1;
        }

    };
    function doLink(range,opt){

        optimize( range = range.adjustmentBoundary() );
        var start = range.startContainer;
        if(start.nodeType == 1){
            start = start.childNodes[range.startOffset];
            if(start && start.nodeType == 1 && start.tagName == 'A' && /^(?:https?|ftp|file)\s*:\s*\/\//.test(start[browser.ie?'innerText':'textContent'])){
                start.innerHTML = opt.href;
            }
        }
        range.removeInlineStyle( 'a' );
        if ( range.collapsed ) {
            var a = range.document.createElement( 'a' );
            domUtils.setAttributes( a, opt );
            a.innerHTML = opt.href;
            range.insertNode( a ).selectNode( a );
        } else {
            range.applyInlineStyle( 'a', opt )

        }
    }
    UE.commands['link'] = {
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        },
        execCommand : function( cmdName, opt ) {
            var range = new dom.Range(this.document),
                tds = this.currentSelectedArr;
            
            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    if(domUtils.isEmptyNode(ti)){
                        ti.innerHTML = opt.href
                    }
                    doLink(range.selectNodeContents(ti),opt)
                }
                range.selectNodeContents(tds[0]).select()

               
            }else{
                doLink(range=this.selection.getRange(),opt);

                range.collapse().select(browser.gecko ? true : false);

            }
        },
        queryCommandValue : function() {

            var range = new dom.Range(this.document),
                tds = this.currentSelectedArr,
                as,
                node;
            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    as = ti.getElementsByTagName('a');
                    if(as[0])
                        return as[0]
                }
            }else{
                range = this.selection.getRange();



                if ( range.collapsed ) {
                    node = this.selection.getStart();
                    if ( node && (node = domUtils.findParentByTagName( node, 'a', true )) ) {
                        return node;
                    }
                } else {
                    //trace:1111  �����<p><a>xx</a></p> startContainer��p�ͻ��Ҳ���a
                    range.shrinkBoundary();
                    var start = range.startContainer.nodeType  == 3 || !range.startContainer.childNodes[range.startOffset] ? range.startContainer : range.startContainer.childNodes[range.startOffset],
                        end =  range.endContainer.nodeType == 3 || range.endOffset == 0 ? range.endContainer : range.endContainer.childNodes[range.endOffset-1],

                        common = range.getCommonAncestor();


                    node = domUtils.findParentByTagName( common, 'a', true );
                    if ( !node && common.nodeType == 1){

                        var as = common.getElementsByTagName( 'a' ),
                            ps,pe;

                        for ( var i = 0,ci; ci = as[i++]; ) {
                            ps = domUtils.getPosition( ci, start ),pe = domUtils.getPosition( ci,end);
                            if ( (ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                                &&
                                (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                                ) {
                                node = ci;
                                break;
                            }
                        }
                    }

                    return node;
                }
            }


        }
    };


})();

///import core
///import plugins\inserthtml.js
///commands ��ͼ
///commandsName  Map,GMap
///commandsTitle  Baidu��ͼ,Google��ͼ
///commandsDialog  dialogs\map\map.html,dialogs\gmap\gmap.html
UE.commands['gmap'] =
UE.commands['map'] = {
     queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///import plugins\inserthtml.js
///commands ������
///commandsName  InsertFrame
///commandsTitle  ����Iframe
///commandsDialog  dialogs\insertframe\insertframe.html

UE.commands['insertframe'] = {
     queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};


///import core
///commands �����ʽ
///commandsName  RemoveFormat
///commandsTitle  �����ʽ
/**
 * @description �����ʽ
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     removeformat�����ʽ����
 * @param   {String}   tags                �Զ��Ÿ����ı�ǩ���磺span,a
 * @param   {String}   style               ��ʽ
 * @param   {String}   attrs               ����
 * @param   {String}   notIncluedA    �Ƿ��a��ǩ�п�
 * @author zhanyi
 */
UE.commands['removeformat'] = {
    execCommand : function( cmdName, tags, style, attrs,notIncludeA ) {
        var tagReg = new RegExp( '^(?:' + (tags || this.options.removeFormatTags).replace( /,/g, '|' ) + ')$', 'i' ) ,
            removeFormatAttributes = style ? [] : (attrs || this.options.removeFormatAttributes).split( ',' ),
            range = new dom.Range( this.document ),
            bookmark,node,parent,
            filter = function( node ) {
                return node.nodeType == 1;
            };

        function isRedundantSpan (node) {
           if (node.nodeType == 3 || node.tagName.toLowerCase() != 'span')
               return 0;
           if (browser.ie) {
               //ie ���ж�ʵЧ������ֻ�ܼ���style���ж�
               //return node.style.cssText == '' ? 1 : 0;
                var attrs = node.attributes;
                if ( attrs.length ) {
                    for ( var i = 0,l = attrs.length; i<l; i++ ) {
                        if ( attrs[i].specified ) {
                            return 0;
                        }
                    }
                    return 1;
                }
           }
           return !node.attributes.length
        }
        function doRemove( range ) {

            var bookmark1 = range.createBookmark();
            if ( range.collapsed ) {
                range.enlarge( true );
            }

         //���ܰ�a��ǩ����
            if(!notIncludeA){
                var aNode = domUtils.findParentByTagName(range.startContainer,'a',true);
                if(aNode){
                    range.setStartBefore(aNode)
                }

                aNode = domUtils.findParentByTagName(range.endContainer,'a',true);
                if(aNode){
                    range.setEndAfter(aNode)
                }

            }


            bookmark = range.createBookmark();

            node = bookmark.start;

            //�п�ʼ
            while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                domUtils.breakParent( node, parent );

                domUtils.clearEmptySibling( node );
            }
            if ( bookmark.end ) {
                //�н���
                node = bookmark.end;
                while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                    domUtils.breakParent( node, parent );
                    domUtils.clearEmptySibling( node );
                }

                //��ʼȥ����ʽ
                var current = domUtils.getNextDomNode( bookmark.start, false, filter ),
                    next;
                while ( current ) {
                    if ( current == bookmark.end ) {
                        break;
                    }

                    next = domUtils.getNextDomNode( current, true, filter );

                    if ( !dtd.$empty[current.tagName.toLowerCase()] && !domUtils.isBookmarkNode( current ) ) {
                        if ( tagReg.test( current.tagName ) ) {
                            if ( style ) {
                                domUtils.removeStyle( current, style );
                                if ( isRedundantSpan( current ) && style != 'text-decoration')
                                    domUtils.remove( current, true );
                            } else {
                                domUtils.remove( current, true )
                            }
                        } else {
                            //trace:939  ���ܰ�list�ϵ���ʽȥ��
                            if(!dtd.$tableContent[current.tagName] && !dtd.$list[current.tagName]){
                                domUtils.removeAttributes( current, removeFormatAttributes );
                                if ( isRedundantSpan( current ) )
                                    domUtils.remove( current, true );
                            }

                        }
                    }
                    current = next;
                }
            }
            //trace:1035
            //trace:1096 ���ܰ�td�ϵ���ʽȥ��������߿�
            var pN = bookmark.start.parentNode;
            if(domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName] && !dtd.$list[pN.tagName]){
                domUtils.removeAttributes(  pN,removeFormatAttributes );
            }
            pN = bookmark.end.parentNode;
            if(bookmark.end && domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName]&& !dtd.$list[pN.tagName]){
                domUtils.removeAttributes(  pN,removeFormatAttributes );
            }
            range.moveToBookmark( bookmark ).moveToBookmark(bookmark1);
            //�������Ĵ��� <b><bookmark></b>
            var node = range.startContainer,
                tmp,
                collapsed = range.collapsed;
            while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                tmp = node.parentNode;
                range.setStartBefore(node);
                //trace:937
                //���½����߽�
                if(range.startContainer === range.endContainer){
                    range.endOffset--;
                }
                domUtils.remove(node);
                node = tmp;
            }

            if(!collapsed){
                node = range.endContainer;
                while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                    tmp = node.parentNode;
                    range.setEndBefore(node);
                    domUtils.remove(node);

                    node = tmp;
                }


            }
        }

        if ( this.currentSelectedArr && this.currentSelectedArr.length ) {
            for ( var i = 0,ci; ci = this.currentSelectedArr[i++]; ) {
                range.selectNodeContents( ci );
                doRemove( range );
            }
            range.selectNodeContents( this.currentSelectedArr[0] ).select();
        } else {

            range = this.selection.getRange();
            doRemove( range );
            range.select();
        }
    },
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }

};

///import core
///commands ����
///commandsName  BlockQuote
///commandsTitle  ����
/**
 * 
 * ����ģ��ʵ��
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     blockquote����
 */
(function() {
    var getObj = function(editor){
//        var startNode = editor.selection.getStart();
//        return domUtils.findParentByTagName( startNode, 'blockquote', true )
        return utils.findNode(editor.selection.getStartElementPath(),['blockquote'])
    };
    UE.commands['blockquote'] = {
        execCommand : function( cmdName, attrs ) {
            var range = this.selection.getRange(),
                obj = getObj(this),
                blockquote = dtd.blockquote,
                bookmark = range.createBookmark(),
                tds = this.currentSelectedArr;
            if ( obj ) {
                if(tds && tds.length){
                    domUtils.remove(obj,true)
                }else{
                    var start = range.startContainer,
                        startBlock = domUtils.isBlockElm(start) ? start : domUtils.findParent(start,function(node){return domUtils.isBlockElm(node)}),

                        end = range.endContainer,
                        endBlock = domUtils.isBlockElm(end) ? end :  domUtils.findParent(end,function(node){return domUtils.isBlockElm(node)});

                    //����һ��li
                    startBlock = domUtils.findParentByTagName(startBlock,'li',true) || startBlock;
                    endBlock = domUtils.findParentByTagName(endBlock,'li',true) || endBlock;


                    if(startBlock.tagName == 'LI' || startBlock.tagName == 'TD' || startBlock === obj){
                        domUtils.remove(obj,true)
                    }else{
                        domUtils.breakParent(startBlock,obj);
                    }

                    if(startBlock !== endBlock){
                        obj = domUtils.findParentByTagName(endBlock,'blockquote');
                        if(obj){
                            if(endBlock.tagName == 'LI' || endBlock.tagName == 'TD'){
                                domUtils.remove(obj,true)
                            }else{
                                 domUtils.breakParent(endBlock,obj);
                            }
    
                        }
                    }

                    var blockquotes = domUtils.getElementsByTagName(this.document,'blockquote');
                    for(var i=0,bi;bi=blockquotes[i++];){
                        if(!bi.childNodes.length){
                            domUtils.remove(bi)
                        }else if(domUtils.getPosition(bi,startBlock)&domUtils.POSITION_FOLLOWING && domUtils.getPosition(bi,endBlock)&domUtils.POSITION_PRECEDING){
                            domUtils.remove(bi,true)
                        }
                    }
                }



            } else {

                var tmpRange = range.cloneRange(),
                    node = tmpRange.startContainer.nodeType == 1 ? tmpRange.startContainer : tmpRange.startContainer.parentNode,
                    preNode = node,
                    doEnd = 1;

                //������ʼ
                while ( 1 ) {
                    if ( domUtils.isBody(node) ) {
                        if ( preNode !== node ) {
                            if ( range.collapsed ) {
                                tmpRange.selectNode( preNode );
                                doEnd = 0;
                            } else {
                                tmpRange.setStartBefore( preNode );
                            }
                        }else{
                            tmpRange.setStart(node,0)
                        }

                        break;
                    }
                    if ( !blockquote[node.tagName] ) {
                        if ( range.collapsed ) {
                            tmpRange.selectNode( preNode )
                        } else
                            tmpRange.setStartBefore( preNode);
                        break;
                    }

                    preNode = node;
                    node = node.parentNode;
                }
                
                //��������
               if ( doEnd ) {
                    preNode = node =  node = tmpRange.endContainer.nodeType == 1 ? tmpRange.endContainer : tmpRange.endContainer.parentNode;
                    while ( 1 ) {

                        if ( domUtils.isBody( node ) ) {
                            if ( preNode !== node ) {

                                    tmpRange.setEndAfter( preNode );
                                
                            } else {
                                tmpRange.setEnd( node, node.childNodes.length )
                            }

                            break;
                        }
                        if ( !blockquote[node.tagName] ) {
                            tmpRange.setEndAfter( preNode );
                            break;
                        }

                        preNode = node;
                        node = node.parentNode;
                    }

                }


                node = range.document.createElement( 'blockquote' );
                domUtils.setAttributes( node, attrs );
                node.appendChild( tmpRange.extractContents() );
                tmpRange.insertNode( node );
                //ȥ���ظ���
                var childs = domUtils.getElementsByTagName(node,'blockquote');
                for(var i=0,ci;ci=childs[i++];){
                    if(ci.parentNode){
                        domUtils.remove(ci,true)
                    }
                }

            }
            range.moveToBookmark( bookmark ).select()
        },
        queryCommandState : function() {
           if(this.highlight){
               return -1;
           }
            return getObj(this) ? 1 : 0;
        }
    };
})();


///import core
///import plugins\paragraph.js
///commands ��������
///commandsName  Outdent,Indent
///commandsTitle  ȡ������,��������
/**
 * ��������
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     outdentȡ��������indent����
 */
UE.commands['indent'] = {
    execCommand : function() {
         var me = this,value = me.queryCommandState("indent") ? "0em" : me.options.indentValue || '2em';
         me.execCommand('Paragraph','p',{style:'text-indent:'+ value});
    },
    queryCommandState : function() {
        if(this.highlight){return -1;}
        var //start = this.selection.getStart(),
//            pN = domUtils.findParentByTagName(start,['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],true),
            pN = utils.findNode(this.selection.getStartElementPath(),['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
            indent = pN && pN.style.textIndent ? parseInt(pN.style.textIndent) : '';
        return indent ?  1 : 0;
    }

};

///import core
///commands ��ӡ
///commandsName  Print
///commandsTitle  ��ӡ
/**
 * @description ��ӡ
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     print��ӡ�༭������
 * @author zhanyi
 */
UE.commands['print'] = {
    execCommand : function(){
        this.window.print();
    },
    notNeedUndo : 1
};


///import core
///commands Ԥ��
///commandsName  Preview
///commandsTitle  Ԥ��
/**
 * Ԥ��
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     previewԤ���༭������
 */
UE.commands['preview'] = {
    execCommand : function(){
        
        var me = this,
            w = window.open('', '_blank', ""),
            d = w.document,
            css = me.document.getElementById("syntaxhighlighter_css"),
            js = document.getElementById("syntaxhighlighter_js"),
            style = "<style type='text/css'>" + me.options.initialStyle + "</style>",
            cont = me.getContent();

        if(browser.ie){
            cont = cont.replace(/<\s*br\s*\/?\s*>/gi,'<br/><br/>')
        }
        d.open();
        d.write('<html><head>'+style+'<link rel="stylesheet" type="text/css" href="'+me.options.UEDITOR_HOME_URL+utils.unhtml( this.options.iframeCssUrl ) + '"/>'+
                (css ? '<link rel="stylesheet" type="text/css" href="' + css.href + '"/>' : '')

            + (css ? ' <script type="text/javascript" charset=gbk src="'+js.src+'"></script>':'')
            +'<title></title></head><body >' +
            cont +
            (css ? '<script type="text/javascript">'+(baidu.editor.browser.ie ? 'window.onload = function(){SyntaxHighlighter.all()};' : 'SyntaxHighlighter.all();')+
                'setTimeout(function(){' +
                'for(var i=0,di;di=SyntaxHighlighter.highlightContainers[i++];){' +
                    'var tds = di.getElementsByTagName("td");' +
                    'for(var j=0,li,ri;li=tds[0].childNodes[j];j++){' +
                        'ri = tds[1].firstChild.childNodes[j];' +
                        'ri.style.height = li.style.height = ri.offsetHeight + "px";' +
                    '}' +
                '}},100)</script>':'') +
                     '</body></html>');
        d.close();
    },
    notNeedUndo : 1
};

///import core
///import plugins\inserthtml.js
///commands �����ַ�
///commandsName  Spechars
///commandsTitle  �����ַ�
///commandsDialog  dialogs\spechars\spechars.html
UE.commands['spechars'] = {
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///import plugins\image.js
///commands �������
///commandsName  Emotion
///commandsTitle  ����
///commandsDialog  dialogs\emotion\emotion.html
UE.commands['emotion'] = {
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///commands ȫѡ
///commandsName  SelectAll
///commandsTitle  ȫѡ
/**
 * ѡ������
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    selectallѡ�б༭�������������
 * @author zhanyi
*/
UE.plugins['selectall'] = function(){
    var me = this;
    me.commands['selectall'] = {
        execCommand : function(){
            //ȥ����ԭ����selectAll,��Ϊ����ֱ���͵�����Ϊ��ʱ�����ܳ��ֱպ�״̬�Ĺ��
            var range = this.selection.getRange();
            range.selectNodeContents(this.body);
            if(domUtils.isEmptyBlock(this.body))
                range.collapse(true);
            range.select(true);
            this.selectAll = true;
        },
        notNeedUndo : 1
    };
    me.addListener('ready',function(){

        domUtils.on(me.document,'click',function(evt){

            me.selectAll = false;
        })
    })

};

///import core
///commands ��ʽ
///commandsName  Paragraph
///commandsTitle  �����ʽ
/**
 * ������ʽ
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     paragraph�������ִ������
 * @param   {String}   style               ��ǩֵΪ��'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
 * @param   {String}   attrs               ��ǩ������
 * @author zhanyi
 */
(function() {
    var block = domUtils.isBlockElm,
        notExchange = ['TD','LI','PRE'],

        doParagraph = function(range,style,attrs,sourceCmdName){
            var bookmark = range.createBookmark(),
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node )
                },
                para;

            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current && !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node )
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    
                    para = range.document.createElement( style );
                    if(attrs){
                        domUtils.setAttributes(para,attrs);
                        if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style)
                            para.style.cssText = attrs.style;
                    }
                    para.appendChild( tmpRange.extractContents() );
                    //��Ҫ����ռλ
                    if(domUtils.isEmptyNode(para)){
                        domUtils.fillChar(range.document,para);
                        
                    }

                    tmpRange.insertNode( para );

                    var parent = para.parentNode;
                    //���para��һ����һ��blockԪ���Ҳ���body,td��ɾ����
                    if ( block( parent ) && !domUtils.isBody( para.parentNode ) && utils.indexOf(notExchange,parent.tagName)==-1) {
                        //�洢dir,style
                        if(!(sourceCmdName && sourceCmdName == 'customstyle')){
                            parent.getAttribute('dir') && para.setAttribute('dir',parent.getAttribute('dir'));
                            //trace:1070
                            parent.style.cssText && (para.style.cssText = parent.style.cssText + ';' + para.style.cssText);
                            //trace:1030
                            parent.style.textAlign && !para.style.textAlign && (para.style.textAlign = parent.style.textAlign);
                            parent.style.textIndent && !para.style.textIndent && (para.style.textIndent = parent.style.textIndent);
                            parent.style.padding && !para.style.padding && (para.style.padding = parent.style.padding);
                        }

                        //trace:1706 ѡ��ľ���h1-6Ҫɾ��
                        if(attrs && /h\d/i.test(parent.tagName) && !/h\d/i.test(para.tagName) ){
                            domUtils.setAttributes(parent,attrs);
                            if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style)
                                parent.style.cssText = attrs.style;
                            domUtils.remove(para,true);
                            para = parent;
                        }else
                            domUtils.remove( para.parentNode, true );

                    }
                    if(  utils.indexOf(notExchange,parent.tagName)!=-1){
                        current = parent;
                    }else{
                       current = para;
                    }


                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };

    UE.commands['paragraph'] = {
        execCommand : function( cmdName, style,attrs,sourceCmdName ) {
            var range = new dom.Range(this.document);
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    //trace:1079 ����ʾ�Ĳ����������ı����յ�tdҲ�ܼ�����Ӧ�ı�ǩ
                    if(ti.style.display == 'none') continue;
                    if(domUtils.isEmptyNode(ti)){
                      
                        var tmpTxt = this.document.createTextNode('paragraph');
                        ti.innerHTML = '';
                        ti.appendChild(tmpTxt);
                    }
                    doParagraph(range.selectNodeContents(ti),style,attrs,sourceCmdName);
                    if(tmpTxt){
                        var pN = tmpTxt.parentNode;
                        domUtils.remove(tmpTxt);
                        if(domUtils.isEmptyNode(pN)){
                            domUtils.fillNode(this.document,pN)
                        }
                         
                    }


                }
                var td = this.currentSelectedArr[0];

                if(domUtils.isEmptyBlock(td)){
                    range.setStart(td,0).setCursor(false,true);
                }else{
                    range.selectNode(td).select()
                }

            }else{
                range = this.selection.getRange();
                 //�պ�ʱ��������
                if(range.collapsed){
                    var txt = this.document.createTextNode('p');
                    range.insertNode(txt);
                    //ȥ�������fillchar
                    if(browser.ie){
                        var node = txt.previousSibling;
                        if(node && domUtils.isWhitespace(node)){
                            domUtils.remove(node)
                        }
                        node = txt.nextSibling;
                        if(node && domUtils.isWhitespace(node)){
                            domUtils.remove(node)
                        } 
                    }

                }
                range = doParagraph(range,style,attrs,sourceCmdName);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    pN = txt.parentNode;

                    domUtils.remove(txt);
                    
                    if(domUtils.isBlockElm(pN)&&domUtils.isEmptyNode(pN)){
                        domUtils.fillNode(this.document,pN)
                    }

                }

                if(browser.gecko && range.collapsed && range.startContainer.nodeType == 1){
                    var child = range.startContainer.childNodes[range.startOffset];
                    if(child && child.nodeType == 1 && child.tagName.toLowerCase() == style){
                        range.setStart(child,0).collapse(true)
                    }
                }
                //trace:1097 ԭ����true��ԭ�����ˣ���ȥ�˾Ͳ�����������ռλ����
                range.select()

            }
            return true;
        },
        queryCommandValue : function() {
            var node = utils.findNode(this.selection.getStartElementPath(),['p','h1','h2','h3','h4','h5','h6']);
            return node ? node.tagName.toLowerCase() : '';
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    }
})();

///import core
///commands ����ķ���
///commandsName  DirectionalityLtr,DirectionalityRtl
///commandsTitle  ������������,������������
/**
 * ����ķ���
 * @function
 * @name baidu.editor.execCommand
 * @param {String}   cmdName    directionalityִ�к����Ĳ���
 * @param {String}    forward    ltr�����������룬rtl������������
 */
(function() {
    var block = domUtils.isBlockElm ,
        getObj = function(editor){
//            var startNode = editor.selection.getStart(),
//                parents;
//            if ( startNode ) {
//                //�������е���block�ĸ��׽ڵ�
//                parents = domUtils.findParents( startNode, true, block, true );
//                for ( var i = 0,ci; ci = parents[i++]; ) {
//                    if ( ci.getAttribute( 'dir' ) ) {
//                        return ci;
//                    }
//                }
//            }
            return utils.findNode(editor.selection.getStartElementPath(),null,function(n){return n.getAttribute('dir')});

        },
        doDirectionality = function(range,editor,forward){
            
            var bookmark,
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace(node)
                },

                obj = getObj( editor );

            if ( obj && range.collapsed ) {
                obj.setAttribute( 'dir', forward );
                return range;
            }
            bookmark = range.createBookmark();
            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current &&  !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node )
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    var common = tmpRange.getCommonAncestor();
                    if ( !domUtils.isBody( common ) && block( common ) ) {
                        //��������block�ڵ�
                        common.setAttribute( 'dir', forward );
                        current = common;
                    } else {
                        //û�б����������һ��block�ڵ�
                        var p = range.document.createElement( 'p' );
                        p.setAttribute( 'dir', forward );
                        var frag = tmpRange.extractContents();
                        p.appendChild( frag );
                        tmpRange.insertNode( p );
                        current = p;
                    }

                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };
    UE.commands['directionality'] = {
        execCommand : function( cmdName,forward ) {
            var range = new dom.Range(this.document);
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    if(ti.style.display != 'none')
                        doDirectionality(range.selectNode(ti),this,forward);
                }
                range.selectNode(this.currentSelectedArr[0]).select()
            }else{
                range = this.selection.getRange();
                //�պ�ʱ��������
                if(range.collapsed){
                    var txt = this.document.createTextNode('d');
                    range.insertNode(txt);
                }
                doDirectionality(range,this,forward);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }

                range.select();
                

            }
            return true;
        },
        queryCommandValue : function() {

            var node = getObj(this);
            return node ? node.getAttribute('dir') : 'ltr'
        },
       queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    }
})();


///import core
///import plugins\inserthtml.js
///commands �ָ���
///commandsName  Horizontal
///commandsTitle  �ָ���
/**
 * �ָ���
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    horizontal����ָ���
 */
UE.commands['horizontal'] = {
    execCommand : function( cmdName ) {
        var me = this;
        if(me.queryCommandState(cmdName)!==-1){
            me.execCommand('insertHtml','<hr>');
            var range = me.selection.getRange(),
                start = range.startContainer;
            if(start.nodeType == 1 && !start.childNodes[range.startOffset] ){

                var tmp;
                if(tmp = start.childNodes[range.startOffset - 1]){
                    if(tmp.nodeType == 1 && tmp.tagName == 'HR'){
                        if(me.options.enterTag == 'p'){
                            tmp = me.document.createElement('p');
                            range.insertNode(tmp);
                            range.setStart(tmp,0).setCursor();

                        }else{
                            tmp = me.document.createElement('br');
                            range.insertNode(tmp);
                            range.setStartBefore(tmp).setCursor();
                        }
                    }
                }

            }
            return true;
        }

    },
    //�߽���table�ﲻ�ܼӷָ���
    queryCommandState : function() {
        return this.highlight || utils.findNode(this.selection.getStartElementPath(),['table']) ? -1 : 0;
    }
};

///import core
///import plugins\inserthtml.js
///commands ����,ʱ��
///commandsName  Date,Time
///commandsTitle  ����,ʱ��
/**
 * ��������
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    date��������
 * @author zhuwenxuan
*/
/**
 * ����ʱ��
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    time����ʱ��
 * @author zhuwenxuan
*/
UE.commands['time'] = UE.commands["date"] = {
    execCommand : function(cmd){
        var date = new Date;
        this.execCommand('insertHtml',cmd == "time" ?
            (date.getHours()+":"+ (date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes())+":"+(date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds())) :
            (date.getFullYear()+"-"+((date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1)+"-"+(date.getDate()<10?"0"+date.getDate():date.getDate())));
    },
    queryCommandState : function(){
            return this.highlight ? -1 :0;
    }
};




///import core
///import plugins\paragraph.js
///commands �μ��
///commandsName  RowSpacingBottom,RowSpacingTop
///commandsTitle  �μ��
/**
 * @description ���ö�ǰ��,�κ��
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     rowspacing���öμ��
 * @param   {String}   value              ֵ����pxΪ��λ
 * @param   {String}   dir          top��bottom��ǰ��κ�
 * @author zhanyi
 */
UE.commands['rowspacing'] =  {
    execCommand : function( cmdName,value,dir ) {
        this.execCommand('paragraph','p',{style:'margin-'+dir+':'+value + 'px'});
        return true;
    },
    queryCommandValue : function(cmdName,dir) {
        var pN = utils.findNode(this.selection.getStartElementPath(),null,function(node){return domUtils.isBlockElm(node) }),
            value;
        //trace:1026
        if(pN){
            value = domUtils.getComputedStyle(pN,'margin-'+dir).replace(/[^\d]/g,'');
            return !value ? 0 : value;
        }
        return 0;

    },
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};


///import core
///import plugins\paragraph.js
///commands �м��
///commandsName  LineHeight
///commandsTitle  �м��
/**
 * @description �������ڼ��
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     lineheight�������ڼ��
 * @param   {String}   value              ֵ
 * @author zhuwenxuan
 */
UE.plugins['lineheight'] = function(){
    var me = this;
    me.commands['lineheight'] =  {
        execCommand : function( cmdName,value ) {
            this.execCommand('paragraph','p',{style:'line-height:'+ (value == "1" ? "normal" : value + 'em') });
            return true;
        },
        queryCommandValue : function() {
            var pN = utils.findNode(this.selection.getStartElementPath(),null,function(node){return domUtils.isBlockElm(node)});
            if(pN){
                var value = domUtils.getComputedStyle(pN,'line-height');
                return value == 'normal' ? 1 : value.replace(/[^\d.]*/ig,"")
            }
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};



///import core
///commands ����ĵ�
///commandsName  ClearDoc
///commandsTitle  ����ĵ�
/**
 *
 * ����ĵ�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     cleardoc����ĵ�
 */

UE.commands['cleardoc'] = {
    execCommand : function( cmdName) {
        var me = this,
            enterTag = me.options.enterTag,
            range = me.selection.getRange();
        if(enterTag == "br"){
            me.body.innerHTML = "<br/>";
            range.setStart(me.body,0).setCursor();
        }else{
            me.body.innerHTML = "<p>"+(ie ? "" : "<br/>")+"</p>";
            range.setStart(me.body.firstChild,0).setCursor(false,true);
        }
    }
};


///import core
///commands ê��
///commandsName  Anchor
///commandsTitle  ê��
///commandsDialog  dialogs\anchor\anchor.html
/**
 * ê��
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName     cmdName="anchor"����ê��
 */

UE.commands['anchor'] = {
    execCommand:function (cmd, name) {
        var range = this.selection.getRange(),img = range.getClosedNode();
        if (img && img.getAttribute('anchorname')) {
            if (name) {
                img.setAttribute('anchorname', name);
            } else {
                range.setStartBefore(img).setCursor();
                domUtils.remove(img);
            }
        } else {
            if (name) {
                //ֻ��ѡ���Ŀ�ʼ����
                var anchor = this.document.createElement('img');
                range.collapse(true);
                domUtils.setAttributes(anchor,{
                    'anchorname':name,
                    'class':'anchorclass'
                });
                range.insertNode(anchor).setStartAfter(anchor).setCursor(false,true);
            }
        }
    },
    queryCommandState:function () {
        return this.highlight ? -1 : 0;
    }

};


///import core
///commands ɾ��
///commandsName  Delete
///commandsTitle  ɾ��
/**
 * ɾ��
 * @function
 * @name baidu.editor.execCommand
 * @param  {String}    cmdName    deleteɾ��
 */
UE.commands['delete'] = {
    execCommand : function (){

        var range = this.selection.getRange(),
            mStart = 0,
            mEnd = 0,
            me = this;
        if(this.selectAll ){
            //trace:1633
            me.body.innerHTML = '<p>'+(browser.ie ? '&nbsp;' : '<br/>')+'</p>';

            range.setStart(me.body.firstChild,0).setCursor(false,true);

            me.selectAll = false;
            return;
        }
        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                if(ci.style.display != 'none'){
                    ci.innerHTML = browser.ie ? domUtils.fillChar : '<br/>'
                }

            }
            range.setStart(me.currentSelectedArr[0],0).setCursor();
            return;
        }
        if(range.collapsed)
            return;
        range.txtToElmBoundary();
        //&& !domUtils.isBlockElm(range.startContainer)
        while(!range.startOffset &&  !domUtils.isBody(range.startContainer) &&  !dtd.$tableContent[range.startContainer.tagName] ){
            mStart = 1;
            range.setStartBefore(range.startContainer);
        }
        //&& !domUtils.isBlockElm(range.endContainer)
        while(!domUtils.isBody(range.endContainer)&&  !dtd.$tableContent[range.endContainer.tagName]  ){
            var child,endContainer = range.endContainer,endOffset = range.endOffset;
//                if(endContainer.nodeType == 3 &&  endOffset == endContainer.nodeValue.length){
//                    range.setEndAfter(endContainer);
//                    continue;
//                }
            child = endContainer.childNodes[endOffset];
            if(!child || domUtils.isBr(child) && endContainer.lastChild === child){
                range.setEndAfter(endContainer);
                continue;
            }
            break;

        }
        if(mStart){
            var start = me.document.createElement('span');
            start.innerHTML = 'start';
            start.id = '_baidu_cut_start';
            range.insertNode(start).setStartBefore(start)
        }
        if(mEnd){
            var end = me.document.createElement('span');
            end.innerHTML = 'end';
            end.id = '_baidu_cut_end';
            range.cloneRange().collapse(false).insertNode(end);
            range.setEndAfter(end)

        }



        range.deleteContents();


        if(domUtils.isBody(range.startContainer) && domUtils.isEmptyBlock(me.body)){
            me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
            range.setStart(me.body.firstChild,0).collapse(true);
        }else if ( !browser.ie && domUtils.isEmptyBlock(range.startContainer)){
            range.startContainer.innerHTML = '<br/>'
        }

        range.select(true)
    },
    queryCommandState : function(){

        if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
            return 0;
        }
        return this.highlight || this.selection.getRange().collapsed ? -1 : 0;
    }
};

///import core
///commands ����ͳ��
///commandsName  WordCount,wordCount
///commandsTitle  ����ͳ��
/**
 * Created by JetBrains WebStorm.
 * User: taoqili
 * Date: 11-9-7
 * Time: ����8:18
 * To change this template use File | Settings | File Templates.
 */
UE.commands["wordcount"]={
    queryCommandValue:function(cmd,onlyCount){
        var length,contentText,reg;
        if(onlyCount){
            reg = new RegExp("[\r\t\n]","g");
            contentText = this.getContentTxt().replace(reg,"");
            return contentText.length;
        }
        var open = this.options.wordCount,
             max= this.options.maximumWords,
             msg = this.options.messages.wordCountMsg,
            errMsg=this.options.messages.wordOverFlowMsg;

        if(!open) return "";
        reg = new RegExp("[\r\t\n]","g");
        contentText = this.getContentTxt().replace(reg,"");
        length = contentText.length;
        if(max-length<0){
            return "<span style='color:red;direction: none'>"+errMsg+"</span> "
        }
        msg = msg.replace("{#leave}",max-length >= 0 ? max-length:0);
        msg = msg.replace("{#count}",length);

        return msg;
    }
};
///import core
///commands ��ӷ�ҳ����
///commandsName  PageBreak
///commandsTitle  ��ҳ
/**
 * @description ��ӷ�ҳ����
 * @author zhanyi
 */
UE.plugins['pagebreak'] = function () {
    var me = this,
        notBreakTags = ['td'];
    //��д��Editor.hasContents
//    var hasContentsOrg = me.hasContents;
//    me.hasContents = function (tags) {
//        for (var i = 0, di, divs = me.document.getElementsByTagName('div'); di = divs[i++];) {
//            if (domUtils.hasClass(di, 'pagebreak')) {
//                return true;
//            }
//        }
//        return hasContentsOrg.call(me, tags);
//    };
    function fillNode(node){
        if(domUtils.isEmptyBlock(node)){
            var firstChild = node.firstChild,tmpNode;

            while(firstChild && firstChild.nodeType == 1 && domUtils.isEmptyBlock(firstChild)){
                tmpNode = firstChild;
                firstChild = firstChild.firstChild;
            }
            !tmpNode && (tmpNode = node);
            domUtils.fillNode(me.document,tmpNode);
        }
    }
    function isHr(node){
        return node && node.nodeType == 1 && node.tagName == 'HR' && node.className == 'pagebreak';
    }
    me.commands['pagebreak'] = {
        execCommand:function () {
            var range = me.selection.getRange(),hr = me.document.createElement('hr');
            domUtils.setAttributes(hr,{
                'class' : 'pagebreak',
                noshade:"noshade",
                size:"5"
            });
            domUtils.unselectable(hr);
            //table��������
            var node = domUtils.findParentByTagName(range.startContainer, notBreakTags, true),

                parents = [], pN;
            if (node) {
                switch (node.tagName) {
                    case 'TD':
                        pN = node.parentNode;
                        if (!pN.previousSibling) {
                            var table = domUtils.findParentByTagName(pN, 'table');
                            table.parentNode.insertBefore(hr, table);
                            parents = domUtils.findParents(hr, true);

                        } else {
                            pN.parentNode.insertBefore(hr, pN);
                            parents = domUtils.findParents(hr);

                        }
                        pN = parents[1];
                        if (hr !== pN) {
                            domUtils.breakParent(hr, pN);
                        }


                        domUtils.clearSelectedArr(me.currentSelectedArr);
                }

            } else {

                if (!range.collapsed) {
                    range.deleteContents();
                    var start = range.startContainer;
                    while (domUtils.isBlockElm(start) && domUtils.isEmptyNode(start)) {
                        range.setStartBefore(start).collapse(true);
                        domUtils.remove(start);
                        start = range.startContainer;
                    }

                }
                range.insertNode(hr);

                var pN = hr.parentNode, nextNode;
                while (!domUtils.isBody(pN)) {
                    domUtils.breakParent(hr, pN);
                    nextNode = hr.nextSibling;
                    if (nextNode && domUtils.isEmptyBlock(nextNode)) {
                        domUtils.remove(nextNode)
                    }
                    pN = hr.parentNode;
                }
                nextNode = hr.nextSibling;
                var pre = hr.previousSibling;
                if(isHr(pre)){
                    domUtils.remove(pre)
                }else{
                    fillNode(pre);
                }

                if(!nextNode){
                    var p = me.document.createElement('p');

                    hr.parentNode.appendChild(p);
                    domUtils.fillNode(me.document,p);
                    range.setStart(p,0).collapse(true)
                }else{
                    if(isHr(nextNode)){
                        domUtils.remove(nextNode)
                    }else{
                        fillNode(nextNode);
                    }
                    range.setEndAfter(hr).collapse(false)
                }

                range.select(true)

            }

        },
        queryCommandState:function () {
            return this.highlight ? -1 : 0;
        }
    }
};
///import core
///commands ����ͼƬ�����ϴ�
///commandsName  WordImage
///commandsTitle  ����ͼƬ�����ϴ�


UE.plugins["wordimage"] = function(){
    var me = this,
        images;
    me.commands['wordimage'] = {
        execCommand : function() {
            images = domUtils.getElementsByTagName(me.document.body,"img");
            var urlList = [];
            for(var i=0,ci;ci=images[i++];){
                var url=ci.getAttribute("word_img");
                url && urlList.push(url);
            }
            if(images.length){
                this["word_img"] = urlList;
            }
        },
        queryCommandState: function(){
            images = domUtils.getElementsByTagName(me.document.body,"img");
            for(var i=0,ci;ci =images[i++];){
                if(ci.getAttribute("word_img")){
                    return 1;
                }
            }
            return -1;
        }
    };
};
///import core
///commands ����������
///commandsName  Undo,Redo
///commandsTitle  ����,����
/**
* @description ����
* @author zhanyi
*/

UE.plugins['undo'] = function() {
    var me = this,
        maxUndoCount = me.options.maxUndoCount,
        maxInputCount = me.options.maxInputCount,
        fillchar = new RegExp(domUtils.fillChar + '|<\/hr>','gi'),// ie����������</hr>
        //�ڱȽ�ʱ����Ҫ���˵���Щ����
        specialAttr = /\b(?:href|src|name)="[^"]*?"/gi;

    function UndoManager() {

        this.list = [];
        this.index = 0;
        this.hasUndo = false;
        this.hasRedo = false;
        this.undo = function() {

            if ( this.hasUndo ) {
                var currentScene = this.getScene(),
                    lastScene = this.list[this.index];
                if ( lastScene.content.replace(specialAttr,'') != currentScene.content.replace(specialAttr,'') ) {
                    this.save();
                }
                                    if(!this.list[this.index - 1] && this.list.length == 1){
                    this.reset();
                    return;
                }
                while ( this.list[this.index].content == this.list[this.index - 1].content ) {
                    this.index--;
                    if ( this.index == 0 ) {
                        return this.restore( 0 )
                    }
                }
                this.restore( --this.index );
            }
        };
        this.redo = function() {
            if ( this.hasRedo ) {
                while ( this.list[this.index].content == this.list[this.index + 1].content ) {
                    this.index++;
                    if ( this.index == this.list.length - 1 ) {
                        return this.restore( this.index )
                    }
                }
                this.restore( ++this.index );
            }
        };

        this.restore = function() {

            var scene = this.list[this.index];
            //trace:873
            //ȥ��չλ��
            me.document.body.innerHTML = scene.bookcontent.replace(fillchar,'');
            //����undo��ո�չλ������
            if(browser.ie){
                for(var i=0,pi,ps = me.document.getElementsByTagName('p');pi = ps[i++];){
                    if(pi.innerHTML == ''){
                        domUtils.fillNode(me.document,pi);
                    }
                }
            }

            var range = new dom.Range( me.document );
            range.moveToBookmark( {
                start : '_baidu_bookmark_start_',
                end : '_baidu_bookmark_end_',
                id : true
            //ȥ��true ��Ϊ��<b>|</b>�����˺�����b��
            //todo safari����������ʱ������Ϊ�ı���dom�����¶���
            } );
            //trace:1278 ie9blockԪ��Ϊ�գ������ֹ�궨λ�����⣬�����������
            if(browser.ie && browser.version == 9 && range.collapsed && domUtils.isBlockElm(range.startContainer) && domUtils.isEmptyNode(range.startContainer)){
                domUtils.fillNode(range.document,range.startContainer);

            }
            range.select(!browser.gecko);
             setTimeout(function(){
                range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
            },200);

            this.update();
            //table�ĵ�������
            if(me.currentSelectedArr){
                me.currentSelectedArr = [];
                var tds = me.document.getElementsByTagName('td');
                for(var i=0,td;td=tds[i++];){
                    if(td.className == me.options.selectedTdClass){
                         me.currentSelectedArr.push(td);
                    }
                }
            }
             this.clearKey();

            //���ܰ��Լ�reset��
            me.fireEvent('reset',true);
            me.fireEvent('contentchange')
        };

        this.getScene = function() {
            var range = me.selection.getRange(),
                cont = me.body.innerHTML.replace(fillchar,'');
            //�п��ܱ߽��䵽��<table>|<tbody>������λ�ã�������һ��λ��
            range.shrinkBoundary();
            browser.ie && (cont = cont.replace(/>&nbsp;</g,'><').replace(/\s*</g,'').replace(/>\s*/g,'>'));
            var bookmark = range.createBookmark( true, true ),
                bookCont = me.body.innerHTML.replace(fillchar,'');

            range.moveToBookmark( bookmark ).select( true );
            return {
                bookcontent : bookCont,
                content : cont
            }
        };
        this.save = function() {

            var currentScene = this.getScene(),
                lastScene = this.list[this.index];
            //������ͬλ����ͬ����
            if ( lastScene && lastScene.content == currentScene.content &&
                    lastScene.bookcontent == currentScene.bookcontent
            ) {
                return;
            }

            this.list = this.list.slice( 0, this.index + 1 );
            this.list.push( currentScene );
            //���������������ˣ��Ͱ���ǰ���޳�
            if ( this.list.length > maxUndoCount ) {
                this.list.shift();
            }
            this.index = this.list.length - 1;
            this.clearKey();
            //����undo/redo״̬
            this.update();
            me.fireEvent('contentchange')
        };
        this.update = function() {
            this.hasRedo = this.list[this.index + 1] ? true : false;
            this.hasUndo = this.list[this.index - 1] || this.list.length == 1 ? true : false;

        };
        this.reset = function() {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
            this.clearKey();


        };
        this.clearKey = function(){
             keycont = 0;
            lastKeyCode = null;
        }
    }

    me.undoManger = new UndoManager();
    function saveScene() {

        this.undoManger.save()
    }

    me.addListener( 'beforeexeccommand', saveScene );
    me.addListener( 'afterexeccommand', saveScene );

    me.addListener('reset',function(type,exclude){
        if(!exclude)
            me.undoManger.reset();
    });
    me.commands['redo'] = me.commands['undo'] = {
        execCommand : function( cmdName ) {
            me.undoManger[cmdName]();
        },
        queryCommandState : function( cmdName ) {

            return me.undoManger['has' + (cmdName.toLowerCase() == 'undo' ? 'Undo' : 'Redo')] ? 0 : -1;
        },
        notNeedUndo : 1
    };

    var keys = {
         //  /*Backspace*/ 8:1, /*Delete*/ 46:1,
            /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
            37:1, 38:1, 39:1, 40:1,
            13:1 /*enter*/
        },
        keycont = 0,
        lastKeyCode;

    me.addListener( 'keydown', function( type, evt ) {
        var keyCode = evt.keyCode || evt.which;

        if ( !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey ) {

            if ( me.undoManger.list.length == 0 || ((keyCode == 8 ||keyCode == 46) && lastKeyCode != keyCode) ) {

                me.undoManger.save();
                lastKeyCode = keyCode;
                return

            }
            //trace:856
            //������һ������󣬻��ˣ�������Ҫ��keycont>maxInputCount�����ڻ��˵�����
            if(me.undoManger.list.length == 2 && me.undoManger.index == 0 && keycont == 0){
                me.undoManger.list.splice(1,1);
                me.undoManger.update();
            }
            lastKeyCode = keyCode;
            keycont++;
            if ( keycont > maxInputCount ) {

                setTimeout( function() {
                    me.undoManger.save();
                }, 0 );

            }
        }
    } )
};

///import core
///import plugins/inserthtml.js
///import plugins/undo.js
///import plugins/serialize.js
///commands ճ��
///commandsName  PastePlain
///commandsTitle  ���ı�ճ��ģʽ
/*
 ** @description ճ��
 * @author zhanyi
 */
(function() {
    function getClipboardData( callback ) {

        var doc = this.document;

        if ( doc.getElementById( 'baidu_pastebin' ) ) {
            return;
        }

        var range = this.selection.getRange(),
            bk = range.createBookmark(),
            //��������������div
            pastebin = doc.createElement( 'div' );

        pastebin.id = 'baidu_pastebin';


        // Safari Ҫ��div���������ݣ�����ճ�����ݽ���
        browser.webkit && pastebin.appendChild( doc.createTextNode( domUtils.fillChar + domUtils.fillChar ) );
        doc.body.appendChild( pastebin );
        //trace:717 ���ص�span���ܵõ�top
        //bk.start.innerHTML = '&nbsp;';
        bk.start.style.display = '';
        pastebin.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" +
            //Ҫ�����ڹ��ƽ�е�λ�ü��룬������������������
            domUtils.getXY( bk.start ).y + 'px';

        range.selectNodeContents( pastebin ).select( true );

        setTimeout( function() {
            
            if (browser.webkit) {
                
                for(var i=0,pastebins = doc.querySelectorAll('#baidu_pastebin'),pi;pi=pastebins[i++];){
                    if(domUtils.isEmptyNode(pi)){
                        domUtils.remove(pi)
                    }else{
                        pastebin = pi;
                        break;
                    }
                }


            }

			try{
                pastebin.parentNode.removeChild(pastebin);
            }catch(e){}

            range.moveToBookmark( bk ).select(true);
            callback( pastebin );
        }, 0 );


    }

    UE.plugins['paste'] = function() {
        var me = this;
        var word_img_flag = {flag:""};

        var pasteplain = me.options.pasteplain;
        var modify_num = {flag:""};
        me.commands['pasteplain'] = {
            queryCommandState: function (){
                return pasteplain;
            },
            execCommand: function (){
                pasteplain = !pasteplain|0;
            },
            notNeedUndo : 1
        };

        function filter(div){
            
            var html;
            if ( div.firstChild ) {
                    //ȥ��cut����ӵı߽�ֵ
                    var nodes = domUtils.getElementsByTagName(div,'span');
                    for(var i=0,ni;ni=nodes[i++];){
                        if(ni.id == '_baidu_cut_start' || ni.id == '_baidu_cut_end'){
                            domUtils.remove(ni)
                        }
                    }

                    if(browser.webkit){

                        var brs = div.querySelectorAll('div br');
                        for(var i=0,bi;bi=brs[i++];){
                            var pN = bi.parentNode;
                            if(pN.tagName == 'DIV' && pN.childNodes.length ==1){
                                pN.innerHTML = '<p><br/></p>';
                                
                                domUtils.remove(pN)
                            }
                        }
                        var divs = div.querySelectorAll('#baidu_pastebin');
                        for(var i=0,di;di=divs[i++];){
                            var tmpP = me.document.createElement('p');
                            di.parentNode.insertBefore(tmpP,di);
                            while(di.firstChild){
                                tmpP.appendChild(di.firstChild)
                            }
                            domUtils.remove(di)
                        }



                        var metas = div.querySelectorAll('meta');
                        for(var i=0,ci;ci=metas[i++];){
                            domUtils.remove(ci);
                        }

                        var brs = div.querySelectorAll('br');
                        for(i=0;ci=brs[i++];){
                            if(/^apple-/.test(ci)){
                                domUtils.remove(ci)
                            }
                        }

                    }
                    if(browser.gecko){
                        var dirtyNodes = div.querySelectorAll('[_moz_dirty]')
                        for(i=0;ci=dirtyNodes[i++];){
                            ci.removeAttribute( '_moz_dirty' )
                        }
                    }
                    if(!browser.ie ){
                        var spans = div.querySelectorAll('span.apple-style-span');
                        for(var i=0,ci;ci=spans[i++];){
                            domUtils.remove(ci,true);
                        }
                    }


                    html = div.innerHTML;

                    var f = me.serialize;
                    if(f){
                        //������˳������⣬��������ֱ�Ӳ������ݣ�������ִ�����ճ������ʧ��
                        try{
                            var node =  f.transformInput(
                                        f.parseHTML(
                                            //todo: ��ʱ����dtd�Ĺ���
                                            f.word(html)//, true
                                        ),word_img_flag
                                    );
                            //trace:924
                            //���ı�ģʽҲҪ��������
                            node = f.filter(node,pasteplain ? {
                                whiteList: {
                                    'p': {'br':1,'BR':1},
                                    'br':{'$':{}},
                                    'div':{'br':1,'BR':1,'$':{}},
                                    'li':{'$':{}},
                                    'tr':{'td':1,'$':{}},
                                    'td':{'$':{}}

                                },
                                blackList: {
                                    'style':1,
                                    'script':1,
                                    'object':1
                                }
                            } : null, !pasteplain ? modify_num : null);

                            if(browser.webkit){
                                var length = node.children.length,
                                    child;
                                while((child = node.children[length-1]) && child.tag == 'br'){
                                    node.children.splice(length-1,1);
                                    length = node.children.length;
                                }
                            }
                            html = f.toHTML(node,pasteplain)

                        }catch(e){}

                    }


                    //�Զ���Ĵ���
                   html = {'html':html};

                   me.fireEvent('beforepaste',html);

                   me.execCommand( 'insertHtml',html.html);

	               me.fireEvent("afterpaste");

                }
        }

        me.addListener('ready',function(){
            domUtils.on(me.body,'cut',function(){

                var range = me.selection.getRange();
                if(!range.collapsed && me.undoManger){
                    me.undoManger.save()
                }
       
            });
            //ie��beforepaste�ڵ���Ҽ�ʱҲ�ᴥ���������ü�ؼ��̲Ŵ���
                domUtils.on(me.body, browser.ie ? 'keydown' : 'paste',function(e){
                    if(browser.ie && (!e.ctrlKey || e.keyCode != '86'))
                        return;
                    getClipboardData.call( me, function( div ) {
                        filter(div);
                        function hideMsg(){
                             me.ui.hideToolbarMsg();
                             me.removeListener("selectionchange",hideMsg);
                        }
                        if ( modify_num.flag && me.ui){
                            me.ui.showToolbarMsg( me.options.messages.pasteMsg, word_img_flag.flag );
                            modify_num.flag = "";
                            //trance:Ϊ�˽��fireevent  (selectionchange)�¼�����ʱ
                            setTimeout(function(){
                                me.addListener("selectionchange",hideMsg);
                            },100);
                        }
                         if ( word_img_flag.flag && !me.queryCommandState("pasteplain") && me.ui){
                            me.ui.showToolbarMsg( me.options.messages.pasteWordImgMsg,true);
                             word_img_flag.flag = '';
                            //trance:Ϊ�˽��fireevent  (selectionchange)�¼�����ʱ
                            setTimeout(function(){
                                me.addListener("selectionchange",hideMsg);
                            },100);
                        }
                    } );


                })

        });

    }

})();


///import core
///commands �����б�,�����б�
///commandsName  InsertOrderedList,InsertUnorderedList
///commandsTitle  �����б�,�����б�
/**
 * �����б�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertorderlist���������б�
 * @param   {String}   style               ֵΪ��decimal,lower-alpha,lower-roman,upper-alpha,upper-roman
 * @author zhanyi
 */
/**
 * ��������
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertunorderlist���������б�
 * * @param   {String}   style            ֵΪ��circle,disc,square
 * @author zhanyi
 */

    UE.plugins['list'] = function(){
        var me = this,
            notExchange = {
                'TD':1,
                'PRE':1,
                'BLOCKQUOTE':1
            };
        function adjustList(list,tag,style){
            var nextList = list.nextSibling;
            if(nextList && nextList.nodeType == 1 && nextList.tagName.toLowerCase() == tag && (domUtils.getStyle(nextList,'list-style-type')||(tag == 'ol'?'decimal' : 'disc')) == style){
                domUtils.moveChild(nextList,list);
                if(nextList.childNodes.length == 0){
                    domUtils.remove(nextList);
                }
            }
            var preList = list.previousSibling;
            if(preList && preList.nodeType == 1 && preList.tagName.toLowerCase() == tag && (domUtils.getStyle(preList,'list-style-type')||(tag == 'ol'?'decimal' : 'disc')) == style){
                domUtils.moveChild(list,preList)
            }


            if(list.childNodes.length == 0){
                domUtils.remove(list);
            }
        }
        me.addListener('keydown', function(type, evt) {
            function preventAndSave(){
                evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false)
                me.undoManger && me.undoManger.save()
            }
            
            var keyCode = evt.keyCode || evt.which;
            if (keyCode == 13) {//�س�
                
                var range = me.selection.getRange(),
                    start = domUtils.findParentByTagName(range.startContainer, ['ol','ul'], true,function(node){return node.tagName == 'TABLE'}),
                    end = domUtils.findParentByTagName(range.endContainer, ['ol','ul'], true,function(node){return node.tagName == 'TABLE'});
                if (start && end && start === end) {
                    
                    if(!range.collapsed){
                        start = domUtils.findParentByTagName(range.startContainer, 'li', true);
                        end = domUtils.findParentByTagName(range.endContainer, 'li', true);
                        if(start && end && start === end){
                            range.deleteContents();
                            li =  domUtils.findParentByTagName(range.startContainer, 'li', true);
                            if(li && domUtils.isEmptyBlock(li)){
                               
                                pre = li.previousSibling;
                                next = li.nextSibling;
                                p = me.document.createElement('p');
                              
                                domUtils.fillNode(me.document,p);
                                parentList = li.parentNode;
                                if(pre && next){
                                    range.setStart(next,0).collapse(true).select(true);
                                    domUtils.remove(li);

                                }else{
                                    if(!pre && !next || !pre){

                                        parentList.parentNode.insertBefore(p,parentList);



                                    } else{
                                        li.parentNode.parentNode.insertBefore(p,parentList.nextSibling);
                                    }
                                    domUtils.remove(li);
                                    if(!parentList.firstChild){
                                        domUtils.remove(parentList)
                                    }
                                    range.setStart(p,0).setCursor();


                                }
                                preventAndSave();
                                return;

                            }
                        }else{
                            var tmpRange = range.cloneRange(),
                                bk = tmpRange.collapse(false).createBookmark();

                            range.deleteContents();
                            tmpRange.moveToBookmark(bk);
                            var li = domUtils.findParentByTagName(tmpRange.startContainer, 'li', true),
                                pre = li.previousSibling,
                                next = li.nextSibling;

                            if (pre ) {
                                li = pre;
                                if(pre.firstChild && domUtils.isBlockElm(pre.firstChild)){
                                    pre = pre.firstChild;

                                }
                                if(domUtils.isEmptyNode(pre))
                                    domUtils.remove(li);
                            }
                            if (next ) {
                                li = next;
                                if(next.firstChild && domUtils.isBlockElm(next.firstChild)){
                                    next = next.firstChild;
                                }
                                if(domUtils.isEmptyNode(next))
                                    domUtils.remove(li);
                            }
                            tmpRange.select();
                            preventAndSave();
                            return;
                        }
                    }


                    li = domUtils.findParentByTagName(range.startContainer, 'li', true);

                    if (li) {
                        if(domUtils.isEmptyBlock(li)){
                            bk = range.createBookmark();
                            var parentList = li.parentNode;
                            if(li!==parentList.lastChild){
                                domUtils.breakParent(li,parentList);
                            }else{

                                parentList.parentNode.insertBefore(li,parentList.nextSibling);
                                if(domUtils.isEmptyNode(parentList)){
                                    domUtils.remove(parentList);
                                }
                            }
                            //Ƕ�ײ�����
                            if(!dtd.$list[li.parentNode.tagName]){
                                if(!domUtils.isBlockElm(li.firstChild)){
                                    p = me.document.createElement('p');
                                    li.parentNode.insertBefore(p,li);
                                    while(li.firstChild){
                                        p.appendChild(li.firstChild);
                                    }
                                    domUtils.remove(li);
                                }else{
                                    domUtils.remove(li,true);
                                }
                            }
                            range.moveToBookmark(bk).select();


                        }else{
                            var first = li.firstChild;
                            if(!first || !domUtils.isBlockElm(first)){
                                 var p = me.document.createElement('p');
                                
                                !li.firstChild && domUtils.fillNode(me.document,p);
                                while(li.firstChild){

                                    p.appendChild(li.firstChild);
                                }
                                li.appendChild(p);
                                first = p;
                            }

                                var span = me.document.createElement('span');

                                range.insertNode(span);
                                domUtils.breakParent(span, li);

                                var nextLi = span.nextSibling;
                                first = nextLi.firstChild;

                                if (!first) {
                                    p = me.document.createElement('p');
                                    
                                    domUtils.fillNode(me.document,p);
                                    nextLi.appendChild(p);
                                    first = p;
                                }
                                if (domUtils.isEmptyNode(first)) {
                                    first.innerHTML = '';
                                    domUtils.fillNode(me.document,first);
                                }

                                range.setStart(first, 0).collapse(true).shrinkBoundary().select();
                                domUtils.remove(span);
                                pre = nextLi.previousSibling;
                                if(pre && domUtils.isEmptyBlock(pre)){
                                    pre.innerHTML = '<p></p>';
                                    domUtils.fillNode(me.document,pre.firstChild);
                                }

                            }
//                        }

                        preventAndSave();
                    }


                }
            }
            if(keyCode == 8){
                //����ie��li�µ�����
                range = me.selection.getRange();
                if (range.collapsed && domUtils.isStartInblock(range)) {
                   tmpRange = range.cloneRange().trimBoundary();
                   li = domUtils.findParentByTagName(range.startContainer, 'li', true);

                    //Ҫ��li������ߣ����ܴ���
                    if (li && domUtils.isStartInblock(tmpRange)) {

                        if (li && (pre = li.previousSibling)) {
                            if (keyCode == 46 && li.childNodes.length)
                                return;
                            //�п����ϱߵ��ֵܽڵ��Ǹ�2���˵���Ҫ׷�ӵ�2���˵�������li
                            if(dtd.$list[pre.tagName]){
                                pre = pre.lastChild;
                            }
                            me.undoManger && me.undoManger.save();
                            first = li.firstChild;
                            if (domUtils.isBlockElm(first)) {
                                if (domUtils.isEmptyNode(first)) {
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                                    pre.appendChild(first);
                                    range.setStart(first,0).setCursor(false,true);
                                    //first����Ψһ�Ľڵ�
                                    while(li.firstChild){
                                        pre.appendChild(li.firstChild)
                                    }
                                } else {
                                    start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                                    if(start && start !== first){
                                        return;
                                    }
                                    span = me.document.createElement('span');
                                    range.insertNode(span);

//                                    if (domUtils.isBlockElm(pre.firstChild)) {
//
//                                        pre.firstChild.appendChild(span);
//                                        while (first.firstChild) {
//                                            pre.firstChild.appendChild(first.firstChild);
//                                        }
//
//                                    } else {
//                                        while (first.firstChild) {
//                                            pre.appendChild(first.firstChild);
//                                        }
//                                    }
                                    domUtils.moveChild(li,pre);
                                    range.setStartBefore(span).collapse(true).select(true);

                                    domUtils.remove(span)

                                }
                            } else {
                                if (domUtils.isEmptyNode(li)) {
                                    var p = me.document.createElement('p');
                                    pre.appendChild(p);
                                     range.setStart(p,0).setCursor();
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                                } else {
                                    range.setEnd(pre, pre.childNodes.length).collapse().select(true);
                                    while (li.firstChild) {
                                        pre.appendChild(li.firstChild)
                                    }


                                }
                            }

                            domUtils.remove(li);

                            me.undoManger && me.undoManger.save();
                            domUtils.preventDefault(evt);
                            return;

                        }
                        //trace:980

                        if (li && !li.previousSibling) {
                            first = li.firstChild;
                            //trace:1648 Ҫ�ж�li��ֻ��һ���ڵ�
                            if (!first ||  li.lastChild === first && domUtils.isEmptyNode(domUtils.isBlockElm(first) ? first : li)) {
                                var p = me.document.createElement('p');

                                li.parentNode.parentNode.insertBefore(p, li.parentNode);
                                domUtils.fillNode(me.document,p);
                                range.setStart(p, 0).setCursor();
                                domUtils.remove(!li.nextSibling ? li.parentNode : li);
                                me.undoManger && me.undoManger.save();
                                domUtils.preventDefault(evt);
                                return;
                            }


                        }


                    }


                }

            }
        });
        me.commands['insertorderedlist'] =
        me.commands['insertunorderedlist'] = {
            execCommand : function( command, style ) {
                if(!style){
                    style = command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc'
                }
                var me = this,
                    range = this.selection.getRange(),
                    filterFn = function( node ) {
                        return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace( node )
                    },
                    tag =  command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul',
                    frag = me.document.createDocumentFragment();
                //ȥ������Ϊ�����ѡ��ĩβ������adjustmentBoundary����ol/ul��λ��
                //range.shrinkBoundary();//.adjustmentBoundary();
                range.adjustmentBoundary().shrinkBoundary();
                var bko = range.createBookmark(true),
                    start = domUtils.findParentByTagName(me.document.getElementById(bko.start),'li'),
                    modifyStart = 0,
                    end = domUtils.findParentByTagName(me.document.getElementById(bko.end),'li'),
                    modifyEnd = 0,
                    startParent,endParent,
                    list,tmp;

                if(start || end){
                    start && (startParent = start.parentNode);
                    if(!bko.end){
                        end = start;
                    }
                    end && (endParent = end.parentNode);

                    if(startParent === endParent){
                        while(start !== end){
                            tmp = start;
                            start = start.nextSibling;
                            if(!domUtils.isBlockElm(tmp.firstChild)){
                                var p = me.document.createElement('p');
                                while(tmp.firstChild){
                                    p.appendChild(tmp.firstChild)
                                }
                                tmp.appendChild(p);
                            }
                            frag.appendChild(tmp);
                        }
                        tmp = me.document.createElement('span');
                        startParent.insertBefore(tmp,end);
                        if(!domUtils.isBlockElm(end.firstChild)){
                            p = me.document.createElement('p');
                            while(end.firstChild){
                                p.appendChild(end.firstChild)
                            }
                            end.appendChild(p);
                        }
                        frag.appendChild(end);
                        domUtils.breakParent(tmp,startParent);
                        if(domUtils.isEmptyNode(tmp.previousSibling)){
                            domUtils.remove(tmp.previousSibling)
                        }
                        if(domUtils.isEmptyNode(tmp.nextSibling)){
                            domUtils.remove(tmp.nextSibling)
                        }
                        var nodeStyle = domUtils.getComputedStyle( startParent, 'list-style-type' ) || (command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc');
                        if(startParent.tagName.toLowerCase() == tag && nodeStyle == style){
                            for(var i=0,ci,tmpFrag = me.document.createDocumentFragment();ci=frag.childNodes[i++];){
                                while(ci.firstChild){
                                    tmpFrag.appendChild(ci.firstChild);
                                }
                               
                            }
                            tmp.parentNode.insertBefore(tmpFrag,tmp);
                        }else{
                            list = me.document.createElement(tag);
                            domUtils.setStyle(list,'list-style-type',style);
                            list.appendChild(frag);
                            tmp.parentNode.insertBefore(list,tmp);
                        }

                        domUtils.remove(tmp);
                         list && adjustList(list,tag,style);
                        range.moveToBookmark(bko).select();
                        return;
                    }
                    //��ʼ
                    if(start){
                        while(start){
                            tmp = start.nextSibling;
                            var tmpfrag = me.document.createDocumentFragment(),
                                hasBlock = 0;
                            while(start.firstChild){
                                if(domUtils.isBlockElm(start.firstChild))
                                    hasBlock = 1;
                                tmpfrag.appendChild(start.firstChild);
                            }
                            if(!hasBlock){
                                var tmpP = me.document.createElement('p');
                                tmpP.appendChild(tmpfrag);
                                frag.appendChild(tmpP)
                            }else{
                                frag.appendChild(tmpfrag);
                            }
                            domUtils.remove(start);
                            start = tmp;
                        }
                        startParent.parentNode.insertBefore(frag,startParent.nextSibling);
                        if(domUtils.isEmptyNode(startParent)){
                            range.setStartBefore(startParent);
                            domUtils.remove(startParent)
                        }else{
                           range.setStartAfter(startParent);
                        }


                         modifyStart = 1;
                    }

                    if(end){
                        //����
                        start = endParent.firstChild;
                        while(start !== end){
                           tmp = start.nextSibling;

                           tmpfrag = me.document.createDocumentFragment();
                           hasBlock = 0;
                            while(start.firstChild){
                                if(domUtils.isBlockElm(start.firstChild))
                                    hasBlock = 1;
                                tmpfrag.appendChild(start.firstChild);
                            }
                            if(!hasBlock){
                                tmpP = me.document.createElement('p');
                                tmpP.appendChild(tmpfrag);
                                frag.appendChild(tmpP)
                            }else{
                                frag.appendChild(tmpfrag);
                            }
                            domUtils.remove(start);
                            start = tmp;
                        }
                        frag.appendChild(end.firstChild);
                        domUtils.remove(end);
                        endParent.parentNode.insertBefore(frag,endParent);
                        range.setEndBefore(endParent);
                        if(domUtils.isEmptyNode(endParent)){
                            domUtils.remove(endParent)
                        }

                         modifyEnd = 1;
                    }



                }

                if(!modifyStart){
                    range.setStartBefore(me.document.getElementById(bko.start))
                }
                if(bko.end && !modifyEnd){
                    range.setEndAfter(me.document.getElementById(bko.end))
                }
                range.enlarge(true,function(node){return notExchange[node.tagName] });

                frag = me.document.createDocumentFragment();

                var bk = range.createBookmark(),
                    current = domUtils.getNextDomNode( bk.start, false, filterFn ),
                    tmpRange = range.cloneRange(),
                    tmpNode,
                    block = domUtils.isBlockElm;

                while ( current && current !== bk.end && (domUtils.getPosition( current, bk.end ) & domUtils.POSITION_PRECEDING)  ) {

                    if ( current.nodeType == 3 || dtd.li[current.tagName] ) {
                        if(current.nodeType == 1 && dtd.$list[current.tagName]){
                            while(current.firstChild){
                                frag.appendChild(current.firstChild)
                            }
                            tmpNode = domUtils.getNextDomNode( current, false, filterFn );
                            domUtils.remove(current);
                            current = tmpNode;
                            continue;

                        }
                        tmpNode = current;
                        tmpRange.setStartBefore( current );

                        while ( current && current !== bk.end && (!block(current) || domUtils.isBookmarkNode(current) )) {
                            tmpNode = current;
                            current = domUtils.getNextDomNode( current, false, null, function( node ) {
                                return !notExchange[node.tagName]
                            } );
                        }

                        if(current && block(current)){
                            tmp = domUtils.getNextDomNode( tmpNode, false, filterFn );
                            if(tmp && domUtils.isBookmarkNode(tmp)){
                                current = domUtils.getNextDomNode( tmp, false, filterFn );
                                tmpNode = tmp;
                            }
                        }
                        tmpRange.setEndAfter( tmpNode );

                        current = domUtils.getNextDomNode( tmpNode, false, filterFn );

                        var li = range.document.createElement( 'li' );

                        li.appendChild(tmpRange.extractContents());
                        frag.appendChild(li);



                    } else {

                        current = domUtils.getNextDomNode( current, true, filterFn );
                    }
                }
                range.moveToBookmark(bk).collapse(true);
                list = me.document.createElement(tag);
                domUtils.setStyle(list,'list-style-type',style);
                list.appendChild(frag);
                range.insertNode(list);
                //��ǰlist���¿��ܷ�ϲ�
                adjustList(list,tag,style);
                range.moveToBookmark(bko).select();

            },
            queryCommandState : function( command ) {
                return this.highlight ? -1 :
                    utils.findNode(this.selection.getStartElementPath(),[command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul']) ? 1: 0;
            },
            queryCommandValue : function( command ) {
                var   node = utils.findNode(this.selection.getStartElementPath(),[command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul']);
                return node ? domUtils.getComputedStyle( node, 'list-style-type' ) : null;
            }
        }
    };


///import core
///import plugins/serialize.js
///import plugins/undo.js
///commands �鿴Դ��
///commandsName  Source
///commandsTitle  �鿴Դ��
(function (){
    function SourceFormater(config){
        config = config || {};
        this.indentChar = config.indentChar || '    ';
        this.breakChar = config.breakChar || '\n';
        this.selfClosingEnd = config.selfClosingEnd || ' />';
    }
    var unhtml1 = function (){
        var map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        function rep( m ){ return map[m]; }
        return function ( str ) {
            str = str + '';
            return str ? str.replace( /[<>"']/g, rep ) : '';
        };
    }();
    var inline = utils.extend({a:1,A:1},dtd.$inline,true);


    function printAttrs(attrs){
        var buff = [];
        for (var k in attrs) {
            buff.push(k + '="' + unhtml1(attrs[k]) + '"');
        }
        return buff.join(' ');
    }
    SourceFormater.prototype = {
        format: function (html){
            var node = UE.serialize.parseHTML(html);
            this.buff = [];
            this.indents = '';
            this.indenting = 1;
            this.visitNode(node);
            return this.buff.join('');
        },
        visitNode: function (node){
            if (node.type == 'fragment') {
                this.visitChildren(node.children);
            } else if (node.type == 'element') {
                var selfClosing = dtd.$empty[node.tag];
                this.visitTag(node.tag, node.attributes, selfClosing);

                this.visitChildren(node.children);

                if (!selfClosing) {
                    this.visitEndTag(node.tag);
                }
            } else if (node.type == 'comment') {
                this.visitComment(node.data);
            } else {
                this.visitText(node.data,dtd.$notTransContent[node.parent.tag]);
            }
        },
        visitChildren: function (children){
            for (var i=0; i<children.length; i++) {
                this.visitNode(children[i]);
            }
        },
        visitTag: function (tag, attrs, selfClosing){
            if (this.indenting) {
                this.indent();
            } else if (!inline[tag]) { // todo: ȥ��a, ��Ϊdtd��inline����û��a
                this.newline();
                this.indent();
            }
            this.buff.push('<', tag);
            var attrPart = printAttrs(attrs);
            if (attrPart) {
                this.buff.push(' ', attrPart);
            }
            if (selfClosing) {
                this.buff.push(this.selfClosingEnd);
                if (tag == 'br') {
                    this.newline();
                }
            } else {
                this.buff.push('>');
                this.indents += this.indentChar;
            }
            if (!inline[tag]) {
                this.newline();
            }
        },
        indent: function (){
            this.buff.push(this.indents);
            this.indenting = 0;
        },
        newline: function (){
            this.buff.push(this.breakChar);
            this.indenting = 1;
        },
        visitEndTag: function (tag){
            
            this.indents = this.indents.slice(0, -this.indentChar.length);
            if (this.indenting) {
                this.indent();
            } else if (!inline[tag]) {
                this.newline();
                this.indent();
            }
            this.buff.push('</', tag, '>');
        },
        visitText: function (text,notTrans){
            if (this.indenting) {
                this.indent();
            }
      
//            if(!notTrans){
//                 text = text.replace(/&nbsp;/g, ' ').replace(/[ ][ ]+/g, function (m){
//                    return new Array(m.length + 1).join('&nbsp;');
//                }).replace(/(?:^ )|(?: $)/g, '&nbsp;');
//            }
            text = text.replace(/&nbsp;/g, ' ')
            this.buff.push(text);

        },
        visitComment: function (text){
            if (this.indenting) {
                this.indent();
            }
            this.buff.push('<!--', text, '-->');
        }
    };

    var sourceEditors = {
        textarea: function (editor, holder){
            var textarea = holder.ownerDocument.createElement('textarea');
            textarea.style.cssText = 'position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;';
            // todo: IE��ֻ��onresize���Կ���... �ܾ���
            if (browser.ie && browser.version < 8) {
                textarea.style.width = holder.offsetWidth + 'px';
                textarea.style.height = holder.offsetHeight + 'px';
                holder.onresize = function (){
                    textarea.style.width = holder.offsetWidth + 'px';
                    textarea.style.height = holder.offsetHeight + 'px';
                };
            }
            holder.appendChild(textarea);
            return {
                setContent: function (content){
                    textarea.value = content;
                },
                getContent: function (){
                    return textarea.value;
                },
                select: function (){
                    var range;
                    if (browser.ie) {
                        range = textarea.createTextRange();
                        range.collapse(true);
                        range.select();
                    } else {
                        //todo: chrome���޷����ý���
                        textarea.setSelectionRange(0, 0);
                        textarea.focus();
                    }
                },
                dispose: function (){
                    holder.removeChild(textarea);
                    // todo
                    holder.onresize = null;
                    textarea = null;
                    holder = null;
                }
            };
        },
        codemirror: function (editor, holder){
            var options = {
                mode: "text/html",
                tabMode: "indent",
                lineNumbers: true,
                lineWrapping:true
            };
            var codeEditor = window.CodeMirror(holder, options);
            var dom = codeEditor.getWrapperElement();
            dom.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';
            codeEditor.getScrollerElement().style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;';
            codeEditor.refresh();
            return {
                setContent: function (content){
                    codeEditor.setValue(content);
                },
                getContent: function (){
                    return codeEditor.getValue();
                },
                select: function (){
                    codeEditor.focus();
                },
                dispose: function (){
                    holder.removeChild(dom);
                    dom = null;
                    codeEditor = null;
                }
            };
        }
    };

    UE.plugins['source'] = function (){
        var me = this;
        var opt = this.options;
        var formatter = new SourceFormater(opt.source);
        var sourceMode = false;
        var sourceEditor;

        function createSourceEditor(holder){
            var useCodeMirror = opt.sourceEditor == 'codemirror' && window.CodeMirror;
            return sourceEditors[useCodeMirror ? 'codemirror' : 'textarea'](me, holder);
        }

        var bakCssText;
        me.commands['source'] = {
            execCommand: function (){

                sourceMode = !sourceMode;
                if (sourceMode) {
                    me.undoManger && me.undoManger.save();
                    this.currentSelectedArr && domUtils.clearSelectedArr(this.currentSelectedArr);
                    if(browser.gecko)
                        me.body.contentEditable = false;
                    
                    bakCssText = me.iframe.style.cssText;
                    me.iframe.style.cssText += 'position:absolute;left:-32768px;top:-32768px;';

                    var content = formatter.format(me.hasContents() ? me.getContent() : '');

                    sourceEditor = createSourceEditor(me.iframe.parentNode);

                    sourceEditor.setContent(content);
                    setTimeout(function (){
                        sourceEditor.select();
                    });
                } else {
                    
                    me.iframe.style.cssText = bakCssText;
                    var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                    cont = cont.replace(/>[\n\r\t]+([ ]{4})+/g,'>').replace(/[\n\r\t]+([ ]{4})+</g,'<').replace(/>[\n\r\t]+</g,'><');


                    me.setContent(cont);
                    sourceEditor.dispose();
                    sourceEditor = null;
                    setTimeout(function(){
                        
                        var first = me.body.firstChild;
                        //trace:1106 ��ɾ�����ˣ��±߻ᱨ�����Բ���һ��pռλ
                        if(!first){
                            me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
                            first = me.body.firstChild;
                        }
                        //Ҫ��ifmΪ��ʾʱff����ȡ��selection,���򱨴�
                        me.undoManger && me.undoManger.save();

                        while(first && first.firstChild){

                            first = first.firstChild;
                        }
                        var range = me.selection.getRange();
                        if(first.nodeType == 3 || dtd.$empty[first.tagName]){
                            range.setStartBefore(first)
                        }else{
                            range.setStart(first,0);
                        }

                        if(browser.gecko){

                            var input = document.createElement('input');
                            input.style.cssText = 'position:absolute;left:0;top:-32768px';

                            document.body.appendChild(input);

                            me.body.contentEditable = false;
                            setTimeout(function(){
                                domUtils.setViewportOffset(input, { left: -32768, top: 0 });
                                input.focus();
                                setTimeout(function(){
                                    me.body.contentEditable = true;
                                    range.setCursor(false,true);
                                    domUtils.remove(input)
                                })

                            })
                        }else{
                            range.setCursor(false,true);
                        }

                    })
                }
                this.fireEvent('sourcemodechanged', sourceMode);
            },
            queryCommandState: function (){
                return sourceMode|0;
            }
        };
        var oldQueryCommandState = me.queryCommandState;
        me.queryCommandState = function (cmdName){
            cmdName = cmdName.toLowerCase();
            if (sourceMode) {
                return cmdName == 'source' ? 1 : -1;
            }
            return oldQueryCommandState.apply(this, arguments);
        };
        //�����Դ��ģʽ��getContent���ܵõ����µ���������
        var oldGetContent = me.getContent;
        me.getContent = function (){

            if(sourceMode && sourceEditor ){
                var html = sourceEditor.getContent();
                if (this.serialize) {
                    var node = this.serialize.parseHTML(html);
                    node = this.serialize.filter(node);
                    html = this.serialize.toHTML(node);
                }
                return html;
            }else{
                return oldGetContent.apply(this, arguments)
            }
        };
        me.addListener("ready",function(){
            if(opt.sourceEditor == "codemirror"){
                utils.loadFile(document,{
                    src : opt.codeMirrorJsUrl,
                    tag : "script",
                    type : "text/javascript",
                    defer : "defer"
                });
                utils.loadFile(document,{
                    tag : "link",
                    rel : "stylesheet",
                    type : "text/css",
                    href : opt.codeMirrorCssUrl
                });
            }
        });
    };

})();
///import core
///commands ��ݼ�
///commandsName  ShortCutKeys
///commandsTitle  ��ݼ�
//���ÿ�ݼ�
UE.plugins['shortcutkeys'] = function(){
    var me = this,
        shortcutkeys =  utils.extend({
    		 "ctrl+66" : "Bold" //^B
        	,"ctrl+90" : "Undo" //undo
        	,"ctrl+89" : "Redo" //redo
       		,"ctrl+73" : "Italic" //^I
       		,"ctrl+85" : "Underline" //^U
        	,"ctrl+shift+67" : "removeformat" //�����ʽ
        	,"ctrl+shift+76" : "justify:left" //����
        	,"ctrl+shift+82" : "justify:right" //����
        	,"ctrl+65" : "selectAll"
//        	,"9"	   : "indent" //tab
    	},me.options.shortcutkeys);
    me.addListener('keydown',function(type,e){

        var keyCode = e.keyCode || e.which,value;
		for ( var i in shortcutkeys ) {
		    if ( /^(ctrl)(\+shift)?\+(\d+)$/.test( i.toLowerCase() ) || /^(\d+)$/.test( i ) ) {
		        if ( ( (RegExp.$1 == 'ctrl' ? (e.ctrlKey||e.metaKey) : 0)
                        && (RegExp.$2 != "" ? e[RegExp.$2.slice(1) + "Key"] : 1)
                        && keyCode == RegExp.$3
                    ) ||
                     keyCode == RegExp.$1
                ){

                    value = shortcutkeys[i].split(':');
                    me.execCommand( value[0],value[1]);
                    domUtils.preventDefault(e)

		        }
		    }
		}
    });
};
///import core
///import plugins/undo.js
///commands ���ûس���ǩp��br
///commandsName  EnterKey
///commandsTitle  ���ûس���ǩp��br
/**
 * @description ����س�
 * @author zhanyi
 */
UE.plugins['enterkey'] = function() {
    var hTag,
        me = this,
        tag = me.options.enterTag;
    me.addListener('keyup', function(type, evt) {

        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {
            var range = me.selection.getRange(),
                start = range.startContainer,
                doSave;

            //������h1-h6��߻س�����Ƕ��p������
            if (!browser.ie) {

                if (/h\d/i.test(hTag)) {
                    if (browser.gecko) {
                        var h = domUtils.findParentByTagName(start, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote'], true);
                        if (!h) {
                            me.document.execCommand('formatBlock', false, '<p>');
                            doSave = 1;
                        }
                    } else {
                        //chrome remove div
                        if (start.nodeType == 1) {
                            var tmp = me.document.createTextNode(''),div;
                            range.insertNode(tmp);
                            div = domUtils.findParentByTagName(tmp, 'div', true);
                            if (div) {
                                var p = me.document.createElement('p');
                                while (div.firstChild) {
                                    p.appendChild(div.firstChild);
                                }
                                div.parentNode.insertBefore(p, div);
                                domUtils.remove(div);
                                range.setStartBefore(tmp).setCursor();
                                doSave = 1;
                            }
                            domUtils.remove(tmp);

                        }
                    }

                    if (me.undoManger && doSave) {
                        me.undoManger.save()
                    }
                }

            }



            setTimeout(function() {
                me.selection.getRange().scrollToView(me.autoHeightEnabled, me.autoHeightEnabled ? domUtils.getXY(me.iframe).y : 0);
            }, 50)

        }
    });

    me.addListener('keydown', function(type, evt) {

        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {//�س�
            if (me.undoManger) {
                me.undoManger.save()
            }
            hTag = '';


            var range = me.selection.getRange();

            if (!range.collapsed) {
                //��td����ɾ
                var start = range.startContainer,
                    end = range.endContainer,
                    startTd = domUtils.findParentByTagName(start, 'td', true),
                    endTd = domUtils.findParentByTagName(end, 'td', true);
                if (startTd && endTd && startTd !== endTd || !startTd && endTd || startTd && !endTd) {
                    evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);
                    return;
                }
            }
            me.currentSelectedArr && domUtils.clearSelectedArr(me.currentSelectedArr);

            if (tag == 'p') {


                if (!browser.ie) {

                    start = domUtils.findParentByTagName(range.startContainer, ['ol','ul','p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote'], true);


                    if (!start) {

                        me.document.execCommand('formatBlock', false, '<p>');
                        if (browser.gecko) {
                            range = me.selection.getRange();
                            start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                            start && domUtils.removeDirtyAttr(start);
                        }


                    } else {
                        hTag = start.tagName;
                        start.tagName.toLowerCase() == 'p' && browser.gecko && domUtils.removeDirtyAttr(start);
                    }

                }

            } else {
                evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);

                if (!range.collapsed) {
                    range.deleteContents();
                    start = range.startContainer;
                    if (start.nodeType == 1 && (start = start.childNodes[range.startOffset])) {
                        while (start.nodeType == 1) {
                            if (dtd.$empty[start.tagName]) {
                                range.setStartBefore(start).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save()
                                }
                                return false;
                            }
                            if (!start.firstChild) {
                                var br = range.document.createElement('br');
                                start.appendChild(br);
                                range.setStart(start, 0).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save()
                                }
                                return false;
                            }
                            start = start.firstChild
                        }
                        if (start === range.startContainer.childNodes[range.startOffset]) {
                            br = range.document.createElement('br');
                            range.insertNode(br).setCursor();

                        } else {
                            range.setStart(start, 0).setCursor();
                        }


                    } else {
                        br = range.document.createElement('br');
                        range.insertNode(br).setStartAfter(br).setCursor();
                    }


                } else {
                    br = range.document.createElement('br');
                    range.insertNode(br);
                    var parent = br.parentNode;
                    if (parent.lastChild === br) {
                        br.parentNode.insertBefore(br.cloneNode(true), br);
                        range.setStartBefore(br)
                    } else {
                        range.setStartAfter(br)
                    }
                    range.setCursor();

                }

            }

        }
    });
};

/*
*   ����������ļ���������
*/
UE.plugins['keystrokes'] = function() {
    var me = this,
        flag = 0,
        keys = domUtils.keys,
        trans = {
            'B' : 'strong',
            'I' : 'em',
            'FONT' : 'span'
        },
        sizeMap = [0, 10, 12, 16, 18, 24, 32, 48],
        listStyle = {
            'OL':['decimal','lower-alpha','lower-roman','upper-alpha','upper-roman'],

            'UL':[ 'circle','disc','square']
        };
    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;

        if(this.selectAll){
            this.selectAll = false;
            if((keyCode == 8 || keyCode == 46)){
                me.undoManger && me.undoManger.save();
                 //trace:1633
                me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';

                new dom.Range(me.document).setStart(me.body.firstChild,0).setCursor(false,true);
                me.undoManger && me.undoManger.save();
                //todo �����ܻ���Ӱ��
                browser.ie && me._selectionChange();
                domUtils.preventDefault(evt);
                return;
            }


        }

        //����backspace/del
        if (keyCode == 8 ) {//|| keyCode == 46


            var range = me.selection.getRange(),
                tmpRange,
                start,end;

            //��ɾ����body�ʼ��λ��ʱ����ɾ����body,��ֹ�������
            if(range.collapsed){
                start = range.startContainer;
                //�п�����չλ����
                if(domUtils.isWhitespace(start)){
                    start = start.parentNode;
                }
                if(domUtils.isEmptyNode(start) && start === me.body.firstChild){

                    if(start.tagName != 'P'){
                        p = me.document.createElement('p');
                        me.body.insertBefore(p,start);
                        domUtils.fillNode(me.document,p);
                        range.setStart(p,0).setCursor(false,true);
                        //trace:1645
                        domUtils.remove(start);
                    }
                    domUtils.preventDefault(evt);
                    return;

                }
            }

            if (range.collapsed && range.startContainer.nodeType == 3 && range.startContainer.nodeValue.replace(new RegExp(domUtils.fillChar, 'g'), '').length == 0) {
                range.setStartBefore(range.startContainer).collapse(true)
            }
            //���ѡ��controlԪ�ز���ɾ��������
            if (start = range.getClosedNode()) {
                me.undoManger && me.undoManger.save();
                range.setStartBefore(start);
                domUtils.remove(start);
                range.setCursor();
                me.undoManger && me.undoManger.save();
                domUtils.preventDefault(evt);
                return;
            }
            //��ֹ��table�ϵ�ɾ��
            if (!browser.ie) {

                start = domUtils.findParentByTagName(range.startContainer, 'table', true);
                end = domUtils.findParentByTagName(range.endContainer, 'table', true);
                if (start && !end || !start && end || start !== end) {
                    evt.preventDefault();
                    return;
                }
                if (browser.webkit && range.collapsed && start) {
                    tmpRange = range.cloneRange().txtToElmBoundary();
                    start = tmpRange.startContainer;

                    if (domUtils.isBlockElm(start) && start.nodeType == 1 && !dtd.$tableContent[start.tagName] && !domUtils.getChildCount(start, function(node) {
                        return node.nodeType == 1 ? node.tagName !== 'BR' : 1;
                    })) {

                        tmpRange.setStartBefore(start).setCursor();
                        domUtils.remove(start, true);
                        evt.preventDefault();
                        return;
                    }
                }
            }


            if (me.undoManger) {

                if (!range.collapsed) {
                    me.undoManger.save();
                    flag = 1;
                }
            }

        }
        //����tab�����߼�
        if (keyCode == 9) {
            range = me.selection.getRange();
            me.undoManger && me.undoManger.save();
            for (var i = 0,txt = ''; i < me.options.tabSize; i++) {
                txt += me.options.tabNode;
            }
            var span = me.document.createElement('span');
            span.innerHTML = txt;
            if (range.collapsed) {

                var li = domUtils.findParentByTagName(range.startContainer, 'li', true);

                if (li && domUtils.isStartInblock(range)) {
                    bk = range.createBookmark();
                    var parentLi = li.parentNode,
                        list = me.document.createElement(parentLi.tagName);
                    var index = utils.indexOf(listStyle[list.tagName], domUtils.getComputedStyle(parentLi, 'list-style-type'));
                    index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                    domUtils.setStyle(list, 'list-style-type', listStyle[list.tagName][index]);

                    parentLi.insertBefore(list, li);
                    list.appendChild(li);
                    range.moveToBookmark(bk).select()

                } else
                    range.insertNode(span.cloneNode(true).firstChild).setCursor(true);

            } else {
                //����table
                start = domUtils.findParentByTagName(range.startContainer, 'table', true);
                end = domUtils.findParentByTagName(range.endContainer, 'table', true);
                if (start || end) {
                    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
                    return
                }
                //�����б� ��һ��list�ﴦ��
                start = domUtils.findParentByTagName(range.startContainer, ['ol','ul'], true);
                end = domUtils.findParentByTagName(range.endContainer, ['ol','ul'], true);
                if (start && end && start === end) {
                    var bk = range.createBookmark();
                    start = domUtils.findParentByTagName(range.startContainer, 'li', true);
                    end = domUtils.findParentByTagName(range.endContainer, 'li', true);
                    //�ڿ�ʼ��������
                    if (start === start.parentNode.firstChild) {
                        var parentList = me.document.createElement(start.parentNode.tagName);

                        start.parentNode.parentNode.insertBefore(parentList, start.parentNode);
                        parentList.appendChild(start.parentNode);
                    } else {
                        parentLi = start.parentNode,
                            list = me.document.createElement(parentLi.tagName);

                        index = utils.indexOf(listStyle[list.tagName], domUtils.getComputedStyle(parentLi, 'list-style-type'));
                        index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                        domUtils.setStyle(list, 'list-style-type', listStyle[list.tagName][index]);
                        start.parentNode.insertBefore(list, start);
                        var nextLi;
                        while (start !== end) {
                            nextLi = start.nextSibling;
                            list.appendChild(start);
                            start = nextLi;
                        }
                        list.appendChild(end);

                    }
                    range.moveToBookmark(bk).select();

                } else {
                    if (start || end) {
                        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
                        return
                    }
                    //��ͨ�����
                    start = domUtils.findParent(range.startContainer, filterFn);
                    end = domUtils.findParent(range.endContainer, filterFn);
                    if (start && end && start === end) {
                        range.deleteContents();
                        range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
                    } else {
                        var bookmark = range.createBookmark(),
                            filterFn = function(node) {
                                return domUtils.isBlockElm(node);

                            };

                        range.enlarge(true);
                        var bookmark2 = range.createBookmark(),
                            current = domUtils.getNextDomNode(bookmark2.start, false, filterFn);


                        while (current && !(domUtils.getPosition(current, bookmark2.end) & domUtils.POSITION_FOLLOWING)) {


                            current.insertBefore(span.cloneNode(true).firstChild, current.firstChild);

                            current = domUtils.getNextDomNode(current, false, filterFn);

                        }

                        range.moveToBookmark(bookmark2).moveToBookmark(bookmark).select();
                    }

                }


            }
            me.undoManger && me.undoManger.save();
            evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        }
        //trace:1634
        //ff��del���������յ�ʱ��Ҳ��ɾ��
        if(browser.gecko && keyCode == 46){
            range = me.selection.getRange();
            if(range.collapsed){
                start = range.startContainer;
                if(domUtils.isEmptyBlock(start)){
                    var parent = start.parentNode;
                    while(domUtils.getChildCount(parent) == 1 && !domUtils.isBody(parent)){
                        start = parent;
                        parent = parent.parentNode;
                    }
                    if(start === parent.lastChild)
                        evt.preventDefault();
                    return;
                }
            }
        }
    });
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        //�޸�ie/chrome <strong><em>x|</em></strong> �����˸�����������ֺ�����  <b><i>x</i></b>
        if (!browser.gecko && !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            range = me.selection.getRange();
            if (range.collapsed) {
                var start = range.startContainer,
                    isFixed = 0;

                while (!domUtils.isBlockElm(start)) {
                    if (start.nodeType == 1 && utils.indexOf(['FONT','B','I'], start.tagName) != -1) {

                        var tmpNode = me.document.createElement(trans[start.tagName]);
                        if (start.tagName == 'FONT') {
                            //chrome only remember color property
                            tmpNode.style.cssText = (start.getAttribute('size') ? 'font-size:' + (sizeMap[start.getAttribute('size')] || 12) + 'px' : '')
                                + ';' + (start.getAttribute('color') ? 'color:' + start.getAttribute('color') : '')
                                + ';' + (start.getAttribute('face') ? 'font-family:' + start.getAttribute('face') : '')
                                + ';' + start.style.cssText;
                        }
                        while (start.firstChild) {
                            tmpNode.appendChild(start.firstChild)
                        }
                        start.parentNode.insertBefore(tmpNode, start);
                        domUtils.remove(start);
                        if (!isFixed) {
                            range.setEnd(tmpNode, tmpNode.childNodes.length).collapse(true)

                        }
                        start = tmpNode;
                        isFixed = 1;
                    }
                    start = start.parentNode;

                }

                isFixed && range.select()

            }
        }

        if (keyCode == 8 ) {//|| keyCode == 46

            //���ff�����б������˸񣬲���ɾ���ո��е�����
            if(browser.gecko){
                for(var i=0,li,lis = domUtils.getElementsByTagName(this.body,'li');li=lis[i++];){
                    if(domUtils.isEmptyNode(li) && !li.previousSibling){
                        var liOfPn = li.parentNode;
                        domUtils.remove(li);
                        if(domUtils.isEmptyNode(liOfPn)){
                            domUtils.remove(liOfPn)
                        }

                    }
                }
            }

            var range,start,parent,
                tds = this.currentSelectedArr;
            if (tds && tds.length > 0) {
                for (var i = 0,ti; ti = tds[i++];) {
                    ti.innerHTML = browser.ie ? ( browser.version < 9 ? '&#65279' : '' ) : '<br/>';

                }
                range = new dom.Range(this.document);
                range.setStart(tds[0], 0).setCursor();
                if (flag) {
                    me.undoManger.save();
                    flag = 0;
                }
                //��ֹchromeִ��Ĭ�ϵĶ���
                if (browser.webkit) {
                    evt.preventDefault();
                }
                return;
            }

            range = me.selection.getRange();

            //ctrl+a ��ȫ��ɾ��������
//
//            if (domUtils.isEmptyBlock(me.body) && !range.startOffset) {
//                //trace:1633
//                me.body.innerHTML = '<p>'+(browser.ie ? '&nbsp;' : '<br/>')+'</p>';
//                range.setStart(me.body.firstChild,0).setCursor(false,true);
//                me.undoManger && me.undoManger.save();
//                //todo �����ܻ���Ӱ��
//                browser.ie && me._selectionChange();
//                return;
//            }

            //����ɾ�����ɾ�������

            start = range.startContainer;
            if(domUtils.isWhitespace(start)){
                start = start.parentNode
            }
            //��־λ��ֹ�յ�p�޷�ɾ��
            var removeFlag = 0;
            while (start.nodeType == 1 && domUtils.isEmptyNode(start) && dtd.$removeEmpty[start.tagName]) {
                removeFlag = 1;
                parent = start.parentNode;
                domUtils.remove(start);
                start = parent;
            }

            if ( removeFlag && start.nodeType == 1 && domUtils.isEmptyNode(start)) {
                //ie�µ����⣬��Ȼû������Ӧ�Ľڵ㵫һ�����������ֻ��ǻ��Զ���ɾ���Ľڵ���ϣ�
                if (browser.ie) {
                    var span = range.document.createElement('span');
                    start.appendChild(span);
                    range.setStart(start,0).setCursor();
                    //for ie
                    li = domUtils.findParentByTagName(start,'li',true);
                    if(li){
                        var next = li.nextSibling;
                        while(next){
                            if(domUtils.isEmptyBlock(next)){
                                li = next;
                                next = next.nextSibling;
                                domUtils.remove(li);
                                continue;

                            }
                            break;
                        }
                    }
                } else {
                    start.innerHTML = '<br/>';
                    range.setStart(start, 0).setCursor(false,true);
                }

                setTimeout(function() {
                    if (browser.ie) {
                        domUtils.remove(span);
                    }

                    if (flag) {
                        me.undoManger.save();
                        flag = 0;
                    }
                }, 0)
            } else {

                if (flag) {
                    me.undoManger.save();
                    flag = 0;
                }

            }
        }
    })
};
///import core
///commands �޸�chrome��ͼƬ���ܵ��������
///commandsName  FixImgClick
///commandsTitle  �޸�chrome��ͼƬ���ܵ��������
//�޸�chrome��ͼƬ���ܵ��������
//todo ���ԸĴ�С
UE.plugins['fiximgclick'] = function() {
    var me = this;
    if ( browser.webkit ) {
        me.addListener( 'click', function( type, e ) {
            if ( e.target.tagName == 'IMG' ) {
                var range = new dom.Range( me.document );
                range.selectNode( e.target ).select();

            }
        } )
    }
};
///import core
///commands Ϊ��ie������Զ����a��ǩ
///commandsName  AutoLink
///commandsTitle  �Զ���������
/**
 * @description Ϊ��ie������Զ����a��ǩ
 * @author zhanyi
 */
    UE.plugins['autolink'] = function() {
        var cont = 0;
        if (browser.ie) {
            return;
        }
        var me = this;
        me.addListener('reset',function(){
           cont = 0;
        });
        me.addListener('keydown', function(type, evt) {
            var keyCode = evt.keyCode || evt.which;

            if (keyCode == 32 || keyCode == 13) {

                var sel = me.selection.getNative(),
                    range = sel.getRangeAt(0).cloneRange(),
                    offset,
                    charCode;

                var start = range.startContainer;
                while (start.nodeType == 1 && range.startOffset > 0) {
                    start = range.startContainer.childNodes[range.startOffset - 1];
                    if (!start)
                        break;
                    range.setStart(start, start.nodeType == 1 ? start.childNodes.length : start.nodeValue.length);
                    range.collapse(true);
                    start = range.startContainer;
                }

                do{
                    if (range.startOffset == 0) {
                        start = range.startContainer.previousSibling;

                        while (start && start.nodeType == 1) {
                            start = start.lastChild;
                        }
                        if (!start || domUtils.isFillChar(start))
                            break;
                        offset = start.nodeValue.length;
                    } else {
                        start = range.startContainer;
                        offset = range.startOffset;
                    }
                    range.setStart(start, offset - 1);
                    charCode = range.toString().charCodeAt(0);
                } while (charCode != 160 && charCode != 32);

                if (range.toString().replace(new RegExp(domUtils.fillChar, 'g'), '').match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
                    while(range.toString().length){
                        if(/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(range.toString())){
                            break;
                        }
                        try{
                            range.setStart(range.startContainer,range.startOffset+1)
                        }catch(e){
                            range.setStart(range.startContainer.nextSibling,0)

                        }

                    }
                    var a = me.document.createElement('a'),text = me.document.createTextNode(' '),href;

                    me.undoManger && me.undoManger.save();
                    a.appendChild(range.extractContents());
                    a.href = a.innerHTML = a.innerHTML.replace(/<[^>]+>/g,'');
                    href = a.getAttribute("href").replace(new RegExp(domUtils.fillChar,'g'),'');
                    href = /^(?:https?:\/\/)/ig.test(href) ? href : "http://"+ href;
                    a.setAttribute('data_ue_src',href);
                    a.href = href;

                    range.insertNode(a);
                    a.parentNode.insertBefore(text, a.nextSibling);
                    range.setStart(text, 0);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    me.undoManger && me.undoManger.save();
                }
            }
        })
    };

///import core
///commands ���������ݳ����༭���߶�ʱ���༭���Զ�����
///commandsName  AutoHeight,autoHeightEnabled
///commandsTitle  �Զ�����
/**
 * @description �Զ���չ
 * @author zhanyi
 */
UE.plugins['autoheight'] = function () {
    var me = this;
    //�ṩ���أ��������Ҳ���Թر�
    me.autoHeightEnabled = me.options.autoHeightEnabled;
    if (!me.autoHeightEnabled)return;

    var bakOverflow,
        span, tmpNode,
        lastHeight = 0,
        currentHeight,
        timer;
    function adjustHeight() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (me.queryCommandState('source') != 1) {
                if (!span) {
                    span = me.document.createElement('span');
                    //trace:1764
                    span.style.cssText = 'display:block;width:0;margin:0;padding:0;border:0;clear:both;';
                    span.innerHTML = '.';
                }
                tmpNode = span.cloneNode(true);
                me.body.appendChild(tmpNode);

                currentHeight = Math.max(domUtils.getXY(tmpNode).y + tmpNode.offsetHeight, me.options.minFrameHeight);

                if (currentHeight != lastHeight) {

                    me.setHeight(currentHeight);

                    lastHeight = currentHeight;
                }

                domUtils.remove(tmpNode);

            }
        }, 50)
    }
    me.addListener('destroy', function () {
        me.removeListener('contentchange', adjustHeight);
        me.removeListener('keyup', adjustHeight);
        me.removeListener('mouseup', adjustHeight);
    });
    me.enableAutoHeight = function () {
        if(!me.autoHeightEnabled)return;
        var doc = me.document;
        me.autoHeightEnabled = true;
        bakOverflow = doc.body.style.overflowY;
        doc.body.style.overflowY = 'hidden';
        me.addListener('contentchange', adjustHeight);
        me.addListener('keyup', adjustHeight);
        me.addListener('mouseup', adjustHeight);
        //ff�����¼���ò���
        setTimeout(function () {
            adjustHeight();
        }, browser.gecko ? 100 : 0);
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.disableAutoHeight = function () {

        me.body.style.overflowY = bakOverflow || '';

        me.removeListener('contentchange', adjustHeight);
        me.removeListener('keyup', adjustHeight);
        me.removeListener('mouseup', adjustHeight);
        me.autoHeightEnabled = false;
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.addListener('ready', function () {
        me.enableAutoHeight();
        //trace:1764
        var timer;
        domUtils.on(browser.ie ? me.body : me.document,browser.webkit ? 'dragover' : 'drop',function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                adjustHeight()
            },100)

        });
    });






};


///import core
///commands ����������
///commandsName  AutoFloat,autoFloatEnabled
///commandsTitle  ����������
/*
 *  modified by chengchao01
 *
 *  ע�⣺ ����˹��ܺ���IE6�»Ὣbody�ı���ͼƬ���ǵ���
 */
    UE.plugins['autofloat'] = function() {
        var uiUtils,
       		LteIE6 = browser.ie && browser.version <= 6,
            quirks = browser.quirks;

        function checkHasUI(editor){
           if(!editor.ui){
              alert('autofloat�������������UEditor UI\nautofloat����λ��: _src/plugins/autofloat.js');

              throw({
                  name: 'δ����UI�ļ�',
                  message: 'autofloat����������UEditor UI��autofloat����λ��: _src/plugins/autofloat.js'
              });
           }
            uiUtils = UE.ui.uiUtils;

           return 1;
       }
        function fixIE6FixedPos(){
            var docStyle = document.body.style;
           docStyle.backgroundImage = 'url("about:blank")';
           docStyle.backgroundAttachment = 'fixed';
        }
		var optsAutoFloatEnabled = this.options.autoFloatEnabled;

        //������̶�toolbar��λ�ã���ֱ���˳�
        if(!optsAutoFloatEnabled){
			return;
		}

		var me = this,
			bakCssText,
			placeHolder = document.createElement('div'),
            toolbarBox,orgTop,
            getPosition,
            flag =true;   //ie7ģʽ����Ҫƫ��
		function setFloating(){
			var toobarBoxPos = domUtils.getXY(toolbarBox),
				origalFloat = domUtils.getComputedStyle(toolbarBox,'position'),
                origalLeft = domUtils.getComputedStyle(toolbarBox,'left');
			toolbarBox.style.width = toolbarBox.offsetWidth + 'px';
            toolbarBox.style.zIndex = me.options.zIndex * 1 + 1;
			toolbarBox.parentNode.insertBefore(placeHolder, toolbarBox);
			if (LteIE6 || quirks) {
                if(toolbarBox.style.position != 'absolute'){
                    toolbarBox.style.position = 'absolute';
                }

                toolbarBox.style.top = (document.body.scrollTop||document.documentElement.scrollTop) - orgTop + 'px';
			} else {
                if (browser.ie7Compat && flag) {
                   flag = false;
                   toolbarBox.style.left =  getPosition(toolbarBox).left - document.documentElement.getBoundingClientRect().left+2  + 'px';
                }
                if(toolbarBox.style.position != 'fixed'){
                    toolbarBox.style.position = 'fixed';
                    toolbarBox.style.top = '0';

                    ((origalFloat == 'absolute' || origalFloat == 'relative') && parseFloat(origalLeft)) && (toolbarBox.style.left = toobarBoxPos.x + 'px');
                }

			}


		}
		function unsetFloating(){
            flag = true;
            if(placeHolder.parentNode)
			    placeHolder.parentNode.removeChild(placeHolder);

			toolbarBox.style.cssText = bakCssText;
		}

        function updateFloating(){
            var rect3 = getPosition(me.container);

            if (rect3.top < 0 && rect3.bottom - toolbarBox.offsetHeight > 0) {
                setFloating();
            }else{
                unsetFloating();
            }


        }
        var defer_updateFloating = utils.defer(function(){
            updateFloating();
        },browser.ie ? 200 : 100,true);

        me.addListener('destroy',function(){
            domUtils.un(window, ['scroll','resize'], updateFloating);
            me.removeListener('keydown', defer_updateFloating);
        });
        me.addListener('ready', function(){
            if(checkHasUI(me)){

                getPosition = uiUtils.getClientRect;
                toolbarBox = me.ui.getDom('toolbarbox');
                orgTop = getPosition(toolbarBox).top;
                bakCssText = toolbarBox.style.cssText;


                placeHolder.style.height = toolbarBox.offsetHeight + 'px';
                if(LteIE6){
                    fixIE6FixedPos();
                }
                me.addListener('autoheightchanged', function (t, enabled){
                    if (enabled) {
                        domUtils.on(window, ['scroll','resize'], updateFloating);
                        me.addListener('keydown', defer_updateFloating);
                    } else {
                        domUtils.un(window, ['scroll','resize'], updateFloating);
                        me.removeListener('keydown', defer_updateFloating);
                    }
                });

                me.addListener('beforefullscreenchange', function (t, enabled){
                    if (enabled) {
                        unsetFloating();
                    }
                });
                me.addListener('fullscreenchanged', function (t, enabled){
                    if (!enabled) {
                        updateFloating();
                    }
                });
                me.addListener('sourcemodechanged', function (t, enabled){
                    setTimeout(function (){
                        updateFloating();
                    });
                });
            }
        })
	};

///import core
///import plugins/inserthtml.js
///commands �������
///commandsName  HighlightCode
///commandsTitle  �������
///commandsDialog  dialogs\code\code.html
UE.plugins['highlight'] = function() {
    var me = this;
    me.commands['highlightcode'] = {
        execCommand: function (cmdName, code, syntax) {
            if(code && syntax){
                var pre = document.createElement("pre");
                pre.className = "brush: "+syntax+";toolbar:false;";
                pre.style.display = "";
                pre.appendChild(document.createTextNode(code));
                document.body.appendChild(pre);
                if(me.queryCommandState("highlightcode")){
                    me.execCommand("highlightcode");
                }
                me.execCommand('inserthtml', SyntaxHighlighter.highlight(pre,null,true));
                var div = me.document.getElementById(SyntaxHighlighter.getHighlighterDivId());
                div.setAttribute('highlighter',pre.className);
                domUtils.remove(pre);
                adjustHeight()
            }else{
                var range = this.selection.getRange(),
                   start = domUtils.findParentByTagName(range.startContainer, 'table', true),
                   end = domUtils.findParentByTagName(range.endContainer, 'table', true),
                   codediv;
                if(start && end && start === end && start.parentNode.className.indexOf("syntaxhighlighter")>-1){
                    codediv = start.parentNode;
                    if(domUtils.isBody(codediv.parentNode)){
                        var p = me.document.createElement('p');
                        p.innerHTML = browser.ie ? '' : '<br/>';
                        me.body.insertBefore(p,codediv);
                        range.setStart(p,0)
                    }else{
                        range.setStartBefore(codediv)
                    }
                    range.setCursor();
                    domUtils.remove(codediv);
                }
            }
        },
        queryCommandState: function(){
            var range = this.selection.getRange(),start,end;
            range.adjustmentBoundary();
                start = domUtils.findParent(range.startContainer,function(node){
                    return node.nodeType == 1 && node.tagName == 'DIV' && domUtils.hasClass(node,'syntaxhighlighter')
                },true);
                end = domUtils.findParent(range.endContainer,function(node){
                    return node.nodeType == 1 && node.tagName == 'DIV' && domUtils.hasClass(node,'syntaxhighlighter')
                },true);
            return start && end && start == end  ? 1 : 0;
        }
    };

    me.addListener('beforeselectionchange',function(){
        me.highlight = me.queryCommandState('highlightcode');
    });

    me.addListener('afterselectionchange',function(){
        me.highlight = 0;
    });
    me.addListener("ready",function(){
        //�����ظ����ظ����ļ�
        if(typeof XRegExp == "undefined"){
            var obj = {
                id : "syntaxhighlighter_js",
                src : me.options.highlightJsUrl,
                tag : "script",
                type : "text/javascript",
                defer : "defer"
            };
            utils.loadFile(document,obj,function(){
                changePre();
            });
        }
        if(!me.document.getElementById("syntaxhighlighter_css")){
            var obj = {
                id : "syntaxhighlighter_css",
                tag : "link",
                rel : "stylesheet",
                type : "text/css",
                href : me.options.highlightCssUrl
            };
            utils.loadFile(me.document,obj);
        }

    });
    me.addListener("beforegetcontent",function(type,cmd){
        for(var i=0,di,divs=domUtils.getElementsByTagName(me.body,'div');di=divs[i++];){
            if(di.className == 'container'){
                var pN = di.parentNode;
                while(pN){
                    if(pN.tagName == 'DIV' && /highlighter/.test(pN.id)){
                        break;
                    }
                    pN = pN.parentNode;
                }
                if(!pN)return;
                var pre = me.document.createElement('pre');
                for(var str=[],c=0,ci;ci=di.childNodes[c++];){
                    str.push(ci[browser.ie?'innerText':'textContent']);
                }
                pre.appendChild(me.document.createTextNode(str.join('\n')));
                pre.className = pN.getAttribute('highlighter');
                pN.parentNode.insertBefore(pre,pN);
                domUtils.remove(pN);
            }
        }
    });
    me.addListener("aftergetcontent",function(type,cmd){
        changePre();
    });
    function adjustHeight(){
        var div = me.document.getElementById(SyntaxHighlighter.getHighlighterDivId());

        if(div){
            var tds = div.getElementsByTagName('td');
            for(var i=0,li,ri;li=tds[0].childNodes[i];i++){
                ri = tds[1].firstChild.childNodes[i];

                ri.style.height = li.style.height = ri.offsetHeight + 'px';
            }

        }
    }
    function changePre(){
        for(var i=0,pr,pres = domUtils.getElementsByTagName(me.document,"pre");pr=pres[i++];){
            if(pr.className.indexOf("brush")>-1){
                
                var pre = document.createElement("pre"),txt,div;
                pre.className = pr.className;
                pre.style.display = "none";
                pre.appendChild(document.createTextNode(pr[browser.ie?'innerText':'textContent']));
                document.body.appendChild(pre);
                try{
                    txt = SyntaxHighlighter.highlight(pre,null,true);
                }catch(e){
                    domUtils.remove(pre);
                    return ;
                }

                div = me.document.createElement("div");
                div.innerHTML = txt;

                div.firstChild.setAttribute('highlighter',pre.className);
                pr.parentNode.insertBefore(div.firstChild,pr);

                domUtils.remove(pre);
                domUtils.remove(pr);
                
                adjustHeight()
            }
        }
    }
    me.addListener("aftersetcontent",function(){
        
        changePre();
    });
    //ȫ��ʱ��������һ�¿��
    me.addListener('fullscreenchanged',function(){
        var div = domUtils.getElementsByTagName(me.document,'div');
        for(var j=0,di;di=div[j++];){
            if(/^highlighter/.test(di.id)){
                var tds = di.getElementsByTagName('td');
                for(var i=0,li,ri;li=tds[0].childNodes[i];i++){
                    ri = tds[1].firstChild.childNodes[i];

                    ri.style.height = li.style.height = ri.offsetHeight + 'px';
                }
            }
        }

    })
};

///import core
///commands ���ƹ��˹���
///commandsName  Serialize
///commandsTitle  ���ƹ��˹���
UE.plugins['serialize'] = function () {
    var ie = browser.ie,
        version = browser.version;

    function ptToPx(value){
        return /pt/.test(value) ? value.replace( /([\d.]+)pt/g, function( str ) {
            return  Math.round(parseFloat(str) * 96 / 72) + "px";
        } ) : value;
    }
    var me = this,
            EMPTY_TAG = dtd.$empty,
            parseHTML = function () {
                 //�ɵ�<a> ����ÿո񣬱���</a>  �����Ŀո�
                var RE_PART = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
                        RE_ATTR = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
                                        EMPTY_ATTR = {checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1},
                                        CDATA_TAG = {script:1,style: 1},
                                        NEED_PARENT_TAG = {
                                            "li": { "$": 'ul', "ul": 1, "ol": 1 },
                                            "dd": { "$": "dl", "dl": 1 },
                                            "dt": { "$": "dl", "dl": 1 },
                                            "option": { "$": "select", "select": 1 },
                                            "td": { "$": "tr", "tr": 1 },
                                            "th": { "$": "tr", "tr": 1 },
                                            "tr": { "$": "tbody", "tbody": 1, "thead": 1, "tfoot": 1, "table": 1 },
                                            "tbody": { "$": "table", 'table':1,"colgroup": 1 },
                                            "thead": { "$": "table", "table": 1 },
                                            "tfoot": { "$": "table", "table": 1 },
                                            "col": { "$": "colgroup","colgroup":1 }
                                        };
                                var NEED_CHILD_TAG = {
                    "table": "td", "tbody": "td", "thead": "td", "tfoot": "td", "tr": "td",
                    "colgroup": "col",
                    "ul": "li", "ol": "li",
                    "dl": "dd",
                    "select": "option"
                };

                function parse( html, callbacks ) {

                    var match,
                            nextIndex = 0,
                            tagName,
                            cdata;
                    RE_PART.exec( "" );
                    while ( (match = RE_PART.exec( html )) ) {

                        var tagIndex = match.index;
                        if ( tagIndex > nextIndex ) {
                            var text = html.slice( nextIndex, tagIndex );
                            if ( cdata ) {
                                cdata.push( text );
                            } else {
                                callbacks.onText( text );
                            }
                        }
                        nextIndex = RE_PART.lastIndex;
                        if ( (tagName = match[1]) ) {
                            tagName = tagName.toLowerCase();
                            if ( cdata && tagName == cdata._tag_name ) {
                                callbacks.onCDATA( cdata.join( '' ) );
                                cdata = null;
                            }
                            if ( !cdata ) {
                                callbacks.onTagClose( tagName );
                                continue;
                            }
                        }
                        if ( cdata ) {
                            cdata.push( match[0] );
                            continue;
                        }
                        if ( (tagName = match[3]) ) {
                            if ( /="/.test( tagName ) ) {
                                continue;
                            }
                            tagName = tagName.toLowerCase();
                            var attrPart = match[4],
                                    attrMatch,
                                    attrMap = {},
                                    selfClosing = attrPart && attrPart.slice( -1 ) == '/';
                            if ( attrPart ) {
                                RE_ATTR.exec( "" );
                                while ( (attrMatch = RE_ATTR.exec( attrPart )) ) {
                                    var attrName = attrMatch[1].toLowerCase(),
                                            attrValue = attrMatch[2] || attrMatch[3] || attrMatch[4] || '';
                                    if ( !attrValue && EMPTY_ATTR[attrName] ) {
                                        attrValue = attrName;
                                    }
                                    if ( attrName == 'style' ) {
                                        if ( ie && version <= 6 ) {
                                            attrValue = attrValue.replace( /(?!;)\s*([\w-]+):/g, function ( m, p1 ) {
                                                return p1.toLowerCase() + ':';
                                            } );
                                        }
                                    }
                                    //û��ֵ�����Բ����
                                    if ( attrValue ) {
                                        attrMap[attrName] = attrValue.replace( /:\s*/g, ':' )
                                    }

                                }
                            }
                            callbacks.onTagOpen( tagName, attrMap, selfClosing );
                            if ( !cdata && CDATA_TAG[tagName] ) {
                                cdata = [];
                                cdata._tag_name = tagName;
                            }
                            continue;
                        }
                        if ( (tagName = match[2]) ) {
                            callbacks.onComment( tagName );
                        }
                    }
                    if ( html.length > nextIndex ) {
                        callbacks.onText( html.slice( nextIndex, html.length ) );
                    }
                }

                return function ( html, forceDtd ) {

                    var fragment = {
                        type: 'fragment',
                        parent: null,
                        children: []
                    };
                    var currentNode = fragment;

                    function addChild( node ) {
                        node.parent = currentNode;
                        currentNode.children.push( node );
                    }

                    function addElement( element, open ) {
                        var node = element;
                        // �����ṹ����ǩ��ʱ��
                        if ( NEED_PARENT_TAG[node.tag] ) {
                            // �������������ʱ��, ����֮ǰ�ı�ǩ
                            // e.g. <table><tr><td>12312`<tr>`4566
                            while ( NEED_PARENT_TAG[currentNode.tag] && NEED_PARENT_TAG[currentNode.tag][node.tag] ) {
                                currentNode = currentNode.parent;
                            }
                            // ���ǰһ����ǩ�������ǩ��ͬһ��, ����֮ǰ�ı�ǩ
                            // e.g. <ul><li>123<li>
                            if ( currentNode.tag == node.tag ) {
                                currentNode = currentNode.parent;
                            }
                            // ���ϲ��븸��ǩ
                            while ( NEED_PARENT_TAG[node.tag] ) {
                                if ( NEED_PARENT_TAG[node.tag][currentNode.tag] ) break;
                                node = node.parent = {
                                    type: 'element',
                                    tag: NEED_PARENT_TAG[node.tag]['$'],
                                    attributes: {},
                                    children: [node]
                                };
                            }
                        }
                        if ( forceDtd ) {

                            // ������������ǩ���ܷ���ǰһ����ǩ�ڲ��������ǰһ����ǩ,span��������
                            while ( dtd[node.tag] && !(currentNode.tag == 'span' ? utils.extend( dtd['strong'], {'a':1,'A':1} ) : (dtd[currentNode.tag] || dtd['div']))[node.tag] ) {
                                if ( tagEnd( currentNode ) ) continue;
                                if ( !currentNode.parent ) break;
                                currentNode = currentNode.parent;
                            }
                        }
                        node.parent = currentNode;
                        currentNode.children.push( node );
                        if ( open ) {
                            currentNode = element;
                        }
                        if ( element.attributes.style ) {
                            element.attributes.style = element.attributes.style.toLowerCase();
                        }
                        return element;
                    }

                    // ����һ����ǩ��ʱ����Ҫ�ж�һ�����Ƿ�ȱ���ӱ�ǩ
                    // e.g. <table></table>
                    function tagEnd( node ) {
                        var needTag;
                        if ( !node.children.length && (needTag = NEED_CHILD_TAG[node.tag]) ) {
                            addElement( {
                                type: 'element',
                                tag: needTag,
                                attributes: {},
                                children: []
                            }, true );
                            return true;
                        }
                        return false;
                    }

                    parse( html, {
                        onText: function ( text ) {

                            while ( !(dtd[currentNode.tag] || dtd['div'])['#'] ) {
                                //�ڵ�֮��Ŀհײ��ܵ����ڵ㴦��
//                                if(/^[ \t\r\n]+$/.test( text )){
//                                    return;
//                                }
                                if ( tagEnd( currentNode ) ) continue;
                                currentNode = currentNode.parent;
                            }
                            //if(/^[ \t\n\r]*/.test(text))
                                addChild( {
                                    type: 'text',
                                    data: text
                                } );

                        },
                        onComment: function ( text ) {
                            addChild( {
                                type: 'comment',
                                data: text
                            } );
                        },
                        onCDATA: function ( text ) {
                            while ( !(dtd[currentNode.tag] || dtd['div'])['#'] ) {
                                if ( tagEnd( currentNode ) ) continue;
                                currentNode = currentNode.parent;
                            }
                            addChild( {
                                type: 'cdata',
                                data: text
                            } );
                        },
                        onTagOpen: function ( tag, attrs, closed ) {
                            closed = closed || EMPTY_TAG[tag] ;
                            addElement( {
                                type: 'element',
                                tag: tag,
                                attributes: attrs,
                                closed: closed,
                                children: []
                            }, !closed );
                        },
                        onTagClose: function ( tag ) {
                            var node = currentNode;
                            // ������ƥ��ı�ǩ, ���ﲻ����dtd���������ΪtagOpen��ʱ���Ѿ��������, ���ﲻ������
                            while ( node && tag != node.tag ) {
                                node = node.parent;
                            }
                            if ( node ) {
                                // �ر��м�ı�ǩ
                                for ( var tnode = currentNode; tnode !== node.parent; tnode = tnode.parent ) {
                                    tagEnd( tnode );
                                }
                                //ȥ���հ׵�inline�ڵ�
                                //��ҳ��ê�㱣��
                                //|| dtd.$removeEmptyBlock[node.tag])
//                                if ( !node.children.length && dtd.$removeEmpty[node.tag] && !node.attributes.anchorname && node.attributes['class'] != 'pagebreak' && node.tag != 'a') {
//
//                                    node.parent.children.pop();
//                                }
                                currentNode = node.parent;
                            } else {
                                // ���û���ҵ���ʼ��ǩ, �򴴽��±�ǩ
                                // eg. </div> => <div></div>
                                //���������վembed������������������⴦��һ��
                                if ( !(dtd.$removeEmpty[tag] || dtd.$removeEmptyBlock[tag] || tag == 'embed') ) {
                                    node = {
                                        type: 'element',
                                        tag: tag,
                                        attributes: {},
                                        children: []
                                    };
                                    addElement( node, true );
                                    tagEnd( node );
                                    currentNode = node.parent;
                                }


                            }
                        }
                    } );
                    // �����������, ֻ�п�ʼ��ǩû�н�����ǩ�����, ��Ҫ�رտ�ʼ��ǩ
                    // eg. <table>
                    while ( currentNode !== fragment ) {
                        tagEnd( currentNode );
                        currentNode = currentNode.parent;
                    }
                    return fragment;
                };
            }();
    var unhtml1 = function () {
        var map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

        function rep( m ) {
            return map[m];
        }

        return function ( str ) {
            str = str + '';
            return str ? str.replace( /[<>"']/g, rep ) : '';
        };
    }();
    var toHTML = function () {
        function printChildren( node, pasteplain ) {
            var children = node.children;

            var buff = [];
            for ( var i = 0,ci; ci = children[i]; i++ ) {

                buff.push( toHTML( ci, pasteplain ) );
            }
            return buff.join( '' );
        }

        function printAttrs( attrs ) {
            var buff = [];
            for ( var k in attrs ) {
                var value = attrs[k];
                
                if(k == 'style'){

                    //pt==>px
                    value = ptToPx(value);
                    //color rgb ==> hex
                    if(/rgba?\s*\([^)]*\)/.test(value)){
                        value = value.replace( /rgba?\s*\(([^)]*)\)/g, function( str ) {
                            return utils.fixColor('color',str);
                        } )
                    }
                    attrs[k] = utils.optCss(value.replace(/windowtext/g,'#000'));
                }

                buff.push( k + '="' + unhtml1( attrs[k] ) + '"' );
            }
            return buff.join( ' ' )
        }

        function printData( node, notTrans ) {
            //trace:1399 ����html����ʱ�ո�ת����Ϊ&nbsp;
            //node.data.replace(/&nbsp;/g,' ') ���pre�еĿո�ͳ��ֵ�&nbsp;�������ڵõ���html�����ж�ת����Ϊ�ո�Ϊ����Դ��ģʽ����ʾΪ�ո������&nbsp;
            return notTrans ? node.data.replace(/&nbsp;/g,' ') : unhtml1( node.data ).replace(/ /g,'&nbsp;');
        }

        //���ı�ģʽ�±�ǩת��
        var transHtml = {
            'div':'p',
            'li':'p',
            'tr':'p',
            'br':'br',
            'p':'p'//trace:1398 ����p��ǩ�Լ�Ҫ����p,����transHtml[tag]��undefined

        };

        function printElement( node, pasteplain ) {
            var tag = node.tag;
            if ( pasteplain && tag == 'td' ) {
                if ( !html ) html = '';
                html += printChildren( node, pasteplain ) + '&nbsp;&nbsp;&nbsp;';
            } else {
                var attrs = printAttrs( node.attributes );
                var html = '<' + (pasteplain && transHtml[tag] ? transHtml[tag] : tag) + (attrs ? ' ' + attrs : '') + (EMPTY_TAG[tag] ? ' />' : '>');
                if ( !EMPTY_TAG[tag] ) {
                    //trace:1627
                    //p��ǩ��ie��Ϊ�գ�����ռλ����ռλ���������ã���&nbsp;
                    if(browser.ie && tag == 'p' && !node.children.length){
                        html += '&nbsp;';
                    }
                    html += printChildren( node, pasteplain );
                    html += '</' + (pasteplain && transHtml[tag] ? transHtml[tag] : tag) + '>';
                }
            }

            return html;
        }

        return function ( node, pasteplain ) {
            if ( node.type == 'fragment' ) {
                return printChildren( node, pasteplain );
            } else if ( node.type == 'element' ) {
                return printElement( node, pasteplain );
            } else if ( node.type == 'text' || node.type == 'cdata' ) {
                return printData( node, dtd.$notTransContent[node.parent.tag] );
            } else if ( node.type == 'comment' ) {
                return '<!--' + node.data + '-->';
            }
            return '';
        };
    }();

    //����word
    var transformWordHtml = function () {

        function isWordDocument( strValue ) {
            var re = new RegExp( /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<v:)/ig );
            return re.test( strValue );
        }

        function ensureUnits( v ) {
            v = v.replace( /([\d.]+)([\w]+)?/g, function ( m, p1, p2 ) {
                return (Math.round( parseFloat( p1 ) ) || 1) + (p2 || 'px');
            } );
            return v;
        }

        function filterPasteWord( str ) {
            str = str.replace( /<!--\s*EndFragment\s*-->[\s\S]*$/, '' )
                //remove link break
                .replace( /^(\r\n|\n|\r)|(\r\n|\n|\r)$/ig, "" )
                //remove &nbsp; entities at the start of contents
                .replace( /^\s*(&nbsp;)+/ig, "" )
                //remove &nbsp; entities at the end of contents
                .replace( /(&nbsp;|<br[^>]*>)+\s*$/ig, "" )
                // Word comments like conditional comments etc
                .replace( /<!--[\s\S]*?-->/ig, "" )
                //ת��ͼƬ
                .replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(str){
                    var width = str.match(/width:([ \d.]*p[tx])/i)[1],
                        height = str.match(/height:([ \d.]*p[tx])/i)[1],
                        src =  str.match(/src=\s*"([^"]*)"/i)[1];
                    return '<img width="'+ptToPx(width)+'" height="'+ptToPx(height)+'" src="' + src + '" />'
                })
                //ȥ�����������
                .replace( /v:\w+=["']?[^'"]+["']?/g, '' )
                // Remove comments, scripts (e.g., msoShowComment), XML tag, VML content, MS Office namespaced tags, and a few other tags
                .replace( /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "" )
                //convert word headers to strong
                .replace( /<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>" )
                //remove lang attribute
                .replace( /(lang)\s*=\s*([\'\"]?)[\w-]+\2/ig, "" )
                //��������font����ƥ��&nbsp;�п����ǿո�
                .replace( /<font[^>]*>\s*<\/font>/gi, '' )
                //��������class
                .replace( /class\s*=\s*["']?(?:(?:MsoTableGrid)|(?:MsoNormal(Table)?))\s*["']?/gi, '' );

            // Examine all styles: delete junk, transform some, and keep the rest
            //�޸���ԭ�е�����, ����style='fontsize:"����"'ԭ����ƥ��ʧЧ��
            str = str.replace( /(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function( str, tag, tmp, style ) {

                var n = [],
                        i = 0,
                        s = style.replace( /^\s+|\s+$/, '' ).replace( /&quot;/gi, "'" ).split( /;\s*/g );

                // Examine each style definition within the tag's style attribute
                for ( var i = 0; i < s.length; i++ ) {
                    var v = s[i];
                    var name, value,
                            parts = v.split( ":" );

                    if ( parts.length == 2 ) {
                        name = parts[0].toLowerCase();
                        value = parts[1].toLowerCase();
                        // Translate certain MS Office styles into their CSS equivalents
                        switch ( name ) {
                            case "mso-padding-alt":
                            case "mso-padding-top-alt":
                            case "mso-padding-right-alt":
                            case "mso-padding-bottom-alt":
                            case "mso-padding-left-alt":
                            case "mso-margin-alt":
                            case "mso-margin-top-alt":
                            case "mso-margin-right-alt":
                            case "mso-margin-bottom-alt":
                            case "mso-margin-left-alt":
                            case "mso-table-layout-alt":
                            case "mso-height":
                            case "mso-width":
                            case "mso-vertical-align-alt":
                                //trace:1819 ff�»������padding��table��
                                if(!/<table/.test(tag))
                                    n[i] = name.replace( /^mso-|-alt$/g, "" ) + ":" + ensureUnits( value );
                                continue;
                            case "horiz-align":
                                n[i] = "text-align:" + value;
                                continue;

                            case "vert-align":
                                n[i] = "vertical-align:" + value;
                                continue;

                            case "font-color":
                            case "mso-foreground":
                                n[i] = "color:" + value;
                                continue;

                            case "mso-background":
                            case "mso-highlight":
                                n[i] = "background:" + value;
                                continue;

                            case "mso-default-height":
                                n[i] = "min-height:" + ensureUnits( value );
                                continue;

                            case "mso-default-width":
                                n[i] = "min-width:" + ensureUnits( value );
                                continue;

                            case "mso-padding-between-alt":
                                n[i] = "border-collapse:separate;border-spacing:" + ensureUnits( value );
                                continue;

                            case "text-line-through":
                                if ( (value == "single") || (value == "double") ) {
                                    n[i] = "text-decoration:line-through";
                                }
                                continue;


                            //trace:1870
//                            //word��ߵ�����ͳһ�ɵ�
//                            case 'font-family':
//                                continue;
                            case "mso-zero-height":
                                if ( value == "yes" ) {
                                    n[i] = "display:none";
                                }
                                continue;
                            case 'margin':
                                if ( !/[1-9]/.test( parts[1] ) ) {
                                    continue;
                                }
                        }

                        if ( /^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test( name ) ) {
                            if ( !/mso\-list/.test( name ) )
                                continue;
                        }
                        n[i] = name + ":" + parts[1];        // Lower-case name, but keep value case
                    }
                }
                // If style attribute contained any valid styles the re-write it; otherwise delete style attribute.
                if ( i > 0 ) {
                    return tag + ' style="' + n.join( ';' ) + '"';
                } else {
                    return tag;
                }
            } );
            str = str.replace( /([ ]+)<\/span>/ig, function ( m, p ) {
                return new Array( p.length + 1 ).join( '&nbsp;' ) + '</span>';
            } );
            return str;
        }

        return function ( html ) {

            //����word,����תp->li
            first = null;
            parentTag = '',liStyle = '',firstTag = '';
            if ( isWordDocument( html ) ) {
                html = filterPasteWord( html );
            }
            return html.replace( />[ \t\r\n]*</g, '><' );
        };
    }();
    var NODE_NAME_MAP = {
        'text': '#text',
        'comment': '#comment',
        'cdata': '#cdata-section',
        'fragment': '#document-fragment'
    };

    function _likeLi( node ) {
        var a;
        if ( node && node.tag == 'p' ) {
            //office 2011����Ч
            if ( node.attributes['class'] == 'MsoListParagraph' || /mso-list/.test( node.attributes.style ) ) {
                a = 1;
            } else {
                var firstChild = node.children[0];
                if ( firstChild && firstChild.tag == 'span' && /Wingdings/i.test( firstChild.attributes.style ) ) {
                    a = 1;
                }
            }
        }
        return a;
    }

    //Ϊp==>li ������־
    var first,
            orderStyle = {
                'decimal' : /\d+/,
                'lower-roman': /^m{0,4}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/,
                'upper-roman': /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,
                'lower-alpha' : /^\(?[a-z]+\)?$/,
                'upper-alpha': /^\(?[A-Z]+\)?$/
            },
            unorderStyle = { 'disc' : /^[l\u00B7\u2002]/, 'circle' : /^[\u006F\u00D8]/,'square' : /^[\u006E\u25C6]/},
            parentTag = '',liStyle = '',firstTag;


    //д��༭��ʱ�����ã�����ת������
    function transNode( node, word_img_flag ) {
        //dtd.$removeEmptyBlock[node.tag]
        if ( node.type == 'element' && !node.children.length && (dtd.$removeEmpty[node.tag]) && node.tag != 'a' ) {// ê�㱣��


            return {
                type : 'fragment',
                children:[]
            }
        }
        var sizeMap = [0, 10, 12, 16, 18, 24, 32, 48],
                attr,
                indexOf = utils.indexOf;

        switch ( node.tag ) {
            case 'img':
                //todo base64��ʱȥ���������Զ��ͼƬ�ϴ��󣬸ɵ����
                if(node.attributes.src && /^data:/.test(node.attributes.src)){
                    return {
                        type : 'fragment',
                        children:[]
                    }
                }
                if ( node.attributes.src && /^(?:file)/.test( node.attributes.src ) ) {
                    if ( !/(gif|bmp|png|jpg|jpeg)$/.test( node.attributes.src ) ) {
                        return {
                            type : 'fragment',
                            children:[]
                        }
                    }
                    node.attributes.word_img = node.attributes.src;
                    node.attributes.src = me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif';
                    var flag = parseInt(node.attributes.width)<128||parseInt(node.attributes.height)<43;
                    node.attributes.style="background:url(" + me.options.UEDITOR_HOME_URL +"themes/default/images/"+(flag?"word.gif":"localimage.png")+") no-repeat center center;border:1px solid #ddd";
                    //node.attributes.style = 'width:395px;height:173px;';
                    word_img_flag && (word_img_flag.flag = 1);
                }
                if(browser.ie && browser.version < 7 && me.options.relativePath)
                    node.attributes.orgSrc = node.attributes.src;
                node.attributes.data_ue_src = node.attributes.data_ue_src || node.attributes.src;
                break;
            case 'li':
                var child = node.children[0];

                if ( !child || child.type != 'element' || child.tag != 'p' && dtd.p[child.tag] ) {
                    var tmpPNode = {
                        type: 'element',
                        tag: 'p',
                        attributes: {},

                        parent : node
                    };
                    tmpPNode.children = child ? node.children :[
                            browser.ie ? {
                                type:'text',
                                data:domUtils.fillChar,
                                parent : tmpPNode

                            }:
                            {
                                type : 'element',
                                tag : 'br',
                                attributes:{},
                                closed: true,
                                children: [],
                                parent : tmpPNode
                            }
                    ];
                    node.children =   [tmpPNode];
                }
                break;
            case 'table':
            case 'td':
                optStyle( node );
                break;
            case 'a'://ê�㣬a==>img
                if ( node.attributes['anchorname'] ) {
                    node.tag = 'img';
                    node.attributes = {
                        'class' : 'anchorclass',
                        'anchorname':node.attributes['name']
                    };
                    node.closed = 1;
                }
                node.attributes.href && (node.attributes.data_ue_src = node.attributes.href);
                break;
            case 'b':
                node.tag = node.name = 'strong';
                break;
            case 'i':
                node.tag = node.name = 'em';
                break;
            case 'u':
                node.tag = node.name = 'span';
                node.attributes.style = (node.attributes.style || '') + ';text-decoration:underline;';
                break;
            case 's':
            case 'del':
                node.tag = node.name = 'span';
                node.attributes.style = (node.attributes.style || '') + ';text-decoration:line-through;';
                if ( node.children.length == 1 ) {
                    child = node.children[0];
                    if ( child.tag == node.tag ) {
                        node.attributes.style += ";" + child.attributes.style;
                        node.children = child.children;

                    }
                }
                break;
            case 'span':
                if ( /mso-list/.test( node.attributes.style ) ) {
                    

                    //�ж������ξͲ����ж���
                    if ( firstTag != 'end' ) {

                        var ci = node.children[0],p;
                        while ( ci.type == 'element' ) {
                            ci = ci.children[0];
                        }
                        for ( p in unorderStyle ) {
                            if ( unorderStyle[p].test( ci.data ) ) {
                                
                                // ci.data = ci.data.replace(unorderStyle[p],'');
                                parentTag = 'ul';
                                liStyle = p;
                                break;
                            }
                        }


                        if ( !parentTag ) {
                            for ( p in orderStyle ) {
                                if ( orderStyle[p].test( ci.data.replace( /\.$/, '' ) ) ) {
                                    //   ci.data = ci.data.replace(orderStyle[p],'');
                                    parentTag = 'ol';
                                    liStyle = p;
                                    break;
                                }
                            }
                        }
                        if ( firstTag ) {
                            if ( ci.data == firstTag ) {
                                if ( parentTag != 'ul' ) {
                                    liStyle = '';
                                }
                                parentTag = 'ul'
                            } else {
                                if ( parentTag != 'ol' ) {
                                    liStyle = '';
                                }
                                parentTag = 'ol'
                            }
                            firstTag = 'end'
                        } else {
                            firstTag = ci.data
                        }
                        if ( parentTag ) {
                            var tmpNode = node;
                            while ( tmpNode && tmpNode.tag != 'ul' && tmpNode.tag != 'ol' ) {
                                tmpNode = tmpNode.parent;
                            }
                            if(tmpNode ){
                                  tmpNode.tag = parentTag;
                                tmpNode.attributes.style = 'list-style-type:' + liStyle;
                            }



                        }

                    }

                    node = {
                        type : 'fragment',
                        children : []
                    };
                    break;


                }
                var style = node.attributes.style;
                if ( style ) {
                    //trace:1493
                    //ff3.6��������background: none repeat scroll %0 %0 ��ɫ
                    style = style.match( /(?:\b(?:color|font-size|background(-color)?|font-family|text-decoration)\b\s*:\s*(&[^;]+;|[^;])+(?=;)?)/gi );
                    if ( style ) {
                        node.attributes.style = style.join( ';' );
                        if ( !node.attributes.style ) {
                            delete node.attributes.style;
                        }
                    }
                }

                //���ff3.6span����ʽ������ȷ�̳е��޸�
                
                if(browser.gecko && browser.version <= 10902 && node.parent){
                    var parent = node.parent;
                    if(parent.tag == 'span' && parent.attributes && parent.attributes.style){
                        node.attributes.style = parent.attributes.style + ';' + node.attributes.style;
                    }
                }
                if ( utils.isEmptyObject( node.attributes ) ) {
                    node.type = 'fragment'
                }
                break;
            case 'font':
                node.tag = node.name = 'span';
                attr = node.attributes;
                node.attributes = {
                    'style': (attr.size ? 'font-size:' + (sizeMap[attr.size] || 12) + 'px' : '')
                    + ';' + (attr.color ? 'color:'+ attr.color : '')
                    + ';' + (attr.face ? 'font-family:'+ attr.face : '')
                    + ';' + (attr.style||'')
                };

                while(node.parent.tag == node.tag && node.parent.children.length == 1){
                    node.attributes.style && (node.parent.attributes.style ? (node.parent.attributes.style += ";" + node.attributes.style) : (node.parent.attributes.style = node.attributes.style));
                    node.parent.children = node.children;
                    node = node.parent;

                }
                break;
            case 'p':
                if ( node.attributes.align ) {
                    node.attributes.style = (node.attributes.style || '') + ';text-align:' +
                            node.attributes.align + ';';
                    delete node.attributes.align;
                }

                if ( _likeLi( node ) ) {

                    if ( !first ) {

                        var ulNode = {
                            type: 'element',
                            tag: 'ul',
                            attributes: {},
                            children: []
                        },
                                index = indexOf( node.parent.children, node );
                        node.parent.children[index] = ulNode;
                        ulNode.parent = node.parent;
                        ulNode.children[0] = node;
                        node.parent = ulNode;

                        while ( 1 ) {
                            node = ulNode.parent.children[index + 1];
                            if ( _likeLi( node ) ) {
                                ulNode.children[ulNode.children.length] = node;
                                node.parent = ulNode;
                                ulNode.parent.children.splice( index + 1, 1 );

                            } else {
                                break;
                            }
                        }

                        return ulNode;
                    }
                    node.tag = node.name = 'li';
                    //Ϊchrome���ҵ�������Ĵ���
                    if ( browser.webkit ) {
                        var span = node.children[0];

                        while ( span && span.type == 'element' ) {
                            span = span.children[0]
                        }
                        span && (span.parent.attributes.style = (span.parent.attributes.style || '') + ';mso-list:10');
                    }


                    delete node.attributes['class'];
                    delete node.attributes.style;


                }
        }
        return node;
    }

    function optStyle( node ) {
        if ( ie && node.attributes.style ) {
            var style = node.attributes.style;
            node.attributes.style = style.replace(/;\s*/g,';');
            node.attributes.style = node.attributes.style.replace( /^\s*|\s*$/, '' )
        }
    }

    function transOutNode( node ) {
        switch ( node.tag ) {
            case 'table':
                !node.attributes.style && delete node.attributes.style;
                if ( ie && node.attributes.style ) {

                    optStyle( node );
                }
                break;
            case 'td':
            case 'th':
                if ( /display\s*:\s*none/i.test( node.attributes.style ) ) {
                    return {
                        type: 'fragment',
                        children: []
                    };
                }
                if ( ie && !node.children.length ) {
                    var txtNode = {
                        type: 'text',
                        data:domUtils.fillChar,
                        parent : node
                    };
                    node.children[0] = txtNode;
                }
                if ( ie && node.attributes.style ) {
                    optStyle( node );

                }
                break;
            case 'img'://ê�㣬img==>a
                if ( node.attributes.anchorname ) {
                    node.tag = 'a';
                    node.attributes = {
                        name : node.attributes.anchorname,
                        anchorname : 1
                    };
                    node.closed = null;
                }else{
                    if(node.attributes.data_ue_src){
                        node.attributes.src = node.attributes.data_ue_src;
                        delete node.attributes.data_ue_src;
                    }
                }
                break;

            case 'a':
                if(node.attributes.data_ue_src){
                    node.attributes.href = node.attributes.data_ue_src;
                    delete node.attributes.data_ue_src;
                }
        }

        return node;
    }

    function childrenAccept( node, visit, ctx ) {

        if ( !node.children || !node.children.length ) {
            return node;
        }
        var children = node.children;
        for ( var i = 0; i < children.length; i++ ) {
            var newNode = visit( children[i], ctx );
            if ( newNode.type == 'fragment' ) {
                var args = [i, 1];
                args.push.apply( args, newNode.children );
                children.splice.apply( children, args );
                //�ڵ�Ϊ�յľ͸ɵ�����Ȼ��ߵĲ�ȫ��������Ӷ���Ľڵ�
                if ( !children.length ) {
                    node = {
                        type: 'fragment',
                        children: []
                    }
                }
                i --;
            } else {
                children[i] = newNode;
            }
        }
        return node;
    }

    function Serialize( rules ) {
        this.rules = rules;
    }

    Serialize.prototype = {
        // NOTE: selectorĿǰֻ֧��tagName
        rules: null,
        // NOTE: node������fragment
        filter: function ( node, rules, modify ) {
            rules = rules || this.rules;
            var whiteList = rules && rules.whiteList;
            var blackList = rules && rules.blackList;

            function visitNode( node, parent ) {
                node.name = node.type == 'element' ?
                        node.tag : NODE_NAME_MAP[node.type];
                if ( parent == null ) {
                    return childrenAccept( node, visitNode, node );
                }

                if ( blackList && blackList[node.name] ) {
                    modify && (modify.flag = 1);
                    return {
                        type: 'fragment',
                        children: []
                    };
                }
                if ( whiteList ) {
                    if ( node.type == 'element' ) {
                        if ( parent.type == 'fragment' ? whiteList[node.name] : whiteList[node.name] && whiteList[parent.name][node.name] ) {

                            var props;
                            if ( (props = whiteList[node.name].$) ) {
                                var oldAttrs = node.attributes;
                                var newAttrs = {};
                                for ( var k in props ) {
                                    if ( oldAttrs[k] ) {
                                        newAttrs[k] = oldAttrs[k];
                                    }
                                }
                                node.attributes = newAttrs;
                            }


                        } else {
                            modify && (modify.flag = 1);
                            node.type = 'fragment';
                            // NOTE: ��������һ��hack
                            node.name = parent.name;
                        }
                    } else {
                        // NOTE: �ı�Ĭ������
                    }
                }
                if ( blackList || whiteList ) {
                    childrenAccept( node, visitNode, node );
                }
                return node;
            }

            return visitNode( node, null );
        },
        transformInput: function ( node, word_img_flag ) {

            function visitNode( node ) {
                node = transNode( node, word_img_flag );
                if ( node.tag == 'ol' || node.tag == 'ul' ) {
                    first = 1;
                }
                node = childrenAccept( node, visitNode, node );
                if ( node.tag == 'ol' || node.tag == 'ul' ) {
                    first = 0;
                    parentTag = '',liStyle = '',firstTag = '';
                }
                if ( node.type == 'text' && node.data.replace( /\s/g, '' ) == me.options.pageBreakTag ) {

                    node.type = 'element';
                    node.name = node.tag = 'hr';

                    delete node.data;
                    node.attributes = {
                        'class' : 'pagebreak',
                        noshade:"noshade",
                        size:"5",
                        'unselectable' : 'on',
                        'style' : 'moz-user-select:none;-khtml-user-select: none;'
                    };

                    node.children = [];

                }
                //ȥ������Ŀո�ͻ���
                if(node.type == 'text' && !dtd.$notTransContent[node.parent.tag]){
                    node.data = node.data.replace(/[\r\t\n]*/g,'')//.replace(/[ ]*$/g,'')
                }
                return node;
            }

            return visitNode( node );
        },
        transformOutput: function ( node ) {
            function visitNode( node ) {

                if ( node.tag == 'hr' && node.attributes['class'] == 'pagebreak' ) {
                    delete node.tag;
                    node.type = 'text';
                    node.data = me.options.pageBreakTag;
                    delete node.children;

                }

                node = transOutNode( node );
                if ( node.tag == 'ol' || node.tag == 'ul' ) {
                    first = 1;
                }
                node = childrenAccept( node, visitNode, node );
                if ( node.tag == 'ol' || node.tag == 'ul' ) {
                    first = 0;
                }
                return node;
            }

            return visitNode( node );
        },
        toHTML: toHTML,
        parseHTML: parseHTML,
        word: transformWordHtml
    };
    me.serialize = new Serialize( me.options.serialize );
    UE.serialize = new Serialize( {} );
};

///import core
///import plugins/inserthtml.js
///commands ��Ƶ
///commandsName InsertVideo
///commandsTitle  ������Ƶ
///commandsDialog  dialogs\video\video.html
UE.plugins['video'] = function (){
    var me =this,
        div;

    /**
     * ����������Ƶ�ַ���
     * @param url ��Ƶ��ַ
     * @param width ��Ƶ���
     * @param height ��Ƶ�߶�
     * @param align ��Ƶ����
     * @param toEmbed �Ƿ���ͼƬ������ʾ
     * @param addParagraph  �Ƿ���Ҫ���P ��ǩ
     */
    function creatInsertStr(url,width,height,align,toEmbed,addParagraph){
        return  !toEmbed ?
                (addParagraph? ('<p '+ (align !="none" ? ( align == "center"? ' style="text-align:center;" ':' style="float:"'+ align ) : '') + '>'): '') +
                '<img align="'+align+'" width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-video"' +
                ' src="'+me.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+me.options.UEDITOR_HOME_URL+'themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;" />' +
                (addParagraph?'</p>':'')
                :
                '<embed type="application/x-shockwave-flash" class="edui-faked-video" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '" align="' + align + '"' +
                ( align !="none" ? ' style= "'+ ( align == "center"? "display:block;":" float: "+ align )  + '"' :'' ) +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(img2embed){
        var tmpdiv,
            nodes =domUtils.getElementsByTagName(me.document, !img2embed ? "embed" : "img");
        for(var i=0,node;node = nodes[i++];){
            if(node.className!="edui-faked-video")continue;
            tmpdiv = me.document.createElement("div");
            //�ȿ�float�ڿ�align,�����е���ʱ������float�϶����
            var align = node.style.cssFloat;
            tmpdiv.innerHTML = creatInsertStr(img2embed ? node.getAttribute("_url"):node.getAttribute("src"),node.width,node.height,align || node.getAttribute("align"),img2embed);
            node.parentNode.replaceChild(tmpdiv.firstChild,node);
        }
    }
    me.addListener("beforegetcontent",function(){
        switchImgAndEmbed(true);
    });
    me.addListener('aftersetcontent',function(){
        switchImgAndEmbed(false);
    });
    me.addListener('aftergetcontent',function(cmdName){
        if(cmdName == 'aftergetcontent' && me.queryCommandState('source'))
            return;
        switchImgAndEmbed(false);
    });

    me.commands["insertvideo"] = {
        execCommand: function (cmd, videoObjs){
            videoObjs = utils.isArray(videoObjs)?videoObjs:[videoObjs];
            var html = [];
            for(var i=0,vi,len = videoObjs.length;i<len;i++){
                 vi = videoObjs[i];
                 html.push(creatInsertStr( vi.url, vi.width || 420,  vi.height || 280, vi.align||"none",false,true));
            }
            me.execCommand("inserthtml",html.join(""));
        },
        queryCommandState : function(){
            var img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-video");
            return this.highlight ? -1 :(flag?1:0);
        }
    }
};
///import core
///commands ���
///commandsName  InsertTable,DeleteTable,InsertParagraphBeforeTable,InsertRow,DeleteRow,InsertCol,DeleteCol,MergeCells,MergeRight,MergeDown,SplittoCells,SplittoRows,SplittoCols
///commandsTitle  ���,ɾ�����,���ǰ����,ǰ������,ɾ����,ǰ������,ɾ����,�ϲ������Ԫ��,�Һϲ���Ԫ��,�ºϲ���Ԫ��,��ȫ��ֵ�Ԫ��,��ֳ���,��ֳ���
///commandsDialog  dialogs\table\table.html
/**
 * Created by .
 * User: taoqili
 * Date: 11-5-5
 * Time: ����2:06
 * To change this template use File | Settings | File Templates.
 */
    /**
     * table�������
     */
UE.plugins['table'] = function() {
    var me = this,
        keys = domUtils.keys,
        clearSelectedTd = domUtils.clearSelectedArr;
    //��ѡʱ�õ��ļ���ȫ�ֱ���
    var anchorTd,
        tableOpt,
        _isEmpty = domUtils.isEmptyNode;

    function getIndex(cell) {
        var cells = cell.parentNode.cells;
        for (var i = 0,ci; ci = cells[i]; i++) {
            if (ci === cell) {
                return i;
            }
        }
    }

    function deleteTable(table,range){
        var p = table.ownerDocument.createElement('p');
        domUtils.fillNode(me.document,p);
        var pN = table.parentNode;
        if(pN && pN.getAttribute('dropdrag')){
            table = pN;
        }
        table.parentNode.insertBefore(p, table);
        domUtils.remove(table);
        range.setStart(p, 0).setCursor();
    }
    /**
     * �жϵ�ǰ��Ԫ���Ƿ�������״̬
     * @param cell ���жϵĵ�Ԫ��
     * @return {Boolean} ����ʱ����true�����򷵻�false
     */
    function _isHide(cell) {
        return cell.style.display == "none";
    }

    function getCount(arr) {
        var count = 0;
        for (var i = 0,ti; ti = arr[i++];) {
            if (!_isHide(ti)) {
                count++
            }

        }
        return count;
    }

    me.currentSelectedArr = [];
    me.addListener('mousedown', _mouseDownEvent);
    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            clearSelectedTd(me.currentSelectedArr)
        }
    });
    me.addListener('mouseup', function() {

        anchorTd = null;
        me.removeListener('mouseover', _mouseDownEvent);
        var td = me.currentSelectedArr[0];
        if (td) {
            me.document.body.style.webkitUserSelect = '';
            var range = new dom.Range(me.document);
            if (_isEmpty(td)) {
                range.setStart(me.currentSelectedArr[0], 0).setCursor();
            } else {
                range.selectNodeContents(me.currentSelectedArr[0]).select();
            }

        } else {

            //������ܴ�table���ѡ����ߵ���currentSelectedArrΪ�գ������ǰѡ���ص�ѡ�����ʼ

            var range = me.selection.getRange().shrinkBoundary();

            if (!range.collapsed) {
                var start = domUtils.findParentByTagName(range.startContainer, 'td', true),
                    end = domUtils.findParentByTagName(range.endContainer, 'td', true);
                //��table��ߵĲ������
                if (start && !end || !start && end || start && end && start !== end) {
                    range.collapse(true).select(true)
                }
            }


        }

    });

    function reset() {
        me.currentSelectedArr = [];
        anchorTd = null;

    }

    /**
     * ������
     * @param numRows ����
     * @param numCols ����
     * @param height ����
     * @param width ����
     * @param heightUnit ����
     * @param widthUnit ����
     * @param bgColor ��񱳾�
     * @param border �߿��С
     * @param borderColor �߿���ɫ
     * @param cellSpacing ��Ԫ����
     * @param cellPadding ��Ԫ��߾�
     */
    me.commands['inserttable'] = {
        queryCommandState: function () {
           if(this.highlight ){
                   return -1;
               }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName(range.startContainer, 'table', true)
                || domUtils.findParentByTagName(range.endContainer, 'table', true)
                || me.currentSelectedArr.length > 0 ? -1 : 0;
        },
        execCommand: function (cmdName, opt) {
            opt = opt|| {numRows:5,numCols:5};
            var html = ['<table _innerCreateTable = "true" '];
            if(opt.cellSpacing && opt.cellSpacing != '0' || opt.cellPadding && opt.cellPadding != '0'){
                html.push(' style="border-collapse:separate;" ')
            }
            opt.cellSpacing && opt.cellSpacing != '0' && html.push(' cellSpacing="' + opt.cellSpacing + '" ');
            opt.cellPadding && opt.cellPadding != '0' && html.push(' cellPadding="' + opt.cellPadding + '" ');
            html.push(' width="' + (opt.width||100) + (typeof opt.widthUnit  == "undefined" ? '%' : opt.widthUnit)+'" ');
            opt.height && html.push(' height="' + opt.height + (typeof opt.heightUnit  == "undefined" ? '%' : opt.heightUnit) +'" ');
            opt.align && (html.push(' align="' + opt.align + '" '));
            html.push(' border="' + (opt.border||1) +'" borderColor="' + (opt.borderColor||'#000000') +'"');
            opt.borderType == "1" &&  html.push(' borderType="1" ');
            opt.bgColor && html.push(' bgColor="' + opt.bgColor + '"');
            html.push(' ><tbody>');
            opt.width = Math.floor((opt.width||'100')/opt.numCols);
            for(var i=0;i<opt.numRows;i++){
                html.push('<tr>')
                for(var j=0;j<opt.numCols;j++){
                    html.push('<td '+' style="width:' + opt.width + (typeof opt.widthUnit  == "undefined"?'%':opt.widthUnit) +';'
                        +(opt.borderType == '1'? 'border:'+opt.border+'px solid '+(opt.borderColor||'#000000'):'')
                        +'">'
                        +(browser.ie ? domUtils.fillChar : '<br/>')+'</td>')
                }
                html.push('</tr>')
            }
            me.execCommand('insertHtml', html.join('') + '</tbody></table>');
            reset();
            //�������align����Ĭ�ϣ�����ռλ,����ߵ�blockԪ������clear:both
            if(opt.align){
                var range = me.selection.getRange(),
                    bk = range.createBookmark(),
                    start = range.startContainer;
                while(start && !domUtils.isBody(start)){
                    if(domUtils.isBlockElm(start)){
                        start.style.clear = 'both';
                        range.moveToBookmark(bk).select();
                        break;
                    }
                    start = start.parentNode;
                }
            }

        }
    };
    me.commands['edittable'] = {
        queryCommandState: function () {
            var range = this.selection.getRange();
            if(this.highlight ){return -1;}

            return domUtils.findParentByTagName(range.startContainer, 'table', true)
                || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        execCommand: function (cmdName, opt) {
            var start = me.selection.getStart(),
                table = domUtils.findParentByTagName(start,'table',true);
            if(table){
                table.style.cssText = table.style.cssText.replace(/border[^;]+/gi,'');
                table.style.borderCollapse = opt.cellSpacing && opt.cellSpacing != '0' || opt.cellPadding && opt.cellPadding != '0'  ? 'separate' : 'collapse';

                opt.cellSpacing && opt.cellSpacing != '0' ? table.setAttribute('cellSpacing',opt.cellSpacing) : table.removeAttribute('cellSpacing');
                opt.cellPadding && opt.cellPadding != '0' ? table.setAttribute('cellPadding',opt.cellPadding): table.removeAttribute('cellPadding');
                opt.height && table.setAttribute('height',opt.height+opt.heightUnit);
                opt.align && table.setAttribute('align',opt.align);
                opt.width && table.setAttribute('width',opt.width + opt.widthUnit);
                opt.bgColor &&  table.setAttribute('bgColor',opt.bgColor);
                opt.borderColor &&  table.setAttribute('borderColor',opt.borderColor);
                opt.border &&  table.setAttribute('border',opt.border);

                if(opt.borderType == "1"){
                    for(var i=0,ti,tds = table.getElementsByTagName('td');ti=tds[i++];){
                        ti.style.border = opt.border+'px solid '+(opt.borderColor||'#000000')

                    }
                    table.setAttribute('borderType','1')
                }else{
                    for(var i=0,ti,tds = table.getElementsByTagName('td');ti=tds[i++];){
                        if(browser.ie){
                            ti.style.cssText = ti.style.cssText.replace(/border[^;]+/gi,'');

                        }else{
                            domUtils.removeStyle(ti,'border');
                            domUtils.removeStyle(ti,'border-image')
                        }

                    }
                    table.removeAttribute('borderType')
                }

            }
        }
    };

    me.commands['edittd'] ={
        queryCommandState:function(){
            if(this.highlight ){return -1;}
            var range = this.selection.getRange();
            return (domUtils.findParentByTagName(range.startContainer, 'table', true)
                   && domUtils.findParentByTagName(range.endContainer, 'table', true)) || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        /**
         * ��Ԫ�����Ա༭
         * @param cmdName
         * @param tdItems
         */
        execCommand:function(cmdName,tdItems){
            var range = this.selection.getRange(),
                tds =!me.currentSelectedArr.length?[domUtils.findParentByTagName(range.startContainer, ['td','th'], true)]:me.currentSelectedArr;
            for(var i=0,td;td=tds[i++];){
                domUtils.setAttributes(td,{
                    "bgColor":tdItems.bgColor,
                    "align":tdItems.align,
                    "vAlign":tdItems.vAlign
                });
            }
        }
    };



    /**
     * ɾ�����
     */
    me.commands['deletetable'] = {
        queryCommandState:function() {
           if(this.highlight ){
                   return -1;
               }
            var range = this.selection.getRange();
            return (domUtils.findParentByTagName(range.startContainer, 'table', true)
                && domUtils.findParentByTagName(range.endContainer, 'table', true)) || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        execCommand:function() {
            var range = this.selection.getRange(),
                table = domUtils.findParentByTagName(me.currentSelectedArr.length > 0 ? me.currentSelectedArr[0] : range.startContainer, 'table', true);
            deleteTable(table,range);
            reset();
        }
    };

    /**
     * ��ӱ�����
     */
    me.commands['addcaption'] = {
        queryCommandState:function() {
           if(this.highlight ){
                   return -1;
               }
            var range = this.selection.getRange();
            return (domUtils.findParentByTagName(range.startContainer, 'table', true)
                && domUtils.findParentByTagName(range.endContainer, 'table', true)) || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        execCommand:function(cmdName, opt) {

            var range = this.selection.getRange(),
                table = domUtils.findParentByTagName(me.currentSelectedArr.length > 0 ? me.currentSelectedArr[0] : range.startContainer, 'table', true);

            if (opt == "on") {
                var c = table.createCaption();
                c.innerHTML = "���ڴ����������";
            } else {
                table.removeChild(table.caption);
            }
        }
    };


    /**
     * ���Һϲ���Ԫ��
     */
    me.commands['mergeright'] = {
        queryCommandState : function() {
           if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true);


            if (!td || this.currentSelectedArr.length > 1)return -1;

            var tr = td.parentNode;

            //���ұ��в������Һϲ�
            var rightCellIndex = getIndex(td) + td.colSpan;
            if (rightCellIndex >= tr.cells.length) {
                return -1;
            }
            //��Ԫ����ͬһ�в������Һϲ�
            var rightCell = tr.cells[rightCellIndex];
            if (_isHide(rightCell)) {
                return -1;
            }
            return td.rowSpan == rightCell.rowSpan ? 0 : -1;
        },
        execCommand : function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true) || me.currentSelectedArr[0],
                tr = td.parentNode,
                rows = tr.parentNode.parentNode.rows;

            //�ҵ���ǰ��Ԫ���ұߵ�δ���ص�Ԫ��
            var rightCellRowIndex = tr.rowIndex,
                rightCellCellIndex = getIndex(td) + td.colSpan,
                rightCell = rows[rightCellRowIndex].cells[rightCellCellIndex];

            //�����ص�ԭ��td�����������������ԣ��ֱ��ʾ��ǰtd��Ӧ����ʵtd����
            for (var i = rightCellRowIndex; i < rightCellRowIndex + rightCell.rowSpan; i++) {
                for (var j = rightCellCellIndex; j < rightCellCellIndex + rightCell.colSpan; j++) {
                    var tmpCell = rows[i].cells[j];
                    tmpCell.setAttribute('rootRowIndex', tr.rowIndex);
                    tmpCell.setAttribute('rootCellIndex', getIndex(td));

                }
            }
            //�ϲ���Ԫ��
            td.colSpan += rightCell.colSpan || 1;
            //�ϲ�����
            _moveContent(td, rightCell);
            //ɾ�����ϲ��ĵ�Ԫ�񣬴˴������ط�ʽʵ������������
            rightCell.style.display = "none";
            //�����õ�Ԫ���ȡ����
            //trace:1565
            if(domUtils.isEmptyBlock(td)){
                range.setStart(td,0).setCursor();
            }else{
                range.selectNodeContents(td).setCursor(true,true);
            }

            //�����Ќ��ߣ�����ie�����ֲ�������ռ��
            browser.ie  && domUtils.removeAttributes(td,['width','height']);
        }
    };

    /**
     * ���ºϲ���Ԫ��
     */
    me.commands['mergedown'] = {
        queryCommandState : function() {
          if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, 'td', true);

            if (!td || getCount(me.currentSelectedArr) > 1)return -1;


            var tr = td.parentNode,
                table = tr.parentNode.parentNode,
                rows = table.rows;

            //�Ѿ��������,�������ºϲ�
            var downCellRowIndex = tr.rowIndex + td.rowSpan;
            if (downCellRowIndex >= rows.length) {
                return -1;
            }

            //�����һ����Ԫ�������صģ��������������span�����ģ��������ºϲ�
            var downCell = rows[downCellRowIndex].cells[getIndex(td)];
            if (_isHide(downCell)) {
                return -1;
            }

            //ֻ����span�����ʱ���ܺϲ�
            return td.colSpan == downCell.colSpan ? 0 : -1;
        },
        execCommand : function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true) || me.currentSelectedArr[0];


            var tr = td.parentNode,
                rows = tr.parentNode.parentNode.rows;

            var downCellRowIndex = tr.rowIndex + td.rowSpan,
                downCellCellIndex = getIndex(td),
                downCell = rows[downCellRowIndex].cells[downCellCellIndex];

            //�ҵ���ǰ�е���һ��δ�����صĵ�Ԫ��
            for (var i = downCellRowIndex; i < downCellRowIndex + downCell.rowSpan; i++) {
                for (var j = downCellCellIndex; j < downCellCellIndex + downCell.colSpan; j++) {
                    var tmpCell = rows[i].cells[j];


                    tmpCell.setAttribute('rootRowIndex', tr.rowIndex);
                    tmpCell.setAttribute('rootCellIndex', getIndex(td));
                }
            }
            //�ϲ���Ԫ��
            td.rowSpan += downCell.rowSpan || 1;
            //�ϲ�����
            _moveContent(td, downCell);
            //ɾ�����ϲ��ĵ�Ԫ�񣬴˴������ط�ʽʵ������������
            downCell.style.display = "none";
            //�����õ�Ԫ���ȡ����
            if(domUtils.isEmptyBlock(td)){
                range.setStart(td,0).setCursor();
            }else{
                range.selectNodeContents(td).setCursor(true,true);
            }
              //�����Ќ��ߣ�����ie�����ֲ�������ռ��
            browser.ie  && domUtils.removeAttributes(td,['width','height']);
        }
    };

    /**
     * ɾ����
     */
    me.commands['deleterow'] = {
        queryCommandState : function() {
          if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true);
            if (!td && me.currentSelectedArr.length == 0)return -1;

        },
        execCommand : function() {
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true),
                tr,
                table,
                cells,
                rows ,
                rowIndex ,
                cellIndex;

            if (td && me.currentSelectedArr.length == 0) {
                var count = (td.rowSpan || 1) - 1;

                me.currentSelectedArr.push(td);
                tr = td.parentNode,
                    table = tr.parentNode.parentNode;

                rows = table.rows,
                    rowIndex = tr.rowIndex + 1,
                    cellIndex = getIndex(td);

                while (count) {

                    me.currentSelectedArr.push(rows[rowIndex].cells[cellIndex]);
                    count--;
                    rowIndex++
                }
            }

            while (td = me.currentSelectedArr.pop()) {

                if (!domUtils.findParentByTagName(td, 'table')) {//|| _isHide(td)

                    continue;
                }
                tr = td.parentNode,
                    table = tr.parentNode.parentNode;
                cells = tr.cells,
                    rows = table.rows,
                    rowIndex = tr.rowIndex,
                    cellIndex = getIndex(td);
                /*
                 * ������߿�ʼɨ�貢���ص�ǰ�е����е�Ԫ��
                 * ����ǰ��Ԫ���displayΪnone,�����ҵ������ڵ�������Ԫ�񣬻�ȡcolSpan��rowSpan��
                 *  ��rowspan��һ������ת��cellIndex+colSpan�м�������
                 * ����ǰ��Ԫ���display��Ϊnone,�����������
                 *  1��rowspan == 1 ��ֱ������displayΪnone����ת��cellIndex+colSpan�м�������
                 *  2��rowspan > 1  , �޸ĵ�ǰ��Ԫ�����һ����Ԫ���displayΪ"",
                 *    ������ǰ��Ԫ���rowspan-1������һ����Ԫ���rowspan����ǰ��Ԫ���colspan������һ����Ԫ���colspan��
                 *    Ȼ�����ص�ǰ��Ԫ����ת��cellIndex+colSpan�м�������
                 */
                for (var currentCellIndex = 0; currentCellIndex < cells.length;) {
                    var currentNode = cells[currentCellIndex];
                    if (_isHide(currentNode)) {
                        var topNode = rows[currentNode.getAttribute('rootRowIndex')].cells[currentNode.getAttribute('rootCellIndex')];
                        topNode.rowSpan--;
                        currentCellIndex += topNode.colSpan;
                    } else {
                        if (currentNode.rowSpan == 1) {
                            currentCellIndex += currentNode.colSpan;
                        } else {
                            var downNode = rows[rowIndex + 1].cells[currentCellIndex];
                            downNode.style.display = "";
                            downNode.rowSpan = currentNode.rowSpan - 1;
                            downNode.colSpan = currentNode.colSpan;
                            currentCellIndex += currentNode.colSpan;
                        }
                    }
                }
                //��ɸ��º���ɾ����������tr
                domUtils.remove(tr);

                //���¶�λ����
                var topRowTd, focusTd, downRowTd;

                if (rowIndex == rows.length) { //�����ɾ�����������һ��,����֮����û��-1����Ϊ�Ѿ�ɾ����һ��
                    //���ɾ������Ҳ�ǵ�һ�У���ô����ܹ�ֻ��һ�У�ɾ���������
                    if (rowIndex == 0) {
                        deleteTable(table,range);

                        return;
                    }
                    //�����һ��Ԫ��δ���أ���ֱ�Ӷ�λ������λ���������һ�������ص�Ԫ��
                    var preRowIndex = rowIndex - 1;
                    topRowTd = rows[preRowIndex].cells[ cellIndex];
                    focusTd = _isHide(topRowTd) ? rows[topRowTd.getAttribute('rootRowIndex')].cells[topRowTd.getAttribute('rootCellIndex')] : topRowTd;

                } else { //�����ɾ���Ĳ������һ�У����궨λ����һ��,�˴�δ��1����Ϊ�Ѿ�ɾ����һ��

                    downRowTd = rows[rowIndex].cells[cellIndex];
                    focusTd = _isHide(downRowTd) ? rows[downRowTd.getAttribute('rootRowIndex')].cells[downRowTd.getAttribute('rootCellIndex')] : downRowTd;
                }
            }


            range.setStart(focusTd, 0).setCursor();
            update(table)
        }
    };

    /**
     * ɾ����
     */
    me.commands['deletecol'] = {
        queryCommandState:function() {
           if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true);
            if (!td && me.currentSelectedArr.length == 0)return -1;
        },
        execCommand:function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true);


            if (td && me.currentSelectedArr.length == 0) {

                var count = (td.colSpan || 1) - 1;

                me.currentSelectedArr.push(td);
                while (count) {
                    do{
                        td = td.nextSibling
                    } while (td.nodeType == 3);
                    me.currentSelectedArr.push(td);
                    count--;
                }
            }

            while (td = me.currentSelectedArr.pop()) {
                if (!domUtils.findParentByTagName(td, 'table')) { //|| _isHide(td)
                    continue;
                }

                var tr = td.parentNode,
                    table = tr.parentNode.parentNode,
                    cellIndex = getIndex(td),
                    rows = table.rows,
                    cells = tr.cells,
                    rowIndex = tr.rowIndex;
                /*
                 * �ӵ�һ�п�ʼɨ�貢���ص�ǰ�е����е�Ԫ��
                 * ����ǰ��Ԫ���displayΪnone���������������Span�����ģ�
                 *  ����ߵ�һ����none��Ԫ���colSpan��ȥ1��ɾȥ��Ӧ�ĵ�Ԫ�����ת��rowIndex + rowspan�м�������
                 * ����ǰ��Ԫ���display��Ϊnone�������������
                 *  1����ǰ��Ԫ���colspan == 1 �� ��ֱ��ɾ���ýڵ㣬��ת��rowIndex + rowspan�м�������
                 *  2����ǰ��Ԫ���colsapn >  1, �޸ĵ�ǰ��Ԫ���ұߵ�Ԫ���displayΪ"",
                 *      ������ǰ��Ԫ���colspan-1��������colspan����ǰ��Ԫ���rolspan��������rolspan��
                 *      Ȼ��ɾ����ǰ��Ԫ����ת��rowIndex+rowSpan�м�������
                 */
                var rowSpan;
                for (var currentRowIndex = 0; currentRowIndex < rows.length;) {
                    var currentNode = rows[currentRowIndex].cells[cellIndex];
                    if (_isHide(currentNode)) {
                        var leftNode = rows[currentNode.getAttribute('rootRowIndex')].cells[currentNode.getAttribute('rootCellIndex')];
                        //����ɾ����Ӧ�ĵ�Ԫ��
                        rowSpan = leftNode.rowSpan;
                        for (var i = 0; i < leftNode.rowSpan; i++) {
                            var delNode = rows[currentRowIndex + i].cells[cellIndex];
                            domUtils.remove(delNode);
                        }
                        //������ɾ��ĵ�Ԫ����Ϣ
                        leftNode.colSpan--;
                        currentRowIndex += rowSpan;
                    } else {
                        if (currentNode.colSpan == 1) {
                            rowSpan = currentNode.rowSpan;
                            for (var i = currentRowIndex,l = currentRowIndex + currentNode.rowSpan; i < l; i++) {
                                domUtils.remove(rows[i].cells[cellIndex]);
                            }
                            currentRowIndex += rowSpan;

                        } else {
                            var rightNode = rows[currentRowIndex].cells[cellIndex + 1];
                            rightNode.style.display = "";
                            rightNode.rowSpan = currentNode.rowSpan;
                            rightNode.colSpan = currentNode.colSpan - 1;
                            currentRowIndex += currentNode.rowSpan;
                            domUtils.remove(currentNode);
                        }
                    }
                }

                //���¶�λ����
                var preColTd, focusTd, nextColTd;
                if (cellIndex == cells.length) { //�����ǰ�������һ�У���궨λ����ǰ�е�ǰһ��,ͬ��������û�м�ȥ1����Ϊ�Ѿ���ɾ����һ��
                    //�����ǰ��Ҳ�ǵ�һ�У���ɾ���������
                    if (cellIndex == 0) {
                        deleteTable(table,range);
                        return;
                    }
                    //�ҵ���ǰ��Ԫ��ǰһ���кͱ���Ԫ�������һ��δ���ص�Ԫ��
                    var preCellIndex = cellIndex - 1;
                    preColTd = rows[rowIndex].cells[preCellIndex];
                    focusTd = _isHide(preColTd) ? rows[preColTd.getAttribute('rootRowIndex')].cells[preColTd.getAttribute('rootCellIndex')] : preColTd;

                } else { //�����ǰ�в������һ�У����궨λ����ǰ�еĺ�һ��

                    nextColTd = rows[rowIndex].cells[cellIndex];
                    focusTd = _isHide(nextColTd) ? rows[nextColTd.getAttribute('rootRowIndex')].cells[nextColTd.getAttribute('rootCellIndex')] : nextColTd;
                }
            }

            range.setStart(focusTd, 0).setCursor();
            update(table)
        }
    };

    /**
     * ��ȫ��ֵ�Ԫ��
     */
    me.commands['splittocells'] = {
        queryCommandState:function() {
           if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true);
            return td && ( td.rowSpan > 1 || td.colSpan > 1 ) && (!me.currentSelectedArr.length || getCount(me.currentSelectedArr) == 1) ? 0 : -1;
        },
        execCommand:function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true),
                tr = td.parentNode,
                table = tr.parentNode.parentNode;
            var rowIndex = tr.rowIndex,
                cellIndex = getIndex(td),
                rowSpan = td.rowSpan,
                colSpan = td.colSpan;


            for (var i = 0; i < rowSpan; i++) {
                for (var j = 0; j < colSpan; j++) {
                    var cell = table.rows[rowIndex + i].cells[cellIndex + j];
                    cell.rowSpan = 1;
                    cell.colSpan = 1;

                    if (_isHide(cell)) {
                        cell.style.display = "";
                        cell.innerHTML = browser.ie ? '' : "<br/>";
                    }
                }
            }
        }
    };


    /**
     * ����Ԫ���ֳ���
     */
    me.commands['splittorows'] = {
        queryCommandState:function() {
         if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, 'td', true) || me.currentSelectedArr[0];
            return td && ( td.rowSpan > 1) && (!me.currentSelectedArr.length || getCount(me.currentSelectedArr) == 1) ? 0 : -1;
        },
        execCommand:function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, 'td', true) || me.currentSelectedArr[0],
                tr = td.parentNode,
                rows = tr.parentNode.parentNode.rows;

            var rowIndex = tr.rowIndex,
                cellIndex = getIndex(td),
                rowSpan = td.rowSpan,
                colSpan = td.colSpan;

            for (var i = 0; i < rowSpan; i++) {
                var cells = rows[rowIndex + i],
                    cell = cells.cells[cellIndex];
                cell.rowSpan = 1;
                cell.colSpan = colSpan;
                if (_isHide(cell)) {
                    cell.style.display = "";
                    //ԭ�е�����Ҫ�����
                    cell.innerHTML = browser.ie ? '' : '<br/>'
                }
                //���������ص�Ԫ���д洢��rootRowIndex��rootCellIndex��Ϣ
                for (var j = cellIndex + 1; j < cellIndex + colSpan; j++) {
                    cell = cells.cells[j];

                    cell.setAttribute('rootRowIndex', rowIndex + i)
                }

            }
            clearSelectedTd(me.currentSelectedArr);
            this.selection.getRange().setStart(td, 0).setCursor();
        }
    };


    /**
     * �ڱ��ǰ������
     */
    me.commands['insertparagraphbeforetable'] = {
        queryCommandState:function() {
          if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, 'td', true) || me.currentSelectedArr[0];
            return  td && domUtils.findParentByTagName(td, 'table') ? 0 : -1;
        },
        execCommand:function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                table = domUtils.findParentByTagName(start, 'table', true);

            start = me.document.createElement(me.options.enterTag);
            table.parentNode.insertBefore(start, table);
            clearSelectedTd(me.currentSelectedArr);
            if (start.tagName == 'P') {
                //trace:868
                start.innerHTML = browser.ie ? '' : '<br/>';
                range.setStart(start, 0)
            } else {
                range.setStartBefore(start)
            }
            range.setCursor();

        }
    };

    /**
     * ����Ԫ���ֳ���
     */
    me.commands['splittocols'] = {
        queryCommandState:function() {
         if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true) || me.currentSelectedArr[0];
            return td && ( td.colSpan > 1) && (!me.currentSelectedArr.length || getCount(me.currentSelectedArr) == 1) ? 0 : -1;
        },
        execCommand:function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true) || me.currentSelectedArr[0],
                tr = td.parentNode,
                rows = tr.parentNode.parentNode.rows;

            var rowIndex = tr.rowIndex,
                cellIndex = getIndex(td),
                rowSpan = td.rowSpan,
                colSpan = td.colSpan;

            for (var i = 0; i < colSpan; i++) {
                var cell = rows[rowIndex].cells[cellIndex + i];
                cell.rowSpan = rowSpan;
                cell.colSpan = 1;
                if (_isHide(cell)) {
                    cell.style.display = "";
                    cell.innerHTML = browser.ie ? '' : '<br/>'
                }

                for (var j = rowIndex + 1; j < rowIndex + rowSpan; j++) {
                    var tmpCell = rows[j].cells[cellIndex + i];
                    tmpCell.setAttribute('rootCellIndex', cellIndex + i);
                }
            }
            clearSelectedTd(me.currentSelectedArr);
            this.selection.getRange().setStart(td, 0).setCursor();
        }
    };


    /**
     * ������
     */
    me.commands['insertrow'] = {
        queryCommandState:function() {
          if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName(range.startContainer, 'table', true)
                || domUtils.findParentByTagName(range.endContainer, 'table', true) || me.currentSelectedArr.length != 0 ? 0 : -1;
        },
        execCommand:function() {
            var range = this.selection.getRange(),
                start = range.startContainer,
                tr = domUtils.findParentByTagName(start, 'tr', true) || me.currentSelectedArr[0].parentNode,
                table = tr.parentNode.parentNode,
                rows = table.rows;

            //��¼����λ��ԭ�����еĵ�Ԫ��
            var rowIndex = tr.rowIndex,
                cells = rows[rowIndex].cells;

            //�����µ�һ��
            var newRow = table.insertRow(rowIndex);

            var newCell;
            //��������д�����λ���е����е�Ԫ�񣬼����״̬�����ݴ������²����еĵ�Ԫ��״̬
            for (var cellIndex = 0; cellIndex < cells.length;) {

                var tmpCell = cells[cellIndex];

                if (_isHide(tmpCell)) { //�����ǰ��Ԫ�������صģ�������ǰ��Ԫ�������ϲ�span�������ҵ����ϲ���Ԫ��

                    //�ҵ������ص�Ԫ�����������ĵ�Ԫ��
                    var topCell = rows[tmpCell.getAttribute('rootRowIndex')].cells[tmpCell.getAttribute('rootCellIndex')];
                    //����һ�У����������²���ĵ�Ԫ����������
                    topCell.rowSpan++;
                    for (var i = 0; i < topCell.colSpan; i++) {
                        newCell = tmpCell.cloneNode(false);
                        domUtils.removeAttributes(newCell,["bgColor","valign","align"]);
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';

                        if (newRow.children[cellIndex + i]) {
                            newRow.insertBefore(newCell, newRow.children[cellIndex + i]);
                        } else {
                            newRow.appendChild(newCell)
                        }

                        newCell.style.display = "none";
                    }
                    cellIndex += topCell.colSpan;

                } else {//����ǰ��Ԫ��δ���أ����������в���colspan����Ԫ��

                    for (var j = 0; j < tmpCell.colSpan; j++) {
                        newCell = tmpCell.cloneNode(false);
                        domUtils.removeAttributes(newCell,["bgColor","valign","align"]);
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        if (newRow.children[cellIndex + j]) {
                            newRow.insertBefore(newCell, newRow.children[cellIndex + j]);
                        } else {
                            newRow.appendChild(newCell)
                        }
                    }
                    cellIndex += tmpCell.colSpan;
                }
            }
            update(table);
            range.setStart(newRow.cells[0], 0).setCursor();

            clearSelectedTd(me.currentSelectedArr);
        }
    };

    /**
     * ������
     */
    me.commands['insertcol'] = {
        queryCommandState:function() {
          if(this.highlight  ){
                   return -1;
               }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName(range.startContainer, 'table', true)
                || domUtils.findParentByTagName(range.endContainer, 'table', true) || me.currentSelectedArr.length != 0 ? 0 : -1;
        },
        execCommand:function() {

            var range = this.selection.getRange(),
                start = range.startContainer,
                td = domUtils.findParentByTagName(start, ['td','th'], true) || me.currentSelectedArr[0],
                table = domUtils.findParentByTagName(td, 'table'),
                rows = table.rows;

            var cellIndex = getIndex(td),
                newCell;

            //������ǰ���е����е�Ԫ�񣬼����״̬�����ݴ������²����еĵ�Ԫ��״̬
            for (var rowIndex = 0; rowIndex < rows.length;) {

                var tmpCell = rows[rowIndex].cells[cellIndex],tr;

                if (_isHide(tmpCell)) {//�����ǰ��Ԫ�������صģ�������ǰ��Ԫ���������span�������ҵ�����ߵ�Ԫ��

                    var leftCell = rows[tmpCell.getAttribute('rootRowIndex')].cells[tmpCell.getAttribute('rootCellIndex')];
                    leftCell.colSpan++;
                    for (var i = 0; i < leftCell.rowSpan; i++) {
                        newCell = td.cloneNode(false);
                        domUtils.removeAttributes(newCell,["bgColor","valign","align"]);
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        tr = rows[rowIndex + i];
                        if (tr.children[cellIndex]) {
                            tr.insertBefore(newCell, tr.children[cellIndex]);
                        } else {
                            tr.appendChild(newCell)
                        }

                        newCell.style.display = "none";
                    }
                    rowIndex += leftCell.rowSpan;

                } else { //����ǰ��Ԫ��δ���أ���������߲���rowspan����Ԫ��

                    for (var j = 0; j < tmpCell.rowSpan; j++) {
                        newCell = td.cloneNode(false);
                        domUtils.removeAttributes(newCell,["bgColor","valign","align"]);
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        tr = rows[rowIndex + j];
                        if (tr.children[cellIndex]) {
                            tr.insertBefore(newCell, tr.children[cellIndex]);
                        } else {
                            tr.appendChild(newCell)
                        }

                        newCell.innerHTML = browser.ie ? '' : "<br/>";

                    }
                    rowIndex += tmpCell.rowSpan;
                }
            }
            update(table);
            range.setStart(rows[0].cells[cellIndex], 0).setCursor();
            clearSelectedTd(me.currentSelectedArr);

        }
    };

    /**
     * �ϲ������Ԫ��ͨ������cell����ǰ���������к��ݵ�Ԫ����кϲ�
     */
    me.commands['mergecells'] = {
        queryCommandState:function() {
           if(this.highlight  ){
                   return -1;
               }
            var count = 0;
            for (var i = 0,ti; ti = this.currentSelectedArr[i++];) {
                if (!_isHide(ti))
                    count++;
            }
            return count > 1 ? 0 : -1;
        },
        execCommand:function() {

            var start = me.currentSelectedArr[0],
                end = me.currentSelectedArr[me.currentSelectedArr.length - 1],
                table = domUtils.findParentByTagName(start, 'table'),
                rows = table.rows,
                cellsRange = {
                    beginRowIndex:start.parentNode.rowIndex,
                    beginCellIndex:getIndex(start),
                    endRowIndex:end.parentNode.rowIndex,
                    endCellIndex:getIndex(end)
                },

                beginRowIndex = cellsRange.beginRowIndex,
                beginCellIndex = cellsRange.beginCellIndex,
                rowsLength = cellsRange.endRowIndex - cellsRange.beginRowIndex + 1,
                cellLength = cellsRange.endCellIndex - cellsRange.beginCellIndex + 1,

                tmp = rows[beginRowIndex].cells[beginCellIndex];

            for (var i = 0, ri; (ri = rows[beginRowIndex + i++]) && i <= rowsLength;) {
                for (var j = 0, ci; (ci = ri.cells[beginCellIndex + j++]) && j <= cellLength;) {
                    if (i == 1 && j == 1) {
                        ci.style.display = "";
                        ci.rowSpan = rowsLength;
                        ci.colSpan = cellLength;
                    } else {
                        ci.style.display = "none";
                        ci.rowSpan = 1;
                        ci.colSpan = 1;
                        ci.setAttribute('rootRowIndex', beginRowIndex);
                        ci.setAttribute('rootCellIndex', beginCellIndex);

                        //��������
                        _moveContent(tmp, ci);
                    }
                }
            }
            this.selection.getRange().setStart(tmp, 0).setCursor();
              //�����Ќ��ߣ�����ie�����ֲ�������ռ��
            browser.ie  && domUtils.removeAttributes(tmp,['width','height']);
            clearSelectedTd(me.currentSelectedArr);
        }
    };

    /**
     * ��cellFrom��Ԫ���е������ƶ���cellTo��
     * @param cellTo  Ŀ�굥Ԫ��
     * @param cellFrom  Դ��Ԫ��
     */
    function _moveContent(cellTo, cellFrom) {
        if (_isEmpty(cellFrom)) return;

        if (_isEmpty(cellTo)) {
            cellTo.innerHTML = cellFrom.innerHTML;
            return;
        }
        var child = cellTo.lastChild;
        if (child.nodeType != 1 || child.tagName != 'BR') {
            cellTo.appendChild(cellTo.ownerDocument.createElement('br'))
        }

        //�����ƶ�����
        while (child = cellFrom.firstChild) {
            cellTo.appendChild(child);
        }
    }


    /**
     * ����������Ԫ������ȡ�м���������е�Ԫ�񼯺�ѡ��
     * @param cellA
     * @param cellB
     * @return {Object} ѡ�������Ϻ���������
     */
    function _getCellsRange(cellA, cellB) {

        var trA = cellA.parentNode,
            trB = cellB.parentNode,
            aRowIndex = trA.rowIndex,
            bRowIndex = trB.rowIndex,
            rows = trA.parentNode.parentNode.rows,
            rowsNum = rows.length,
            cellsNum = rows[0].cells.length,
            cellAIndex = getIndex(cellA),
            cellBIndex = getIndex(cellB);

        if (cellA == cellB) {
            return {
                beginRowIndex: aRowIndex,
                beginCellIndex: cellAIndex,
                endRowIndex: aRowIndex + cellA.rowSpan - 1,
                endCellIndex: cellBIndex + cellA.colSpan - 1
            }
        }

        var
            beginRowIndex = Math.min(aRowIndex, bRowIndex),
            beginCellIndex = Math.min(cellAIndex, cellBIndex),
            endRowIndex = Math.max(aRowIndex + cellA.rowSpan - 1, bRowIndex + cellB.rowSpan - 1),
            endCellIndex = Math.max(cellAIndex + cellA.colSpan - 1, cellBIndex + cellB.colSpan - 1);

        while (1) {

            var tmpBeginRowIndex = beginRowIndex,
                tmpBeginCellIndex = beginCellIndex,
                tmpEndRowIndex = endRowIndex,
                tmpEndCellIndex = endCellIndex;
            // ����Ƿ��г���TableRange�ϱ߽�����
            if (beginRowIndex > 0) {
                for (cellIndex = beginCellIndex; cellIndex <= endCellIndex;) {
                    var currentTopTd = rows[beginRowIndex].cells[cellIndex];
                    if (_isHide(currentTopTd)) {

                        //overflowRowIndex = beginRowIndex == currentTopTd.rootRowIndex ? 1:0;
                        beginRowIndex = currentTopTd.getAttribute('rootRowIndex');
                        currentTopTd = rows[currentTopTd.getAttribute('rootRowIndex')].cells[currentTopTd.getAttribute('rootCellIndex')];
                    }

                    cellIndex = getIndex(currentTopTd) + (currentTopTd.colSpan || 1);
                }
            }

            //����Ƿ��г�����߽�����
            if (beginCellIndex > 0) {
                for (var rowIndex = beginRowIndex; rowIndex <= endRowIndex;) {
                    var currentLeftTd = rows[rowIndex].cells[beginCellIndex];
                    if (_isHide(currentLeftTd)) {
                        // overflowCellIndex = beginCellIndex== currentLeftTd.rootCellIndex ? 1:0;
                        beginCellIndex = currentLeftTd.getAttribute('rootCellIndex');
                        currentLeftTd = rows[currentLeftTd.getAttribute('rootRowIndex')].cells[currentLeftTd.getAttribute('rootCellIndex')];
                    }
                    rowIndex = currentLeftTd.parentNode.rowIndex + (currentLeftTd.rowSpan || 1);
                }
            }

            // ����Ƿ��г���TableRange�±߽�����
            if (endRowIndex < rowsNum) {
                for (var cellIndex = beginCellIndex; cellIndex <= endCellIndex;) {
                    var currentDownTd = rows[endRowIndex].cells[cellIndex];
                    if (_isHide(currentDownTd)) {
                        currentDownTd = rows[currentDownTd.getAttribute('rootRowIndex')].cells[currentDownTd.getAttribute('rootCellIndex')];
                    }
                    endRowIndex = currentDownTd.parentNode.rowIndex + currentDownTd.rowSpan - 1;
                    cellIndex = getIndex(currentDownTd) + (currentDownTd.colSpan || 1);
                }
            }

            //����Ƿ��г����ұ߽�����
            if (endCellIndex < cellsNum) {
                for (rowIndex = beginRowIndex; rowIndex <= endRowIndex;) {
                    var currentRightTd = rows[rowIndex].cells[endCellIndex];
                    if (_isHide(currentRightTd)) {
                        currentRightTd = rows[currentRightTd.getAttribute('rootRowIndex')].cells[currentRightTd.getAttribute('rootCellIndex')];
                    }
                    endCellIndex = getIndex(currentRightTd) + currentRightTd.colSpan - 1;
                    rowIndex = currentRightTd.parentNode.rowIndex + (currentRightTd.rowSpan || 1);
                }
            }

            if (tmpBeginCellIndex == beginCellIndex && tmpEndCellIndex == endCellIndex && tmpEndRowIndex == endRowIndex && tmpBeginRowIndex == beginRowIndex) {
                break;
            }
        }

        //����ѡ������ʼ�ͽ�������
        return {
            beginRowIndex:  beginRowIndex,
            beginCellIndex: beginCellIndex,
            endRowIndex:    endRowIndex,
            endCellIndex:   endCellIndex
        }
    }


    /**
     * ��갴���¼�
     * @param type
     * @param evt
     */
    function _mouseDownEvent(type, evt) {
        anchorTd = evt.target || evt.srcElement;

        if(me.queryCommandState('highlightcode')||domUtils.findParent(anchorTd,function(node){
            return node.tagName == "DIV"&&/highlighter/.test(node.id);
        })){

            return;
        }

        if (evt.button == 2)return;
        me.document.body.style.webkitUserSelect = '';


        clearSelectedTd(me.currentSelectedArr);
        domUtils.clearSelectedArr(me.currentSelectedArr);
        //��td��ߵ����anchorTd����td
        if (anchorTd.tagName !== 'TD') {
            anchorTd = domUtils.findParentByTagName(anchorTd, 'td') || anchorTd;
        }

        if (anchorTd.tagName == 'TD') {


            me.addListener('mouseover', function(type, evt) {
                var tmpTd = evt.target || evt.srcElement;
                _mouseOverEvent.call(me, tmpTd);
                evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
            });

        } else {


            reset();
        }

    }

    /**
     * ����ƶ��¼�
     * @param tmpTd
     */
    function _mouseOverEvent(tmpTd) {

        if (anchorTd && tmpTd.tagName == "TD") {

            me.document.body.style.webkitUserSelect = 'none';
            var table = tmpTd.parentNode.parentNode.parentNode;
            me.selection.getNative()[browser.ie ? 'empty' : 'removeAllRanges']();
            var range = _getCellsRange(anchorTd, tmpTd);
            _toggleSelect(table, range);


        }
    }

    /**
     * �л�ѡ��״̬
     * @param table
     * @param cellsRange
     */
    function _toggleSelect(table, cellsRange) {
        var rows = table.rows;
        clearSelectedTd(me.currentSelectedArr);
        for (var i = cellsRange.beginRowIndex; i <= cellsRange.endRowIndex; i++) {
            for (var j = cellsRange.beginCellIndex; j <= cellsRange.endCellIndex; j++) {
                var td = rows[i].cells[j];
                td.className = me.options.selectedTdClass;
                me.currentSelectedArr.push(td);
            }
        }
    }

    //����rootRowIndxe,rootCellIndex
    function update(table) {
        var tds = table.getElementsByTagName('td'),
            rowIndex,cellIndex,rows = table.rows;
        for (var j = 0,tj; tj = tds[j++];) {
            if (!_isHide(tj)) {
                rowIndex = tj.parentNode.rowIndex;
                cellIndex = getIndex(tj);
                for (var r = 0; r < tj.rowSpan; r++) {
                    var c = r == 0 ? 1 : 0;
                    for (; c < tj.colSpan; c++) {
                        var tmp = rows[rowIndex + r].children[cellIndex + c];


                        tmp.setAttribute('rootRowIndex', rowIndex);
                        tmp.setAttribute('rootCellIndex', cellIndex);

                    }
                }
            }
            if(!_isHide(tj)){
                domUtils.removeAttributes(tj,['rootRowIndex','rootCellIndex']);
            }
            if(tj.colSpan && tj.colSpan == 1){
                tj.removeAttribute('colSpan')
            }
            if(tj.rowSpan && tj.rowSpan == 1){
                tj.removeAttribute('rowSpan')
            }
            var width;
            if(!_isHide(tj) && (width = tj.style.width) && /%/.test(width)){
                tj.style.width = Math.floor(100/tj.parentNode.cells.length) + '%'
            }
        }
    }

    me.adjustTable = function(cont) {
        var table = cont.getElementsByTagName('table');
        for (var i = 0,ti; ti = table[i++];) {
            //�������align����Ĭ�ϣ�����ռλ,����ߵ�blockԪ������clear:both
            if (ti.getAttribute('align')) {
                var next = ti.nextSibling;
                while(next){
                    if(domUtils.isBlockElm(next)){
                        break;
                    }
                    next = next.nextSibling;
                }
                if(next){
                next.style.clear = 'both';
                }
            }

            ti.removeAttribute('_innerCreateTable')
            var tds = domUtils.getElementsByTagName(ti, 'td'),
                td,tmpTd;

            for (var j = 0,tj; tj = tds[j++];) {
                if (domUtils.isEmptyNode(tj)) {
                    tj.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                }
                var index = getIndex(tj),
                    rowIndex = tj.parentNode.rowIndex,
                    rows = domUtils.findParentByTagName(tj, 'table').rows;

                for (var r = 0; r < tj.rowSpan; r++) {
                    var c = r == 0 ? 1 : 0;
                    for (; c < tj.colSpan; c++) {

                        if (!td) {
                            td = tj.cloneNode(false);

                            td.rowSpan = td.colSpan = 1;
                            td.style.display = 'none';
                            td.innerHTML = browser.ie ? '' : '<br/>';


                        } else {
                            td = td.cloneNode(true)
                        }

                        td.setAttribute('rootRowIndex', tj.parentNode.rowIndex);
                        td.setAttribute('rootCellIndex', index);
                        if (r == 0) {
                            if (tj.nextSibling) {
                                tj.parentNode.insertBefore(td, tj.nextSibling);
                            } else {
                                tj.parentNode.appendChild(td)
                            }
                        } else {
                            tmpTd = rows[rowIndex + r].children[index];
                            if (tmpTd) {
                                tmpTd.parentNode.insertBefore(td, tmpTd)
                            } else {
                                //trace:1032
                                rows[rowIndex + r].appendChild(td)
                            }
                        }


                    }
                }


            }

        }
        me.fireEvent("afteradjusttable",cont);
    };

//    me.addListener('beforegetcontent',function(){
//        for(var i=0,ti,ts=me.document.getElementsByTagName('table');ti=ts[i++];){
//            var pN = ti.parentNode;
//            if(pN && pN.getAttribute('dropdrag')){
//                domUtils.remove(pN,true)
//            }
//        }
//    });
//
//    me.addListener('aftergetcontent',function(){
//        if(!me.queryCommandState('source'))
//            me.fireEvent('afteradjusttable',me.document)
//    });
//    //table��ק
//    me.addListener("afteradjusttable",function(type,cont){
//        var table = cont.getElementsByTagName("table"),
//            dragCont = me.document.createElement("div");
//        domUtils.setAttributes(dragCont,{
//            style:'margin:0;padding:5px;border:0;',
//            dropdrag:true
//        });
//        for (var i = 0,ti; ti = table[i++];) {
//            if(ti.parentNode && ti.parentNode.nodeType == 1){
//
//
//                (function(ti){
//                    var div = dragCont.cloneNode(false);
//                    ti.parentNode.insertBefore(div,ti);
//                    div.appendChild(ti);
//                    var borderStyle;
//                    domUtils.on(div,'mousemove',function(evt){
//                        var tag = evt.srcElement || evt.target;
//                        if(tag.tagName.toLowerCase()=="div"){
//                            if(ie && me.body.getAttribute("contentEditable") == 'true')
//                                me.body.setAttribute("contentEditable","false");
//                            borderStyle = clickPosition(ti,this,evt)
//
//                        }
//                    });
//                    if(ie){
//                        domUtils.on(div,'mouseleave',function(evt){
//
//                            if(evt.srcElement.tagName.toLowerCase()=="div" && ie && me.body.getAttribute("contentEditable") == 'false'){
//
//                                me.body.setAttribute("contentEditable","true");
//                            }
//
//
//                        });
//                    }
//
//                    domUtils.on(div,"mousedown",function(evt){
//                        var tag = evt.srcElement || evt.target;
//
//                        if(tag.tagName.toLowerCase()=="div"){
//                            if(ie && me.body.getAttribute("contentEditable") == 'true')
//                                        me.body.setAttribute("contentEditable","false");
//                            var tWidth = ti.offsetWidth,
//                                tHeight = ti.offsetHeight,
//                                align = ti.getAttribute('align');
//
//
//                              try{
//                                  baidu.editor.ui.uiUtils.startDrag(evt, {
//                                      ondragstart:function(){},
//                                      ondragmove: function (x, y){
//
//                                          if(align && align!="left" && /\w?w-/.test(borderStyle)){
//                                              x = -x;
//                                          }
//                                          if(/^s?[we]/.test(borderStyle)){
//                                              ti.setAttribute("width",(tWidth+x)>0?tWidth+x: 0);
//                                          }
//                                          if(/^s/.test(borderStyle)){
//                                              ti.setAttribute("height",(tHeight+y)>0?tHeight+y:0);
//                                          }
//                                      },
//                                      ondragstop: function (){}
//                                  },me.document);
//                              }catch(e){
//                                  alert("��û������uiUtils���޷��϶�table");
//                              }
//
//                        }
//                    });
//
//                    domUtils.on(ti,"mouseover",function(){
//                        var div = ti.parentNode;
//                        if(div && div.parentNode && div.getAttribute('dropdrag')){
//                            domUtils.setStyle(div,"cursor","text");
//                            if(ie && me.body.getAttribute("contentEditable") == 'false')
//                               me.body.setAttribute("contentEditable","true");
//                        }
//
//
//                    });
//                })(ti);
//
//            }
//        }
//    });
//    function clickPosition(table,div,evt){
//        var pos = domUtils.getXY(table),
//            tWidth = table.offsetWidth,
//            tHeight = table.offsetHeight,
//            evtPos = {
//                top : evt.clientY,
//                left : evt.clientX
//            },
//            borderStyle = "";
//
//        if(Math.abs(pos.x-evtPos.left)<15){
//
//            //������
//            borderStyle = Math.abs(evtPos.top-pos.y-tHeight)<15 ? "sw-resize" : "w-resize";
//        }else if(Math.abs(evtPos.left-pos.x-tWidth)<15){
//            //�ң�����
//            borderStyle = Math.abs(evtPos.top-pos.y-tHeight)<15 ? "se-resize" : "e-resize";
//        }else if(Math.abs(evtPos.top-pos.y-tHeight)<15 && Math.abs(evtPos.left-pos.x)<tWidth){
//            //��
//            borderStyle = "s-resize";
//        }
//        domUtils.setStyle(div,"cursor",borderStyle||'text');
//        return borderStyle;
//    }
};

///import core
///commands �Ҽ��˵�
///commandsName  ContextMenu
///commandsTitle  �Ҽ��˵�
/**
 * �Ҽ��˵�
 * @function
 * @name baidu.editor.plugins.contextmenu
 * @author zhanyi
 */
UE.plugins['contextmenu'] = function () {
    var me = this,
        menu,
        items = me.options.contextMenu;
    if(!items || items.length==0) return;
    var uiUtils = UE.ui.uiUtils;
    me.addListener('contextmenu',function(type,evt){
        var offset = uiUtils.getViewportOffsetByEvent(evt);
        me.fireEvent('beforeselectionchange');
        if (menu)
            menu.destroy();
        for (var i = 0,ti,contextItems = []; ti = items[i]; i++) {
            var last;
            (function(item) {
                if (item == '-') {
                    if ((last = contextItems[contextItems.length - 1 ] ) && last !== '-')
                        contextItems.push('-');
                } else if (item.group) {

                        for (var j = 0,cj,subMenu = []; cj = item.subMenu[j]; j++) {
                            (function(subItem) {
                                if (subItem == '-') {
                                    if ((last = subMenu[subMenu.length - 1 ] ) && last !== '-')
                                        subMenu.push('-');

                                } else {
                                    if (me.queryCommandState(subItem.cmdName) != -1) {
                                        subMenu.push({
                                            'label':subItem.label,
                                            className: 'edui-for-' + subItem.cmdName + (subItem.value || ''),
                                            onclick : subItem.exec ? function() {
                                                subItem.exec.call(me)
                                            } : function() {
                                                me.execCommand(subItem.cmdName, subItem.value)
                                            }
                                        })
                                    }

                                }

                            })(cj)

                        }
                        if (subMenu.length) {
                            contextItems.push({
                                'label' : item.group,
                                className: 'edui-for-' + item.icon,
                                'subMenu' : {
                                    items: subMenu,
                                    editor:me
                                }
                            })
                        }

                } else {
                    if (me.queryCommandState(item.cmdName) != -1) {
                        //highlight todo
                        if(item.cmdName == 'highlightcode' && me.queryCommandState(item.cmdName) == 0)
                            return;
                        contextItems.push({
                            'label':item.label,
                            className: 'edui-for-' + (item.icon ? item.icon : item.cmdName + (item.value || '')),
                            onclick : item.exec ? function() {
                                item.exec.call(me)
                            } : function() {
                                me.execCommand(item.cmdName, item.value)
                            }
                        })
                    }

                }

            })(ti)
        }
        if (contextItems[contextItems.length - 1] == '-')
            contextItems.pop();
        menu = new UE.ui.Menu({
            items: contextItems,
            editor:me
        });
        menu.render();
        menu.showAt(offset);
        domUtils.preventDefault(evt);
        if(browser.ie){
            var ieRange;
            try{
                ieRange = me.selection.getNative().createRange();
            }catch(e){
               return;
            }
            if(ieRange.item){
                var range = new dom.Range(me.document);
                range.selectNode(ieRange.item(0)).select(true,true);

            }
        }
    })
};



///import core
///commands �Ӵ�,б��,�ϱ�,�±�
///commandsName  Bold,Italic,Subscript,Superscript
///commandsTitle  �Ӵ�,��б,�±�,�ϱ�
/**
 * b u i�Ȼ�������ʵ��
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName    bold�Ӵ֡�italicб�塣subscript�ϱꡣsuperscript�±ꡣ
*/
UE.plugins['basestyle'] = function(){
    var basestyles = {
            'bold':['strong','b'],
            'italic':['em','i'],
            'subscript':['sub'],
            'superscript':['sup']
        },
        getObj = function(editor,tagNames){
           //var start = editor.selection.getStart();
            var path = editor.selection.getStartElementPath();
//            return  domUtils.findParentByTagName( start, tagNames, true )
            return utils.findNode(path,tagNames);
        },
        me = this;
    for ( var style in basestyles ) {
        (function( cmd, tagNames ) {
            me.commands[cmd] = {
                execCommand : function( cmdName ) {

                    var range = new dom.Range(me.document),obj = '';
                    //table�Ĵ���
                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                        for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                            if(ci.style.display != 'none'){
                                range.selectNodeContents(ci).select();
                                //trace:943
                                !obj && (obj = getObj(this,tagNames));
                                if(cmdName == 'superscript' || cmdName == 'subscript'){
                                    
                                    if(!obj || obj.tagName.toLowerCase() != cmdName)
                                        range.removeInlineStyle(['sub','sup'])

                                }
                                obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] )
                            }

                        }
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }else{
                        range = me.selection.getRange();
                        obj = getObj(this,tagNames);

                        if ( range.collapsed ) {
                            if ( obj ) {
                                var tmpText =  me.document.createTextNode('');
                                range.insertNode( tmpText ).removeInlineStyle( tagNames );

                                range.setStartBefore(tmpText);
                                domUtils.remove(tmpText);
                            } else {
                                
                                var tmpNode = range.document.createElement( tagNames[0] );
                                if(cmdName == 'superscript' || cmdName == 'subscript'){
                                    tmpText = me.document.createTextNode('');
                                    range.insertNode(tmpText)
                                        .removeInlineStyle(['sub','sup'])
                                        .setStartBefore(tmpText)
                                        .collapse(true);

                                }
                                range.insertNode( tmpNode ).setStart( tmpNode, 0 );
                                


                            }
                            range.collapse( true )

                        } else {
                            if(cmdName == 'superscript' || cmdName == 'subscript'){
                                if(!obj || obj.tagName.toLowerCase() != cmdName)
                                    range.removeInlineStyle(['sub','sup'])

                            }
                            obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] )
                        }

                        range.select();
                        
                    }

                    return true;
                },
                queryCommandState : function() {
                   if(this.highlight){
                       return -1;
                   }
                   return getObj(this,tagNames) ? 1 : 0;
                }
            }
        })( style, basestyles[style] );

    }
};


///import core
///commands ѡ��·��
///commandsName  ElementPath,elementPathEnabled
///commandsTitle  ѡ��·��
/**
 * ѡ��·��
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName     elementpathѡ��·��
 */
UE.plugins['elementpath'] = function(){

    var currentLevel,
        tagNames,
        me = this;
    me.commands['elementpath'] = {
        execCommand : function( cmdName, level ) {
            var start = tagNames[level],
                range = me.selection.getRange();
            me.currentSelectedArr && domUtils.clearSelectedArr(me.currentSelectedArr);
           
            currentLevel = level*1;
            if(dtd.$tableContent[start.tagName]){
                switch (start.tagName){
                    case 'TD':me.currentSelectedArr = [start];
                            start.className = me.options.selectedTdClass;
                            break;
                    case 'TR':
                        var cells = start.cells;
                        for(var i=0,ti;ti=cells[i++];){
                            me.currentSelectedArr.push(ti);
                            ti.className = me.options.selectedTdClass;
                        }
                        break;
                    case 'TABLE':
                    case 'TBODY':

                        var rows = start.rows;
                        for(var i=0,ri;ri=rows[i++];){
                            cells = ri.cells;
                            for(var j=0,tj;tj=cells[j++];){
                                 me.currentSelectedArr.push(tj);
                                tj.className = me.options.selectedTdClass;
                            }
                        }

                }
                start = me.currentSelectedArr[0];
                if(domUtils.isEmptyNode(start)){
                    range.setStart(start,0).setCursor()
                }else{
                   range.selectNodeContents(start).select()
                }
            }else{
                range.selectNode(start).select()

            }
        },
        queryCommandValue : function() {
            //����һ�������������޸�ԭ����startElementPath;
            var parents = [].concat(this.selection.getStartElementPath()).reverse(),
                names = [];
            tagNames = parents;
            for(var i=0,ci;ci=parents[i];i++){
                if(ci.nodeType == 3) continue;
                var name = ci.tagName.toLowerCase();
                if(name == 'img' && ci.getAttribute('anchorname')){
                    name = 'anchor'
                }
                names[i] = name;
                if(currentLevel == i){
                   currentLevel = -1;
                    break;
                }
            }
            return names;
        }
    }


};


///import core
///import plugins\removeformat.js
///commands ��ʽˢ
///commandsName  FormatMatch
///commandsTitle  ��ʽˢ
/**
 * ��ʽˢ��ֻ��ʽinline��
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    formatmatchִ�и�ʽˢ
 */
UE.plugins['formatmatch'] = function(){

    var me = this,
        list = [],img,
        flag = 0;

     me.addListener('reset',function(){
         list = [];
         flag = 0;
     });

    function addList(type,evt){
        
        if(browser.webkit){
            var target = evt.target.tagName == 'IMG' ? evt.target : null;
        }

        function addFormat(range){

            if(text && (!me.currentSelectedArr || !me.currentSelectedArr.length)){
                range.selectNode(text);
            }
            return range.applyInlineStyle(list[list.length-1].tagName,null,list);

        }

        me.undoManger && me.undoManger.save();

        var range = me.selection.getRange(),
            imgT = target || range.getClosedNode();
        if(img && imgT && imgT.tagName == 'IMG'){
            //trace:964

            imgT.style.cssText += ';float:' + (img.style.cssFloat || img.style.styleFloat ||'none') + ';display:' + (img.style.display||'inline');

            img = null;
        }else{
            if(!img){
                var collapsed = range.collapsed;
                if(collapsed){
                    var text = me.document.createTextNode('match');
                    range.insertNode(text).select();


                }
                me.__hasEnterExecCommand = true;
                //���ܰ�block�ϵ����Ըɵ�
                //trace:1553
                var removeFormatAttributes = me.options.removeFormatAttributes;
                me.options.removeFormatAttributes = '';
                me.execCommand('removeformat');
                me.options.removeFormatAttributes = removeFormatAttributes;
                me.__hasEnterExecCommand = false;
                //trace:969
                range = me.selection.getRange();
                if(list.length == 0){

                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }
                }else{
                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){

                        for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                            range.selectNodeContents(ci);
                            addFormat(range);

                        }
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }else{


                        addFormat(range)

                    }
                }
                if(!me.currentSelectedArr || !me.currentSelectedArr.length){
                    if(text){
                        range.setStartBefore(text).collapse(true);

                    }

                    range.select()
                }
                text && domUtils.remove(text);
            }

        }




        me.undoManger && me.undoManger.save();
        me.removeListener('mouseup',addList);
        flag = 0;
    }

    me.commands['formatmatch'] = {
        execCommand : function( cmdName ) {
          
            if(flag){
                flag = 0;
                list = [];
                 me.removeListener('mouseup',addList);
                return;
            }


              
            var range = me.selection.getRange();
            img = range.getClosedNode();
            if(!img || img.tagName != 'IMG'){
               range.collapse(true).shrinkBoundary();
               var start = range.startContainer;
               list = domUtils.findParents(start,true,function(node){
                   return !domUtils.isBlockElm(node) && node.nodeType == 1
               });
               //a���ܼ����ʽˢ, ���ҿ�¡�ڵ�
               for(var i=0,ci;ci=list[i];i++){
                   if(ci.tagName == 'A'){
                       list.splice(i,1);
                       break;
                   }
               }

            }

            me.addListener('mouseup',addList);
            flag = 1;


        },
        queryCommandState : function() {
             if(this.highlight){
                       return -1;
                   }
            return flag;
        },
        notNeedUndo : 1
    }
};


///import core
///commands �����滻
///commandsName  SearchReplace
///commandsTitle  ��ѯ�滻
///commandsDialog  dialogs\searchreplace\searchreplace.html
/**
 * @description �����滻
 * @author zhanyi
 */
UE.plugins['searchreplace'] = function(){

    var currentRange,
        first,
        me = this;
    me.addListener('reset',function(){
        currentRange = null;
        first = null;
    });
    me.commands['searchreplace'] = {

            execCommand : function(cmdName,opt){
               	var me = this,
                    sel = me.selection,
                    range,
                    nativeRange,
                    num = 0,
                opt = utils.extend(opt,{
                    all : false,
                    casesensitive : false,
                    dir : 1
                },true);


                if(browser.ie){
                    while(1){
                        var tmpRange;
                        nativeRange = me.document.selection.createRange();
                        tmpRange = nativeRange.duplicate();
                        tmpRange.moveToElementText(me.document.body);
                        if(opt.all){
                            first = 0;
                            opt.dir = 1;
                            
                            if(currentRange){
                                tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',currentRange)
                            }
                        }else{
                            tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',nativeRange);
                            if(opt.hasOwnProperty("replaceStr")){
                                tmpRange.setEndPoint(opt.dir == -1 ? 'StartToEnd' : 'EndToStart',nativeRange);
                            }
                        }
                        nativeRange = tmpRange.duplicate();



                        if(!tmpRange.findText(opt.searchStr,opt.dir,opt.casesensitive ? 4 : 0)){
                            currentRange = null;
                            tmpRange = me.document.selection.createRange();
                            tmpRange.scrollIntoView();
                            return num;
                        }
                        tmpRange.select();
                        //�滻
                        if(opt.hasOwnProperty("replaceStr")){
                            range = sel.getRange();
                            range.deleteContents().insertNode(range.document.createTextNode(opt.replaceStr)).select();
                            currentRange = sel.getNative().createRange();

                        }
                        num++;
                        if(!opt.all)break;
                    }
                }else{
                    var w = me.window,nativeSel = sel.getNative(),tmpRange;
                    while(1){
                        if(opt.all){
                            if(currentRange){
                                currentRange.collapse(false);
                                nativeRange = currentRange;

                            }else{
                                nativeRange  = me.document.createRange();
                                nativeRange.setStart(me.document.body,0);

                            }
                            nativeSel.removeAllRanges();
                            nativeSel.addRange( nativeRange );
                            first = 0;
                            opt.dir = 1;
                        }else{
                            nativeRange = w.getSelection().getRangeAt(0);
                           
                            if(opt.hasOwnProperty("replaceStr")){
                                nativeRange.collapse(opt.dir == 1 ? true : false);
                            }
                        }

                        //����ǵ�һ�β��Һ�ѡ���������Ǿ�Ҫ�����Ϊfind��׼��
                       
                        if(!first){
                            nativeRange.collapse( opt.dir <0 ? true : false);
                            nativeSel.removeAllRanges();
                            nativeSel.addRange( nativeRange );
                        }else{
                            nativeSel.removeAllRanges();
                        }

                        if(!w.find(opt.searchStr,opt.casesensitive,opt.dir < 0 ? true : false) ) {
                            currentRange = null;
                            nativeSel.removeAllRanges();

                            return num;
                        }
                        first = 0;
                        range = w.getSelection().getRangeAt(0);
                        if(!range.collapsed){

                            if(opt.hasOwnProperty("replaceStr")){
                                range.deleteContents();
                                var text = w.document.createTextNode(opt.replaceStr);
                                range.insertNode(text);
                                range.selectNode(text);
                                nativeSel.addRange(range);
                                currentRange = range.cloneRange();
                            }
                        }
                        num++;
                        if(!opt.all)break;
                    }

                }
                return true;
            }
    }

};
///import core
///commands �Զ�����ʽ
///commandsName  CustomStyle
///commandsTitle  �Զ�����ʽ
UE.plugins['customstyle'] = function() {
    var me = this;
    me.commands['customstyle'] = {
        execCommand : function(cmdName, obj) {
            var me = this,
                    tagName = obj.tag,
                    node = domUtils.findParent(me.selection.getStart(), function(node) {
                        return node.getAttribute('label')
                    }, true),
                    range,bk,tmpObj = {};
            for (var p in obj) {
                tmpObj[p] = obj[p]
            }
            delete tmpObj.tag;
            if (node && node.getAttribute('label') == obj.label) {
                range = this.selection.getRange();
                bk = range.createBookmark();
                if (range.collapsed) {
                    //trace:1732 ɾ���Զ����ǩ��Ҫ��p������վλ
                    if(dtd.$block[node.tagName]){
                        var fillNode = me.document.createElement('p');
                        domUtils.moveChild(node, fillNode);
                        node.parentNode.insertBefore(fillNode, node);
                        domUtils.remove(node)
                    }else{
                        domUtils.remove(node,true)
                    }

                } else {

                    var common = domUtils.getCommonAncestor(bk.start, bk.end),
                            nodes = domUtils.getElementsByTagName(common, tagName);
                    if(new RegExp(tagName,'i').test(common.tagName)){
                        nodes.push(common);
                    }
                    for (var i = 0,ni; ni = nodes[i++];) {
                        if (ni.getAttribute('label') == obj.label) {
                            var ps = domUtils.getPosition(ni, bk.start),pe = domUtils.getPosition(ni, bk.end);
                            if ((ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                                    &&
                                    (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                                    )
                                if (dtd.$block[tagName]) {
                                    var fillNode = me.document.createElement('p');
                                    domUtils.moveChild(ni, fillNode);
                                    ni.parentNode.insertBefore(fillNode, ni);
                                }
                            domUtils.remove(ni, true)
                        }
                    }
                    node = domUtils.findParent(common, function(node) {
                        return node.getAttribute('label') == obj.label
                    }, true);
                    if (node) {

                        domUtils.remove(node, true)

                    }

                }
                range.moveToBookmark(bk).select();
            } else {
                if (dtd.$block[tagName]) {
                    this.execCommand('paragraph', tagName, tmpObj,'customstyle');
                    range = me.selection.getRange();
                    if (!range.collapsed) {
                        range.collapse();
                        node = domUtils.findParent(me.selection.getStart(), function(node) {
                            return node.getAttribute('label') == obj.label
                        }, true);
                        var pNode = me.document.createElement('p');
                        domUtils.insertAfter(node, pNode);
                        domUtils.fillNode(me.document, pNode);
                        range.setStart(pNode, 0).setCursor()
                    }
                } else {

                    range = me.selection.getRange();
                    if (range.collapsed) {
                        node = me.document.createElement(tagName);
                        domUtils.setAttributes(node, tmpObj);
                        range.insertNode(node).setStart(node, 0).setCursor();

                        return;
                    }

                    bk = range.createBookmark();
                    range.applyInlineStyle(tagName, tmpObj).moveToBookmark(bk).select()
                }
            }

        },
        queryCommandValue : function() {
            var parent = utils.findNode(this.selection.getStartElementPath(),null,function(node){return node.getAttribute('label')});
            return  parent ? parent.getAttribute('label') : '';
        },
        queryCommandState : function() {
            return this.highlight ? -1 : 0;
        }
    };
    //��ȥ��customstyle�ǣ�����ǿ�Ԫ�أ���p����
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;

        if (keyCode == 32 || keyCode == 13) {
            var range = me.selection.getRange();
            if (range.collapsed) {
                var node = domUtils.findParent(me.selection.getStart(), function(node) {
                    return node.getAttribute('label')
                }, true);
                if (node && dtd.$block[node.tagName] && domUtils.isEmptyNode(node)) {
                        var p = me.document.createElement('p');
                        domUtils.insertAfter(node, p);
                        domUtils.fillNode(me.document, p);
                        domUtils.remove(node);
                        range.setStart(p, 0).setCursor();


                }
            }
        }
    })
};
///import core
///commandsName  catchRemoteImage
/**
 * Զ��ͼƬץȡ,�����������ʱ���в����ϱ���������ͼƬ������ץȡ��Ϊ���ط������ϵ�ͼƬ
 *
 */
UE.plugins['catchremoteimage'] = function (){
    if(!this.options.catchRemoteImageEnable)return;
    var ajax = UE.ajax,
		me = this,
		localDomain = me.options.localDomain,
		catcherUrl = me.options.catcherUrl,
	    separater="ue_separate_ue";

    function catchremoteimage(imgs,callbacks) {
        var submitStr = imgs.join(separater);
        ajax.request( catcherUrl, {
            content:submitStr,
            timeout:60000,  //��λ�����룬�ص�����ʱ���á�Ŀ���û�������ٲ��Ǻܿ�Ļ��˴���������һ���ϴ����ֵ
            onsuccess:callbacks["success"],
            onerror:callbacks["error"]
        } )

    }
    me.addListener("afterpaste",function(){
        me.fireEvent("catchRemoteImage");
    });

    me.addListener( "catchRemoteImage", function () {
        var remoteImages=[];
        var imgs = domUtils.getElementsByTagName(me.document,"img");
        for(var i = 0,ci;ci=imgs[i++];){
	        if(ci.getAttribute("word_img"))continue;
            var src = ci.getAttribute("data_ue_src") || ci.src||"";
	        if(/^(https?|ftp):/i.test(src) && src.indexOf(localDomain)==-1 ) {
                remoteImages.push(src);
            }
        }
        if(remoteImages.length){
            catchremoteimage(remoteImages,{
                //�ɹ�ץȡ
                success:function (xhr){
                    try{
                        var info = eval("("+xhr.responseText+")");
                    }catch(e){
                        return;
                    }
                    var srcUrls = info.srcUrl.split(separater),
                        urls = info.url.split(separater);
                    for(var i=0,ci;ci=imgs[i++];){
                        var src = ci.getAttribute("data_ue_src")||ci.src||"";
                        for(var j=0,cj;cj=srcUrls[j++];){
                            var url = urls[j-1];
                            if(src == cj && url!="error"){  //ץȡʧ��ʱ�����滻����
	                            //��ַ����
                                var newSrc = me.options.UEDITOR_HOME_URL +"server/"+url;
                                domUtils.setAttributes(ci,{
                                    "src":newSrc,
                                    "data_ue_src":newSrc
                                });
                                break;
                            }
                        }
                    }
                },
                //�ص�ʧ�ܣ���������ʱ
                error:function(){
                    me.fireEvent("catchremoteerror");
                }
            })
        }

    } )
};
///import core
///commandsName  snapscreen
///commandsTitle  ����
/**
 * �������
 */
UE.commands['snapscreen'] = {
    execCommand: function(){
        var me = this,
            editorOptions = me.options;
        
        if(!browser.ie){
                alert(editorOptions.messages.snapScreenNotIETip);
                return;
        }

        var onSuccess = function(rs){
            try{
                rs = eval("("+ rs +")");
            }catch(e){
                alert('�����ϴ�����\n\n����editor_config.js�й��ڽ�����������\n\nsnapscreenHost ����ֵ Ӧ��Ϊ��Ļ��ͼ��server���ļ����ڵ���վ��ַ����ip');
                return;
            }

            if(rs.state != 'SUCCESS'){
                alert(rs.state);
                return;
            }
            me.execCommand('insertimage', {
                src: (editorOptions.snapscreenImgIsUseImagePath ? editorOptions.imagePath : '') + rs.url,
                floatStyle: editorOptions.snapscreenImgAlign,
                data_ue_src:(editorOptions.snapscreenImgIsUseImagePath ? editorOptions.imagePath : '') + rs.url
            });
        };
        var onStartUpload = function(){
            //��ʼ��ͼ�ϴ�
        };
        var onError = function(){
            alert(editorOptions.messages.snapScreenMsg);
        };
        try{
            var nativeObj = new ActiveXObject('Snapsie.CoSnapsie');
            nativeObj.saveSnapshot(editorOptions.snapscreenHost, editorOptions.snapscreenServerFile, editorOptions.snapscreenServerPort, onStartUpload,onSuccess,onError);
        }catch(e){
            me.snapscreenInstall.open();
        }
    },
    queryCommandState: function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///commandsName  attachment
///commandsTitle  �����ϴ�
UE.commands["attachment"] = {
    queryCommandState:function(){
        return this.highlight ? -1 :0;
    }
};
var baidu = baidu || {};
baidu.editor = baidu.editor || {};
baidu.editor.ui = {};
(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils;

    var magic = '$EDITORUI';
    var root = window[magic] = {};
    var uidMagic = 'ID' + magic;
    var uidCount = 0;
    
    var uiUtils = baidu.editor.ui.uiUtils = {
        uid: function (obj){
            return (obj ? obj[uidMagic] || (obj[uidMagic] = ++ uidCount) : ++ uidCount);
        },
        hook: function ( fn, callback ) {
            var dg;
            if (fn && fn._callbacks) {
                dg = fn;
            } else {
                dg = function (){
                    var q;
                    if (fn) {
                        q = fn.apply(this, arguments);
                    }
                    var callbacks = dg._callbacks;
                    var k = callbacks.length;
                    while (k --) {
                        var r = callbacks[k].apply(this, arguments);
                        if (q === undefined) {
                            q = r;
                        }
                    }
                    return q;
                };
                dg._callbacks = [];
            }
            dg._callbacks.push(callback);
            return dg;
        },
        createElementByHtml: function (html){
            var el = document.createElement('div');
            el.innerHTML = html;
            el = el.firstChild;
            el.parentNode.removeChild(el);
            return el;
        },
        getViewportElement: function (){
            return (browser.ie && browser.quirks) ?
                document.body : document.documentElement;
        },
        getClientRect: function (element){
            var bcr = element.getBoundingClientRect();
            var rect = {
                left: Math.round(bcr.left),
                top: Math.round(bcr.top),
                height: Math.round(bcr.bottom - bcr.top),
                width: Math.round(bcr.right - bcr.left)
            };
            var doc;
            while ((doc = element.ownerDocument) !== document &&
                (element = domUtils.getWindow(doc).frameElement)) {
                bcr = element.getBoundingClientRect();
                rect.left += bcr.left;
                rect.top += bcr.top;
            }
            rect.bottom = rect.top + rect.height;
            rect.right = rect.left + rect.width;
            return rect;
        },
        getViewportRect: function (){
            var viewportEl = uiUtils.getViewportElement();
            var width = (window.innerWidth || viewportEl.clientWidth) | 0;
            var height = (window.innerHeight ||viewportEl.clientHeight) | 0;
            return {
                left: 0,
                top: 0,
                height: height,
                width: width,
                bottom: height,
                right: width
            };
        },
        setViewportOffset: function (element, offset){
            var rect;
            var fixedLayer = uiUtils.getFixedLayer();
            if (element.parentNode === fixedLayer) {
                element.style.left = offset.left + 'px';
                element.style.top = offset.top + 'px';
            } else {
                domUtils.setViewportOffset(element, offset);
            }
        },
        getEventOffset: function (evt){
            var el = evt.target || evt.srcElement;
            var rect = uiUtils.getClientRect(el);
            var offset = uiUtils.getViewportOffsetByEvent(evt);
            return {
                left: offset.left - rect.left,
                top: offset.top - rect.top
            };
        },
        getViewportOffsetByEvent: function (evt){
            var el = evt.target || evt.srcElement;
            var frameEl = domUtils.getWindow(el).frameElement;
            var offset = {
                left: evt.clientX,
                top: evt.clientY
            };
            if (frameEl && el.ownerDocument !== document) {
                var rect = uiUtils.getClientRect(frameEl);
                offset.left += rect.left;
                offset.top += rect.top;
            }
            return offset;
        },
        setGlobal: function (id, obj){
            root[id] = obj;
            return magic + '["' + id  + '"]';
        },
        unsetGlobal: function (id){
            delete root[id];
        },
        copyAttributes: function (tgt, src){
            var attributes = src.attributes;
            var k = attributes.length;
            while (k --) {
                var attrNode = attributes[k];
                if ( attrNode.nodeName != 'style' && attrNode.nodeName != 'class' && (!browser.ie || attrNode.specified) ) {
                    tgt.setAttribute(attrNode.nodeName, attrNode.nodeValue);
                }
            }
            if (src.className) {
                tgt.className += ' ' + src.className;
            }
            if (src.style.cssText) {
                tgt.style.cssText += ';' + src.style.cssText;
            }
        },
        removeStyle: function (el, styleName){
            if (el.style.removeProperty) {
                el.style.removeProperty(styleName);
            } else if (el.style.removeAttribute) {
                el.style.removeAttribute(styleName);
            } else throw '';
        },
        contains: function (elA, elB){
            return elA && elB && (elA === elB ? false : (
                elA.contains ? elA.contains(elB) :
                    elA.compareDocumentPosition(elB) & 16
                ));
        },
        startDrag: function (evt, callbacks,doc){
            var doc = doc || document;
            var startX = evt.clientX;
            var startY = evt.clientY;
            function handleMouseMove(evt){
                var x = evt.clientX - startX;
                var y = evt.clientY - startY;
                callbacks.ondragmove(x, y);
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = true;
                }
            }
            if (doc.addEventListener) {
                function handleMouseUp(evt){
                    doc.removeEventListener('mousemove', handleMouseMove, true);
                    doc.removeEventListener('mouseup', handleMouseMove, true);
                    callbacks.ondragstop();
                }
                doc.addEventListener('mousemove', handleMouseMove, true);
                doc.addEventListener('mouseup', handleMouseUp, true);
                evt.preventDefault();
            } else {
                var elm = evt.srcElement;
                elm.setCapture();
                function releaseCaptrue(){
                    elm.releaseCapture();
                    elm.detachEvent('onmousemove', handleMouseMove);
                    elm.detachEvent('onmouseup', releaseCaptrue);
                    elm.detachEvent('onlosecaptrue', releaseCaptrue);
                    callbacks.ondragstop();
                }
                elm.attachEvent('onmousemove', handleMouseMove);
                elm.attachEvent('onmouseup', releaseCaptrue);
                elm.attachEvent('onlosecaptrue', releaseCaptrue);
                evt.returnValue = false;
            }
            callbacks.ondragstart();
        },
        getFixedLayer: function (){
            var layer = document.getElementById('edui_fixedlayer');
            if (layer == null) {
                layer = document.createElement('div');
                layer.id = 'edui_fixedlayer';
                document.body.appendChild(layer);
                if (browser.ie && browser.version <= 8) {
                    layer.style.position = 'absolute';
                    bindFixedLayer();
                    setTimeout(updateFixedOffset);
                } else {
                    layer.style.position = 'fixed';
                }
                layer.style.left = '0';
                layer.style.top = '0';
                layer.style.width = '0';
                layer.style.height = '0';
            }
            return layer;
        },
        makeUnselectable: function (element){
            if (browser.opera || (browser.ie && browser.version < 9)) {
                element.unselectable = 'on';
                if (element.hasChildNodes()) {
                    for (var i=0; i<element.childNodes.length; i++) {
                        if (element.childNodes[i].nodeType == 1) {
                            uiUtils.makeUnselectable(element.childNodes[i]);
                        }
                    }
                }
            } else {
                if (element.style.MozUserSelect !== undefined) {
                    element.style.MozUserSelect = 'none';
                } else if (element.style.WebkitUserSelect !== undefined) {
                    element.style.WebkitUserSelect = 'none';
                } else if (element.style.KhtmlUserSelect !== undefined) {
                    element.style.KhtmlUserSelect = 'none';
                }
            }
        }
    };
    function updateFixedOffset(){
        var layer = document.getElementById('edui_fixedlayer');
        uiUtils.setViewportOffset(layer, {
            left: 0,
            top: 0
        });
//        layer.style.display = 'none';
//        layer.style.display = 'block';

        //#trace: 1354
//        setTimeout(updateFixedOffset);
    }
    function bindFixedLayer(adjOffset){
        domUtils.on(window, 'scroll', updateFixedOffset);
        domUtils.on(window, 'resize', baidu.editor.utils.defer(updateFixedOffset, 0, true));
    }
})();

(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        EventBase = baidu.editor.EventBase,
        UIBase = baidu.editor.ui.UIBase = function (){};

    UIBase.prototype = {
        className: '',
        uiName: '',
        initOptions: function (options){
            var me = this;
            for (var k in options) {
                me[k] = options[k];
            }
            this.id = this.id || 'edui' + uiUtils.uid();
        },
        initUIBase: function (){
            this._globalKey = utils.unhtml( uiUtils.setGlobal(this.id, this) );
        },
        render: function (holder){
            var html = this.renderHtml();
            var el = uiUtils.createElementByHtml(html);
            var seatEl = this.getDom();
            if (seatEl != null) {
                seatEl.parentNode.replaceChild(el, seatEl);
                uiUtils.copyAttributes(el, seatEl);
            } else {
                if (typeof holder == 'string') {
                    holder = document.getElementById(holder);
                }
                holder = holder || uiUtils.getFixedLayer();
                holder.appendChild(el);
            }
            this.postRender();
        },
        getDom: function (name){
            if (!name) {
                return document.getElementById( this.id );
            } else {
                return document.getElementById( this.id + '_' + name );
            }
        },
        postRender: function (){
            this.fireEvent('postrender');
        },
        getHtmlTpl: function (){
            return '';
        },
        formatHtml: function (tpl){
            var prefix = 'edui-' + this.uiName;
            return (tpl
                .replace(/##/g, this.id)
                .replace(/%%-/g, this.uiName ? prefix + '-' : '')
                .replace(/%%/g, (this.uiName ? prefix : '') + ' ' + this.className)
                .replace(/\$\$/g, this._globalKey));
        },
        renderHtml: function (){
            return this.formatHtml(this.getHtmlTpl());
        },
        dispose: function (){
            var box = this.getDom();
            if (box) baidu.editor.dom.domUtils.remove( box );
            uiUtils.unsetGlobal(this.id);
        }
    };
    utils.inherits(UIBase, EventBase);
})();

(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Separator = baidu.editor.ui.Separator = function (options){
            this.initOptions(options);
            this.initSeparator();
        };
    Separator.prototype = {
        uiName: 'separator',
        initSeparator: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%"></div>';
        }
    };
    utils.inherits(Separator, UIBase);

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var Mask = baidu.editor.ui.Mask = function (options){
        this.initOptions(options);
        this.initUIBase();
    };
    Mask.prototype = {
        getHtmlTpl: function (){
            return '<div id="##" class="edui-mask %%" onmousedown="return $$._onMouseDown(event, this);"></div>';
        },
        postRender: function (){
            var me = this;
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me._fill();
                    }
                });
            });
        },
        show: function (zIndex){
            this._fill();
            this.getDom().style.display = '';
            this.getDom().style.zIndex = zIndex;
        },
        hide: function (){
            this.getDom().style.display = 'none';
            this.getDom().style.zIndex = '';
        },
        isHidden: function (){
            return this.getDom().style.display == 'none';
        },
        _onMouseDown: function (){
            return false;
        },
        _fill: function (){
            var el = this.getDom();
            var vpRect = uiUtils.getViewportRect();
            el.style.width = vpRect.width + 'px';
            el.style.height = vpRect.height + 'px';
        }
    };
    utils.inherits(Mask, UIBase);
})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup = function (options){
            this.initOptions(options);
            this.initPopup();
        };

    var allPopups = [];
    function closeAllPopup( el ){
        var newAll = [];
        for ( var i = 0; i < allPopups.length; i++ ) {
            var pop = allPopups[i];
            if (!pop.isHidden()) {
                if (pop.queryAutoHide(el) !== false) {
                    pop.hide();
                }
            }
        }
    }

    Popup.postHide = closeAllPopup;

    var ANCHOR_CLASSES = ['edui-anchor-topleft','edui-anchor-topright',
        'edui-anchor-bottomleft','edui-anchor-bottomright'];
    Popup.prototype = {
        SHADOW_RADIUS: 5,
        content: null,
        _hidden: false,
        autoRender: true,
        canSideLeft: true,
        canSideUp: true,
        initPopup: function (){
            this.initUIBase();
            allPopups.push( this );
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-popup %%">' +
                ' <div id="##_body" class="edui-popup-body">' +
                ' <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: white;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe>' +
                ' <div class="edui-shadow"></div>' +
                ' <div id="##_content" class="edui-popup-content">' +
                this.getContentHtmlTpl() +
                '  </div>' +
                ' </div>' +
                '</div>';
        },
        getContentHtmlTpl: function (){
            if (typeof this.content == 'string') {
                return this.content;
            }
            return this.content.renderHtml();
        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){
            if (this.content instanceof UIBase) {
                this.content.postRender();
            }
            this.fireEvent('postRenderAfter');
            this.hide(true);
            this._UIBase_postRender();
        },
        _doAutoRender: function (){
            if (!this.getDom() && this.autoRender) {
                this.render();
            }
        },
        mesureSize: function (){
            var box = this.getDom('content');
            return uiUtils.getClientRect(box);
        },
        fitSize: function (){
            var popBodyEl = this.getDom('body');
            popBodyEl.style.width = '';
            popBodyEl.style.height = '';
            var size = this.mesureSize();
            popBodyEl.style.width = size.width + 'px';
            popBodyEl.style.height = size.height + 'px';
            return size;
        },
        showAnchor: function ( element, hoz ){
            this.showAnchorRect( uiUtils.getClientRect( element ), hoz );
        },
        showAnchorRect: function ( rect, hoz, adj ){
            this._doAutoRender();
            var vpRect = uiUtils.getViewportRect();
            this._show();
            var popSize = this.fitSize();

            var sideLeft, sideUp, left, top;
            if (hoz) {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.left - popSize.width : rect.right);
                top = (sideUp ? rect.bottom - popSize.height : rect.top);
            } else {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.right - popSize.width : rect.left);
                top = (sideUp ? rect.top - popSize.height : rect.bottom);
            }

            var popEl = this.getDom();
            uiUtils.setViewportOffset(popEl, {
                left: left,
                top: top
            });
            domUtils.removeClasses(popEl, ANCHOR_CLASSES);
            popEl.className += ' ' + ANCHOR_CLASSES[(sideUp ? 1 : 0) * 2 + (sideLeft ? 1 : 0)];
            if(this.editor){
                popEl.style.zIndex = this.editor.container.style.zIndex * 1 + 10;
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = popEl.style.zIndex - 1;
            }

        },
        showAt: function (offset) {
            var left = offset.left;
            var top = offset.top;
            var rect = {
                left: left,
                top: top,
                right: left,
                bottom: top,
                height: 0,
                width: 0
            };
            this.showAnchorRect(rect, false, true);
        },
        _show: function (){
            if (this._hidden) {
                var box = this.getDom();
                box.style.display = '';
                this._hidden = false;
//                if (box.setActive) {
//                    box.setActive();
//                }
                this.fireEvent('show');
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        show: function (){
            this._doAutoRender();
            this._show();
        },
        hide: function (notNofity){
            if (!this._hidden && this.getDom()) {
//                this.getDom().style.visibility = 'hidden';
                this.getDom().style.display = 'none';
                this._hidden = true;
                if (!notNofity) {
                    this.fireEvent('hide');
                }
            }
        },
        queryAutoHide: function (el){
            return !el || !uiUtils.contains(this.getDom(), el);
        }
    };
    utils.inherits(Popup, UIBase);
    
    domUtils.on( document, 'mousedown', function ( evt ) {
        var el = evt.target || evt.srcElement;
        closeAllPopup( el );
    } );
    domUtils.on( window, 'scroll', function () {
        closeAllPopup();
    } );

//    var lastVpRect = uiUtils.getViewportRect();
//    domUtils.on( window, 'resize', function () {
//        var vpRect = uiUtils.getViewportRect();
//        if (vpRect.width != lastVpRect.width || vpRect.height != lastVpRect.height) {
//            closeAllPopup();
//        }
//    } );

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        ColorPicker = baidu.editor.ui.ColorPicker = function (options){
            this.initOptions(options);
            this.noColorText = this.noColorText || '��������ɫ';
            this.initUIBase();
        };

    ColorPicker.prototype = {
        getHtmlTpl: function (){
            return genColorPicker(
                this.noColorText
                );
        },
        _onTableClick: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.fireEvent('pickcolor', color);
            }
        },
        _onTableOver: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.getDom('preview').style.backgroundColor = color;
            }
        },
        _onTableOut: function (){
            this.getDom('preview').style.backgroundColor = '';
        },
        _onPickNoColor: function (){
            this.fireEvent('picknocolor');
        }
    };
    utils.inherits(ColorPicker, UIBase);

    var COLORS = (
            'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,' +
            'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,' +
            'd8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,' +
            'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,' +
            'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,' +
            '7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,' +
            'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,').split(',');

    function genColorPicker(noColorText){
        var html = '<div id="##" class="edui-colorpicker %%">' +
            '<div class="edui-colorpicker-topbar edui-clearfix">' +
             '<div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div>' +
             '<div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+ noColorText +'</div>' +
            '</div>' +
            '<table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0">' +
            '<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#366092;padding-top: 2px"><td colspan="10">������ɫ</td> </tr>'+
            '<tr class="edui-colorpicker-tablefirstrow" >';
        for (var i=0; i<COLORS.length; i++) {
            if (i && i%10 === 0) {
                html += '</tr>'+(i==60?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#366092;"><td colspan="10">��׼��ɫ</td></tr>':'')+'<tr'+(i==60?' class="edui-colorpicker-tablefirstrow"':'')+'>';
            }
            html += i<70 ? '<td style="padding: 0 2px;"><a hidefocus title="'+COLORS[i]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell"' +
                        ' data-color="#'+ COLORS[i] +'"'+
                        ' style="background-color:#'+ COLORS[i] +';border:solid #ccc;'+
                        (i<10 || i>=60?'border-width:1px;':
                         i>=10&&i<20?'border-width:1px 1px 0 1px;':

                        'border-width:0 1px 0 1px;')+
                        '"' +
                    '></a></td>':'';
        }
        html += '</tr></table></div>';
        return html;
    }
})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase;
    
    var TablePicker = baidu.editor.ui.TablePicker = function (options){
        this.initOptions(options);
        this.initTablePicker();
    };
    TablePicker.prototype = {
        defaultNumRows: 10,
        defaultNumCols: 10,
        maxNumRows: 20,
        maxNumCols: 20,
        numRows: 10,
        numCols: 10,
        lengthOfCellSide: 22,
        initTablePicker: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-tablepicker %%">' +
                 '<div class="edui-tablepicker-body">' +
                  '<div class="edui-infoarea">' +
                   '<span id="##_label" class="edui-label"></span>' +
                   '<span class="edui-clickable" onclick="$$._onMore();">����</span>' +
                  '</div>' +
                  '<div class="edui-pickarea"' +
                   ' onmousemove="$$._onMouseMove(event, this);"' +
                   ' onmouseover="$$._onMouseOver(event, this);"' +
                   ' onmouseout="$$._onMouseOut(event, this);"' +
                   ' onclick="$$._onClick(event, this);"' +
                  '>' +
                    '<div id="##_overlay" class="edui-overlay"></div>' +
                  '</div>' +
                 '</div>' +
                '</div>';
        },
        _UIBase_render: UIBase.prototype.render,
        render: function (holder){
            this._UIBase_render(holder);
            this.getDom('label').innerHTML = '0�� x 0��';
        },
        _track: function (numCols, numRows){
            var style = this.getDom('overlay').style;
            var sideLen = this.lengthOfCellSide;
            style.width = numCols * sideLen + 'px';
            style.height = numRows * sideLen + 'px';
            var label = this.getDom('label');
            label.innerHTML = numCols + '�� x ' + numRows + '��';
            this.numCols = numCols;
            this.numRows = numRows;
        },
        _onMouseOver: function (evt, el){
            var rel = evt.relatedTarget || evt.fromElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0�� x 0��';
                this.getDom('overlay').style.visibility = '';
            }
        },
        _onMouseOut: function (evt, el){
            var rel = evt.relatedTarget || evt.toElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0�� x 0��';
                this.getDom('overlay').style.visibility = 'hidden';
            }
        },
        _onMouseMove: function (evt, el){
            var style = this.getDom('overlay').style;
            var offset = uiUtils.getEventOffset(evt);
            var sideLen = this.lengthOfCellSide;
            var numCols = Math.ceil(offset.left / sideLen);
            var numRows = Math.ceil(offset.top / sideLen);
            this._track(numCols, numRows);
        },
        _onClick: function (){
            this.fireEvent('picktable', this.numCols, this.numRows);
        },
        _onMore: function (){
            this.fireEvent('more');
        }
    };
    utils.inherits(TablePicker, UIBase);
})();

(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var TPL_STATEFUL = 'onmousedown="$$.Stateful_onMouseDown(event, this);"' +
        ' onmouseup="$$.Stateful_onMouseUp(event, this);"' +
        ( browser.ie ? (
        ' onmouseenter="$$.Stateful_onMouseEnter(event, this);"' +
        ' onmouseleave="$$.Stateful_onMouseLeave(event, this);"' )
        : (
        ' onmouseover="$$.Stateful_onMouseOver(event, this);"' +
        ' onmouseout="$$.Stateful_onMouseOut(event, this);"' ));
    
    baidu.editor.ui.Stateful = {
        alwalysHoverable: false,
        Stateful_init: function (){
            this._Stateful_dGetHtmlTpl = this.getHtmlTpl;
            this.getHtmlTpl = this.Stateful_getHtmlTpl;
        },
        Stateful_getHtmlTpl: function (){
            var tpl = this._Stateful_dGetHtmlTpl();
            // ʹ��function����$ת��
            return tpl.replace(/stateful/g, function (){ return TPL_STATEFUL; });
        },
        Stateful_onMouseEnter: function (evt, el){
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.addState('hover');
                this.fireEvent('over');
            }
        },
        Stateful_onMouseLeave: function (evt, el){
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.removeState('hover');
                this.removeState('active');
                this.fireEvent('out');
            }
        },
        Stateful_onMouseOver: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseEnter(evt, el);
            }
        },
        Stateful_onMouseOut: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseLeave(evt, el);
            }
        },
        Stateful_onMouseDown: function (evt, el){
            if (!this.isDisabled()) {
                this.addState('active');
            }
        },
        Stateful_onMouseUp: function (evt, el){
            if (!this.isDisabled()) {
                this.removeState('active');
            }
        },
        Stateful_postRender: function (){
            if (this.disabled && !this.hasState('disabled')) {
                this.addState('disabled');
            }
        },
        hasState: function (state){
            return domUtils.hasClass(this.getStateDom(), 'edui-state-' + state);
        },
        addState: function (state){
            if (!this.hasState(state)) {
                this.getStateDom().className += ' edui-state-' + state;
            }
        },
        removeState: function (state){
            if (this.hasState(state)) {
                domUtils.removeClasses(this.getStateDom(), ['edui-state-' + state]);
            }
        },
        getStateDom: function (){
            return this.getDom('state');
        },
        isChecked: function (){
            return this.hasState('checked');
        },
        setChecked: function (checked){
            if (!this.isDisabled() && checked) {
                this.addState('checked');
            } else {
                this.removeState('checked');
            }
        },
        isDisabled: function (){
            return this.hasState('disabled');
        },
        setDisabled: function (disabled){
            if (disabled) {
                this.removeState('hover');
                this.removeState('checked');
                this.removeState('active');
                this.addState('disabled');
            } else {
                this.removeState('disabled');
            }
        }
    };
})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        Button = baidu.editor.ui.Button = function (options){
            this.initOptions(options);
            this.initButton();
        };
    Button.prototype = {
        uiName: 'button',
        label: '',
        title: '',
        showIcon: true,
        showText: true,
        initButton: function (){
            this.initUIBase();
            this.Stateful_init();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div id="##_state" stateful>' +
                 '<div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : '') +
                 ' class="%%-body" onmousedown="return false;" onclick="return $$._onClick();">' +
                  (this.showIcon ? '<div class="edui-box edui-icon"></div>' : '') +
                  (this.showText ? '<div class="edui-box edui-label">' + this.label + '</div>' : '') +
                 '</div>' +
                '</div>' +
                '</div></div>';
        },
        postRender: function (){
            this.Stateful_postRender();
        },
        _onClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('click');
            }
        }
    };
    utils.inherits(Button, UIBase);
    utils.extend(Button.prototype, Stateful);

})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        SplitButton = baidu.editor.ui.SplitButton = function (options){
            this.initOptions(options);
            this.initSplitButton();
        };
    SplitButton.prototype = {
        popup: null,
        uiName: 'splitbutton',
        title: '',
        initSplitButton: function (){
            this.initUIBase();
            this.Stateful_init();
            var me = this;
            if (this.popup != null) {
                var popup = this.popup;
                this.popup = null;
                this.setPopup(popup);
            }
        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){
            this.Stateful_postRender();
            this._UIBase_postRender();
        },
        setPopup: function (popup){
            if (this.popup === popup) return;
            if (this.popup != null) {
                this.popup.dispose();
            }
            popup.addListener('show', utils.bind(this._onPopupShow, this));
            popup.addListener('hide', utils.bind(this._onPopupHide, this));
            popup.addListener('postrender', utils.bind(function (){
                popup.getDom('body').appendChild(
                    uiUtils.createElementByHtml('<div id="' +
                        this.popup.id + '_bordereraser" class="edui-bordereraser edui-background" style="width:' +
                        (uiUtils.getClientRect(this.getDom()).width - 2) + 'px"></div>')
                    );
                popup.getDom().className += ' ' + this.className;
            }, this));
            this.popup = popup;
        },
        _onPopupShow: function (){
            this.addState('opened');
        },
        _onPopupHide: function (){
            this.removeState('opened');
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div '+ (this.title ? 'title="' + this.title + '"' : '') +' id="##_state" stateful><div class="%%-body">' +
                '<div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);">' +
                '<div class="edui-box edui-icon"></div>' +
                '</div>' +
                '<div class="edui-box edui-splitborder"></div>' +
                '<div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div>' +
                '</div></div></div>';
        },
        showPopup: function (){
            // ��popup���ϵ�����ʱ�������⴦��
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top -= this.popup.SHADOW_RADIUS;
            rect.height += this.popup.SHADOW_RADIUS;
            this.popup.showAnchorRect(rect);
        },
        _onArrowClick: function (event, el){
            if (!this.isDisabled()) {
                this.showPopup();
            }
        },
        _onButtonClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('buttonclick');
            }
        }
    };
    utils.inherits(SplitButton, UIBase);
    utils.extend(SplitButton.prototype, Stateful, true);

})();

///import core
///import uicore
///import ui/colorpicker.js
///import ui/popup.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        ColorPicker = baidu.editor.ui.ColorPicker,
        Popup = baidu.editor.ui.Popup,
        SplitButton = baidu.editor.ui.SplitButton,
        ColorButton = baidu.editor.ui.ColorButton = function (options){
            this.initOptions(options);
            this.initColorButton();
        };
    ColorButton.prototype = {
        initColorButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new ColorPicker({
                    noColorText: '�����ɫ',
                    onpickcolor: function (t, color){
                        me._onPickColor(color);
                    },
                    onpicknocolor: function (t, color){
                        me._onPickNoColor(color);
                    }
                }),
                editor:me.editor
            });
            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.getDom('button_body').appendChild(
                uiUtils.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>')
                );
            this.getDom().className += ' edui-colorbutton';
        },
        setColor: function (color){
            this.getDom('colorlump').style.backgroundColor = color;
            this.color = color;
        },
        _onPickColor: function (color){
            if (this.fireEvent('pickcolor', color) !== false) {
                this.setColor(color);
                this.popup.hide();
            }
        },
        _onPickNoColor: function (color){
            if (this.fireEvent('picknocolor') !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(ColorButton, SplitButton);

})();

///import core
///import uicore
///import ui/popup.js
///import ui/tablepicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        TablePicker = baidu.editor.ui.TablePicker,
        SplitButton = baidu.editor.ui.SplitButton,
        TableButton = baidu.editor.ui.TableButton = function (options){
            this.initOptions(options);
            this.initTableButton();
        };
    TableButton.prototype = {
        initTableButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new TablePicker({
                    onpicktable: function (t, numCols, numRows){
                        me._onPickTable(numCols, numRows);
                    },
                    onmore: function (){
                        me.popup.hide();
                        me.fireEvent('more');
                    }
                }),
                'editor':me.editor
            });
            this.initSplitButton();
        },
        _onPickTable: function (numCols, numRows){
            if (this.fireEvent('picktable', numCols, numRows) !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(TableButton, SplitButton);

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase;
    
    var AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker = function (options){
        this.initOptions(options);
        this.initAutoTypeSetPicker();
    };
    AutoTypeSetPicker.prototype = {
        initAutoTypeSetPicker: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            var options = this.editor.options,
                opt = options.autotypeset;
            for(var i = 0,lineStr = [],li,lis = options.listMap.lineheight;li=lis[i++];){
                lineStr.push('<option value="'+li+'" '+(opt["lineHeight"] == li ? 'checked' : '')+'>'+li+'</option>');
            }

            return '<div id="##" class="edui-autotypesetpicker %%">' +
                 '<div class="edui-autotypesetpicker-body">' +
                    '<table >' +
                        '<tr><td colspan="2"><input type="checkbox" name="mergeEmptyline" '+ (opt["mergeEmptyline"] ? "checked" : "" )+'>�ϲ�����</td><td colspan="2"><input type="checkbox" name="removeEmptyline" '+ (opt["removeEmptyline"] ? "checked" : "" )+'>ɾ������</td></tr>'+
                        '<tr><td colspan="2"><input type="checkbox" name="removeClass" '+ (opt["removeClass"] ? "checked" : "" )+'>�����ʽ</td><td colspan="2"><input type="checkbox" name="indent" '+ (opt["indent"] ? "checked" : "" )+'>��������2��</td></tr>'+
                        '<tr><td colspan="2"><input type="checkbox" name="textAlign" '+ (opt["textAlign"] ? "checked" : "" )+'>���뷽ʽ��</td><td colspan="2" id="textAlignValue"><input type="radio" name="textAlignValue" value="left" '+((opt["textAlign"]&&opt["textAlign"]=="left") ? "checked" : "")+'>�����<input type="radio" name="textAlignValue" value="center" '+((opt["textAlign"]&&opt["textAlign"]=="center") ? "checked" : "")+'>���ж���<input type="radio" name="textAlignValue" value="right" '+((opt["textAlign"]&&opt["textAlign"]=="right") ? "checked" : "")+'>�Ҷ��� </tr>'+




                        '<tr><td colspan="2"><input type="checkbox" name="imageBlockLine" '+ (opt["imageBlockLine"] ? "checked" : "" )+'>ͼƬ����</td>' +
                            '<td colspan="2" id="imageBlockLineValue">' +
                                '<input type="radio" name="imageBlockLineValue" value="none" '+((opt["imageBlockLine"]&&opt["imageBlockLine"]=="none") ? "checked" : "")+'>Ĭ��' +
                                '<input type="radio" name="imageBlockLineValue" value="left" '+((opt["imageBlockLine"]&&opt["imageBlockLine"]=="left") ? "checked" : "")+'>�󸡶�' +
                                '<input type="radio" name="imageBlockLineValue" value="center" '+((opt["imageBlockLine"]&&opt["imageBlockLine"]=="center") ? "checked" : "")+'>��ռ�о���' +
                                '<input type="radio" name="imageBlockLineValue" value="right" '+((opt["imageBlockLine"]&&opt["imageBlockLine"]=="right") ? "checked" : "")+'>�Ҹ���</tr>'+

                        '<tr><td colspan="2"><input type="checkbox" name="clearFontSize" '+ (opt["clearFontSize"] ? "checked" : "" )+'>����ֺ�</td><td colspan="2"><input type="checkbox" name="clearFontFamily" '+ (opt["clearFontFamily"] ? "checked" : "" )+'>�������</td></tr>'+
                        '<tr><td colspan="4"><input type="checkbox" name="removeEmptyNode" '+ (opt["removeEmptyNode"] ? "checked" : "" )+'>ȥ�������html����</td></tr>'+
                        '<tr><td colspan="4"><input type="checkbox" name="pasteFilter" '+ (opt["pasteFilter"] ? "checked" : "" )+'>ճ������ (��ÿ��ճ��������Ӧ�����Ϲ��˹���)</td></tr>'+
                        '<tr><td colspan="4" align="right"><button >ִ��</button></td></tr>'+
                    '</table>'+
                 '</div>' +
                '</div>';


        },
        _UIBase_render: UIBase.prototype.render
    };
    utils.inherits(AutoTypeSetPicker, UIBase);
})();

///import core
///import uicore
///import ui/popup.js
///import ui/autotypesetpicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker,
        SplitButton = baidu.editor.ui.SplitButton,
        AutoTypeSetButton = baidu.editor.ui.AutoTypeSetButton = function (options){
            this.initOptions(options);
            this.initAutoTypeSetButton();
        };
    function getPara(me){
        var opt = me.editor.options.autotypeset,
            cont = me.getDom(),
            ipts = domUtils.getElementsByTagName(cont,"input");
        for(var i=ipts.length-1,ipt;ipt=ipts[i--];){
            if(ipt.getAttribute("type")=="checkbox"){
                var attrName = ipt.getAttribute("name");
                opt[attrName] && delete opt[attrName];
                if(ipt.checked){
                    var attrValue = document.getElementById(attrName+"Value");
                    if(attrValue){
                        if(/input/ig.test(attrValue.tagName)){
                            opt[attrName] = attrValue.value;
                        }else{
                            var iptChilds = attrValue.getElementsByTagName("input");
                            for(var j=iptChilds.length-1,iptchild;iptchild=iptChilds[j--];){
                                if(iptchild.checked){
                                    opt[attrName] = iptchild.value;
                                    break;
                                }
                            }
                        }
                    }else{
                        opt[attrName] = true;
                    }
                }
            }
        }
        var selects = domUtils.getElementsByTagName(cont,"select");
        for(var i=0,si;si=selects[i++];){
            var attr = si.getAttribute('name');
            opt[attr] = opt[attr] ? si.value : '';
        }
        me.editor.options.autotypeset = opt;
    }
    AutoTypeSetButton.prototype = {
        initAutoTypeSetButton: function (){
            var me = this;
            this.popup = new Popup({
                //�������ò���
                content: new AutoTypeSetPicker({editor:me.editor}),
                'editor':me.editor,
                hide : function(){

                    if (!this._hidden && this.getDom()) {
                        getPara(this);
                        this.getDom().style.display = 'none';
                        this._hidden = true;
                        this.fireEvent('hide');
                    }
                }
            });
            var flag = 0;
            this.popup.addListener('postRenderAfter',function(){
                var popupUI = this;
                if(flag)return;
                var cont = this.getDom(),
                    btn = cont.getElementsByTagName('button')[0];
                btn.onclick = function(){
                    getPara(popupUI);
                    me.editor.execCommand('autotypeset')
                };
                flag = 1;
            });
            this.initSplitButton();
        }
    };
    utils.inherits(AutoTypeSetButton, SplitButton);

})();

(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Toolbar = baidu.editor.ui.Toolbar = function (options){
            this.initOptions(options);
            this.initToolbar();
        };
    Toolbar.prototype = {
        items: null,
        initToolbar: function (){
            this.items = this.items || [];
            this.initUIBase();
        },
        add: function (item){
            this.items.push(item);
        },
        getHtmlTpl: function (){
            var buff = [];
            for (var i=0; i<this.items.length; i++) {
                buff[i] = this.items[i].renderHtml();
            }
            return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' +
                buff.join('') +
                '</div>'
        },
        postRender: function (){
            var box = this.getDom();
            for (var i=0; i<this.items.length; i++) {
                this.items[i].postRender();
            }
            uiUtils.makeUnselectable(box);
        },
        _onMouseDown: function (){
            return false;
        }
    };
    utils.inherits(Toolbar, UIBase);

})();

///import core
///import uicore
///import ui\popup.js
///import ui\stateful.js
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup,
        Stateful = baidu.editor.ui.Stateful,
        Menu = baidu.editor.ui.Menu = function (options){
            this.initOptions(options);
            this.initMenu();
        };

    var menuSeparator = {
        renderHtml: function (){
            return '<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>';
        },
        postRender: function (){},
        queryAutoHide: function (){ return true; }
    };
    Menu.prototype = {
        items: null,
        uiName: 'menu',
        initMenu: function (){
            this.items = this.items || [];
            this.initPopup();
            this.initItems();
        },
        initItems: function (){
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                if (item == '-') {
                    this.items[i] = this.getSeparator();
                } else if (!(item instanceof MenuItem)) {
                    this.items[i] = this.createItem(item);
                }
            }
        },
        getSeparator: function (){
            return menuSeparator;
        },
        createItem: function (item){
            return new MenuItem(item);
        },
        _Popup_getContentHtmlTpl: Popup.prototype.getContentHtmlTpl,
        getContentHtmlTpl: function (){
            if (this.items.length == 0) {
                return this._Popup_getContentHtmlTpl();
            }
            var buff = [];
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                buff[i] = item.renderHtml();
            }
            return ('<div class="%%-body">' + buff.join('') + '</div>');
        },
        _Popup_postRender: Popup.prototype.postRender,
        postRender: function (){
            var me = this;
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                item.ownerMenu = this;
                item.postRender();
            }
            domUtils.on(this.getDom(), 'mouseover', function (evt){
                evt = evt || event;
                var rel = evt.relatedTarget || evt.fromElement;
                var el = me.getDom();
                if (!uiUtils.contains(el, rel) && el !== rel) {
                    me.fireEvent('over');
                }
            });
            this._Popup_postRender();
        },
        queryAutoHide: function (el){
            if (el) {
                if (uiUtils.contains(this.getDom(), el)) {
                    return false;
                }
                for (var i=0; i<this.items.length; i++) {
                    var item = this.items[i];
                    if (item.queryAutoHide(el) === false) {
                        return false;
                    }
                }
            }
        },
        clearItems: function (){
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                clearTimeout(item._showingTimer);
                clearTimeout(item._closingTimer);
                if (item.subMenu) {
                    item.subMenu.destroy();
                }
            }
            this.items = [];
        },
        destroy: function (){
            if (this.getDom()) {
                domUtils.remove(this.getDom());
            }
            this.clearItems();
        },
        dispose: function (){
            this.destroy();
        }
    };
    utils.inherits(Menu, Popup);
    
    var MenuItem = baidu.editor.ui.MenuItem = function (options){
        this.initOptions(options);
        this.initUIBase();
        this.Stateful_init();
        if (this.subMenu && !(this.subMenu instanceof Menu)) {
            this.subMenu = new Menu(this.subMenu);
        }
    };
    MenuItem.prototype = {
        label: '',
        subMenu: null,
        ownerMenu: null,
        uiName: 'menuitem',
        alwalysHoverable: true,
        getHtmlTpl: function (){
            return '<div id="##" class="%%" stateful onclick="$$._onClick(event, this);">' +
                '<div class="%%-body">' +
                this.renderLabelHtml() +
                '</div>' +
                '</div>';
        },
        postRender: function (){
            var me = this;
            this.addListener('over', function (){
                me.ownerMenu.fireEvent('submenuover', me);
                if (me.subMenu) {
                    me.delayShowSubMenu();
                }
            });
            if (this.subMenu) {
                this.getDom().className += ' edui-hassubmenu';
                this.subMenu.render();
                this.addListener('out', function (){
                    me.delayHideSubMenu();
                });
                this.subMenu.addListener('over', function (){
                    clearTimeout(me._closingTimer);
                    me._closingTimer = null;
                    me.addState('opened');
                });
                this.ownerMenu.addListener('hide', function (){
                    me.hideSubMenu();
                });
                this.ownerMenu.addListener('submenuover', function (t, subMenu){
                    if (subMenu !== me) {
                        me.delayHideSubMenu();
                    }
                });
                this.subMenu._bakQueryAutoHide = this.subMenu.queryAutoHide;
                this.subMenu.queryAutoHide = function (el){
                    if (el && uiUtils.contains(me.getDom(), el)) {
                        return false;
                    }
                    return this._bakQueryAutoHide(el);
                };
            }
            this.getDom().style.tabIndex = '-1';
            uiUtils.makeUnselectable(this.getDom());
            this.Stateful_postRender();
        },
        delayShowSubMenu: function (){
            var me = this;
            if (!me.isDisabled()) {
                me.addState('opened');
                clearTimeout(me._showingTimer);
                clearTimeout(me._closingTimer);
                me._closingTimer = null;
                me._showingTimer = setTimeout(function (){
                    me.showSubMenu();
                }, 250);
            }
        },
        delayHideSubMenu: function (){
            var me = this;
            if (!me.isDisabled()) {
                me.removeState('opened');
                clearTimeout(me._showingTimer);
                if (!me._closingTimer) {
                    me._closingTimer = setTimeout(function (){
                        if (!me.hasState('opened')) {
                            me.hideSubMenu();
                        }
                        me._closingTimer = null;
                    }, 400);
                }
            }
        },
        renderLabelHtml: function (){
            return '<div class="edui-arrow"></div>' +
                '<div class="edui-box edui-icon"></div>' +
                '<div class="edui-box edui-label %%-label">' + (this.label || '') + '</div>';
        },
        getStateDom: function (){
            return this.getDom();
        },
        queryAutoHide: function (el){
            if (this.subMenu && this.hasState('opened')) {
                return this.subMenu.queryAutoHide(el);
            }
        },
        _onClick: function (event, this_){
            if (this.hasState('disabled')) return;
            if (this.fireEvent('click', event, this_) !== false) {
                if (this.subMenu) {
                    this.showSubMenu();
                } else {
                    Popup.postHide();
                }
            }
        },
        showSubMenu: function (){
            var rect = uiUtils.getClientRect(this.getDom());
            rect.right -= 5;
            rect.left += 2;
            rect.width -= 7;
            rect.top -= 4;
            rect.bottom += 4;
            rect.height += 8;
            this.subMenu.showAnchorRect(rect, true, true);
        },
        hideSubMenu: function (){
            this.subMenu.hide();
        }
    };
    utils.inherits(MenuItem, UIBase);
    utils.extend(MenuItem.prototype, Stateful, true);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    // todo: menu��item���ͨ��list
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        Combox = baidu.editor.ui.Combox = function (options){
            this.initOptions(options);
            this.initCombox();
        };
    Combox.prototype = {
        uiName: 'combox',
        initCombox: function (){
            var me = this;
            this.items = this.items || [];
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                item.uiName = 'listitem';
                item.index = i;
                item.onclick = function (){
                    me.selectByIndex(this.index);
                };
            }
            this.popup = new Menu({
                items: this.items,
                uiName: 'list',
                editor:this.editor
            });
            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.setLabel(this.label || '');
            this.setValue(this.initValue || '');
        },
        showPopup: function (){
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top += 1;
            rect.bottom -= 1;
            rect.height -= 2;
            this.popup.showAnchorRect(rect);
        },
        getValue: function (){
            return this.value;
        },
        setValue: function (value){
            var index = this.indexByValue(value);
            if (index != -1) {
                this.selectedIndex = index;
                this.setLabel(this.items[index].label);
                this.value = this.items[index].value;
            } else {
                this.selectedIndex = -1;
                this.setLabel(this.getLabelForUnknowValue(value));
                this.value = value;
            }
        },
        setLabel: function (label){
            this.getDom('button_body').innerHTML = label;
            this.label = label;
        },
        getLabelForUnknowValue: function (value){
            return value;
        },
        indexByValue: function (value){
            for (var i=0; i<this.items.length; i++) {
                if (value == this.items[i].value) {
                    return i;
                }
            }
            return -1;
        },
        getItem: function (index){
            return this.items[index];
        },
        selectByIndex: function (index){
            if (index < this.items.length && this.fireEvent('select', index) !== false) {
                this.selectedIndex = index;
                this.value = this.items[index].value;
                this.setLabel(this.items[index].label);
            }
        }
    };
    utils.inherits(Combox, SplitButton);
})();

///import core
///import uicore
///import ui/mask.js
///import ui/button.js
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        Mask = baidu.editor.ui.Mask,
        UIBase = baidu.editor.ui.UIBase,
        Button = baidu.editor.ui.Button,
        Dialog = baidu.editor.ui.Dialog = function (options){
            this.initOptions(options);
            this.initDialog();
        };
    var modalMask;
    var dragMask;
    Dialog.prototype = {
        draggable: false,
        uiName: 'dialog',
        initDialog: function (){
            var me = this;
            this.initUIBase();
            this.modalMask = (modalMask || (modalMask = new Mask({
                className: 'edui-dialog-modalmask'
            })));
            this.dragMask = (dragMask || (dragMask = new Mask({
                className: 'edui-dialog-dragmask'
            })));
            this.closeButton = new Button({
                className: 'edui-dialog-closebutton',
                title: '�رնԻ���',
                onclick: function (){
                    me.close(false);
                }
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    if (!(this.buttons[i] instanceof Button)) {
                        this.buttons[i] = new Button(this.buttons[i]);
                    }
                }
            }
        },
        fitSize: function (){
            var popBodyEl = this.getDom('body');
//            if (!(baidu.editor.browser.ie && baidu.editor.browser.version == 7)) {
//                uiUtils.removeStyle(popBodyEl, 'width');
//                uiUtils.removeStyle(popBodyEl, 'height');
//            }
            var size = this.mesureSize();
            popBodyEl.style.width = size.width + 'px';
            popBodyEl.style.height = size.height + 'px';
            return size;
        },
        safeSetOffset: function (offset){
            var me = this;
            var el = me.getDom();
            var vpRect = uiUtils.getViewportRect();
            var rect = uiUtils.getClientRect(el);
            var left = offset.left;
            if (left + rect.width > vpRect.right) {
                left = vpRect.right - rect.width;
            }
            var top = offset.top;
            if (top + rect.height > vpRect.bottom) {
                top = vpRect.bottom - rect.height;
            }
            el.style.left = Math.max(left, 0) + 'px';
            el.style.top = Math.max(top, 0) + 'px';
        },
        showAtCenter: function (){
            this.getDom().style.display = '';
            var vpRect = uiUtils.getViewportRect();
            var popSize = this.fitSize();
            var titleHeight = this.getDom('titlebar').offsetHeight | 0;
            var left = vpRect.width / 2 - popSize.width / 2;
            var top = vpRect.height / 2 - (popSize.height - titleHeight) / 2 - titleHeight;
            var popEl = this.getDom();
            this.safeSetOffset({
                left: Math.max(left | 0, 0),
                top: Math.max(top | 0, 0)
            });
            if (!domUtils.hasClass(popEl, 'edui-state-centered')) {
                popEl.className += ' edui-state-centered';
            }
            this._show();
        },
        getContentHtml: function (){
            var contentHtml = '';
            if (typeof this.content == 'string') {
                contentHtml = this.content;
            } else if (this.iframeUrl) {
                contentHtml = '<iframe id="'+ this.id +
                    '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+ this.iframeUrl +'"></iframe>';
            }
            return contentHtml;
        },
        getHtmlTpl: function (){
            var footHtml = '';
            if (this.buttons) {
                var buff = [];
                for (var i=0; i<this.buttons.length; i++) {
                    buff[i] = this.buttons[i].renderHtml();
                }
                footHtml = '<div class="%%-foot">' +
                     '<div id="##_buttons" class="%%-buttons">' + buff.join('') + '</div>' +
                    '</div>';
            }
            return '<div id="##" class="%%"><div class="%%-wrap"><div id="##_body" class="%%-body">' +
                '<div class="%%-shadow"></div>' +
                '<div id="##_titlebar" class="%%-titlebar">' +
                '<div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);">' +
                 '<span class="%%-caption">' + (this.title || '') + '</span>' +
                '</div>' +
                this.closeButton.renderHtml() +
                '</div>' +
                '<div id="##_content" class="%%-content">'+ ( this.autoReset ? '' : this.getContentHtml()) +'</div>' +
                footHtml +
                '</div></div></div>';
        },
        postRender: function (){
            // todo: ���־���/��ס�ϴιر�λ��ѡ��
            if (!this.modalMask.getDom()) {
                this.modalMask.render();
                this.modalMask.hide();
            }
            if (!this.dragMask.getDom()) {
                this.dragMask.render();
                this.dragMask.hide();
            }
            var me = this;
            this.addListener('show', function (){
                me.modalMask.show(this.getDom().style.zIndex - 2);
            });
            this.addListener('hide', function (){
                me.modalMask.hide();
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    this.buttons[i].postRender();
                }
            }
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me.safeSetOffset(uiUtils.getClientRect(me.getDom()));
                    }
                });
            });
            this._hide();
        },
        mesureSize: function (){
            var body = this.getDom('body');
            var width = uiUtils.getClientRect(this.getDom('content')).width;
            var dialogBodyStyle = body.style;
            dialogBodyStyle.width = width;
            return uiUtils.getClientRect(body);
        },
        _onTitlebarMouseDown: function (evt, el){
            if (this.draggable) {
                var rect;
                var vpRect = uiUtils.getViewportRect();
                var me = this;
                uiUtils.startDrag(evt, {
                    ondragstart: function (){
                        rect = uiUtils.getClientRect(me.getDom());

                        me.dragMask.show(me.getDom().style.zIndex - 1);
                    },
                    ondragmove: function (x, y){
                        var left = rect.left + x;
                        var top = rect.top + y;
                        me.safeSetOffset({
                            left: left,
                            top: top
                        });
                    },
                    ondragstop: function (){
                        domUtils.removeClasses(me.getDom(), ['edui-state-centered']);
                        me.dragMask.hide();
                    }
                });
            }
        },
        reset: function (){
            this.getDom('content').innerHTML = this.getContentHtml();
        },
        _show: function (){
            if (this._hidden) {
                this.getDom().style.display = '';
                //Ҫ�߹��༭����zindxe
                this.editor.container.style.zIndex && (this.getDom().style.zIndex = this.editor.container.style.zIndex * 1 + 10);
                this._hidden = false;
                this.fireEvent('show');
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex - 4;
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        _hide: function (){
            if (!this._hidden) {
                this.getDom().style.display = 'none';
                this.getDom().style.zIndex = '';
                this._hidden = true;
                this.fireEvent('hide');
            }
        },
        open: function (){
            if (this.autoReset) {
                this.reset();
            }
            this.showAtCenter();
            if (this.iframeUrl) {
                try {
                    this.getDom('iframe').focus();
                } catch(ex){}
            }
        },
        _onCloseButtonClick: function (evt, el){
            this.close(false);
        },
        close: function (ok){
            if (this.fireEvent('close', ok) !== false) {
                this._hide();
            }
        }
    };
    utils.inherits(Dialog, UIBase);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        MenuButton = baidu.editor.ui.MenuButton = function (options){
            this.initOptions(options);
            this.initMenuButton();
        };
    MenuButton.prototype = {
        initMenuButton: function (){
            var me = this;
            this.uiName = "menubutton";
            this.popup = new Menu({
                items: me.items,
                className: me.className,
                editor:me.editor
            });
            this.popup.addListener('show', function (){
                var list = this;
                for (var i=0; i<list.items.length; i++) {
                    list.items[i].removeState('checked');
                    if (list.items[i].value == me._value) {
                        list.items[i].addState('checked');
                        this.value = me._value;
                    }
                }
            });
            this.initSplitButton();
        },
        setValue : function(value){
            this._value = value;
        }
        
    };
    utils.inherits(MenuButton, SplitButton);
})();
(function (){
    var isIE = baidu.editor.browser.ie;
    var utils = baidu.editor.utils;
    var editorui = baidu.editor.ui;
    var _Dialog = editorui.Dialog;
    editorui.Dialog = function (options){
        var dialog = new _Dialog(options);
        dialog.addListener('hide', function (){
            if (dialog.editor) {
                var editor = dialog.editor;
                try {
                    editor.focus()
                } catch(ex){}
            }
        });
        return dialog;
    };

    var k, cmd;

    var btnCmds = ['Undo', 'Redo','FormatMatch',
        'Bold', 'Italic', 'Underline',
        'StrikeThrough', 'Subscript', 'Superscript','Source','Indent','Outdent',
        'BlockQuote','PastePlain','PageBreak',
        'SelectAll', 'Print', 'Preview', 'Horizontal', 'RemoveFormat','Time','Date','Unlink',
        'InsertParagraphBeforeTable','InsertRow','InsertCol','MergeRight','MergeDown','DeleteRow',
        'DeleteCol','SplittoRows','SplittoCols','SplittoCells','MergeCells','DeleteTable'];
    k = btnCmds.length;
    while (k --) {
        cmd = btnCmds[k];
        editorui[cmd] = function (cmd){
            return function (editor, title){
                title = title || editor.options.labelMap[cmd.toLowerCase()] || '';
                var ui = new editorui.Button({
                    className: 'edui-for-' + cmd.toLowerCase(),
                    title: title,
                    onclick: function (){
                        editor.execCommand(cmd);
                    },
                    showText: false
                });
                editor.addListener('selectionchange', function (type, causeByUi, uiReady){
                    var state = editor.queryCommandState(cmd.toLowerCase());
                    if (state == -1) {
                        ui.setDisabled(true);
                        ui.setChecked(false);
                    } else {
                        
                        if(!uiReady){
                            ui.setDisabled(false);
                            ui.setChecked(state);
                        }

                    }
                });
                return ui;
            };
        }(cmd);
    }
    editorui.SnapScreen = function(editor, title){
        var cmd = "SnapScreen";
        title = title || editor.options.labelMap[cmd.toLowerCase()] || '';
        var ui = new editorui.Button({
            className: 'edui-for-' + cmd.toLowerCase(),
            title: title,
            onclick: function (){
                editor.execCommand(cmd);
            }
        });

        if(isIE){
            var iframeUrl = editor.options.iframeUrlMap['snapscreen'];
            iframeUrl = editor.ui.mapUrl(iframeUrl);
            title = title || editor.options.labelMap['snapscreen'] || '';
            var dialog = new editorui.Dialog({
                iframeUrl: iframeUrl,
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-snapscreen',
                title: title,
                buttons: [{
                    className: 'edui-okbutton',
                    label: 'ȷ��',
                    onclick: function (){
                        dialog.close(true);
                    }
                }, {
                    className: 'edui-cancelbutton',
                    label: 'ȡ��',
                    onclick: function (){
                        dialog.close(false);
                    }
                }],
                onok: function (){},
                oncancel: function (){},
                onclose: function (t, ok){
                    if (ok) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }
            });
            dialog.render();
            editor.snapscreenInstall = dialog;
        }
        editor.addListener('selectionchange',function(){
            var state = editor.queryCommandState('snapscreen');
            ui.setDisabled(state == -1);
        });
        return ui;
    };
    editorui.ClearDoc = function(editor, title){
        var cmd = "ClearDoc";
        title = title || editor.options.labelMap[cmd.toLowerCase()] || '';
        var ui = new editorui.Button({
            className: 'edui-for-' + cmd.toLowerCase(),
            title: title,
            onclick: function (){
                if(confirm('ȷ������ĵ���')){
                    editor.execCommand('cleardoc');
                }
            }
        });
        editor.addListener('selectionchange',function(){
            var state = editor.queryCommandState('cleardoc');
            ui.setDisabled(state == -1);
        });
        return ui;
    };

    editorui.Justify = function (editor, side, title){
        side = (side || 'left').toLowerCase();
        title = title || editor.options.labelMap['justify'+side.toLowerCase()] || '';
        var ui = new editorui.Button({
            className: 'edui-for-justify' + side.toLowerCase(),
            title: title,
            onclick: function (){
                editor.execCommand('Justify', side);
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady){
            var state = editor.queryCommandState('Justify');
            ui.setDisabled(state == -1);
            var value = editor.queryCommandValue('Justify');
            ui.setChecked(value == side && !uiReady);
        });
        return ui;
    };
    editorui.JustifyLeft = function (editor, title){
        return editorui.Justify(editor, 'left', title);
    };
    editorui.JustifyCenter = function (editor, title){
        return editorui.Justify(editor, 'center', title);
    };
    editorui.JustifyRight = function (editor, title){
        return editorui.Justify(editor, 'right', title);
    };
    editorui.JustifyJustify = function (editor, title){
        return editorui.Justify(editor, 'justify', title);
    };
    editorui.ImageFloat = function(editor,side,title){
        side = (side || 'none').toLowerCase();
        title = title || editor.options.labelMap['image'+side.toLowerCase()] || '';
        var ui = new editorui.Button({
            className: 'edui-for-image' + side.toLowerCase(),
            title: title,
            onclick: function (){
                editor.execCommand('imagefloat', side);
            }
        });
        editor.addListener('selectionchange', function (type){
            var state = editor.queryCommandState('imagefloat');
            ui.setDisabled(state == -1);
            var state = editor.queryCommandValue('imagefloat');
            ui.setChecked(state == side);
        });
        return ui;
    };
    editorui.ImageNone = function(editor,title){
        return editorui.ImageFloat(editor, title);
    };
    editorui.ImageLeft = function(editor,title){
        return editorui.ImageFloat(editor,"left", title);
    };
    editorui.ImageRight = function(editor,title){
        return editorui.ImageFloat(editor,"right", title);
    };
    editorui.ImageCenter = function(editor,title){
        return editorui.ImageFloat(editor,"center", title);
    };

    editorui.Directionality = function (editor, side, title){
        side = (side || 'left').toLowerCase();
        title = title || editor.options.labelMap['directionality'+side.toLowerCase()] || '';
        var ui = new editorui.Button({
            className: 'edui-for-directionality' + side.toLowerCase(),
            title: title,
            onclick: function (){
                editor.execCommand('directionality', side);
            },
            type : side
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady){
            var state = editor.queryCommandState('directionality');
            ui.setDisabled(state == -1);
            var value = editor.queryCommandValue('directionality');
            ui.setChecked(value == ui.type && !uiReady);
        });
        return ui;
    };
    editorui.DirectionalityLtr = function (editor, title){
        return new editorui.Directionality(editor, 'ltr', title);
    };
    editorui.DirectionalityRtl = function (editor, title){
        return new editorui.Directionality(editor, 'rtl', title);
    };
    var colorCmds = ['BackColor', 'ForeColor'];
    k = colorCmds.length;
    while (k --) {
        cmd = colorCmds[k];
        editorui[cmd] = function (cmd){
            return function (editor, title){
                title = title || editor.options.labelMap[cmd.toLowerCase()] || '';
                var ui = new editorui.ColorButton({
                    className: 'edui-for-' + cmd.toLowerCase(),
                    color: 'default',
                    title: title,
                    editor:editor,
                    onpickcolor: function (t, color){
                        editor.execCommand(cmd, color);
                    },
                    onpicknocolor: function (){
                        editor.execCommand(cmd, 'default');
                        this.setColor('transparent');
                        this.color = 'default';
                    },
                    onbuttonclick: function (){
                        editor.execCommand(cmd, this.color);
                    }
                });
                editor.addListener('selectionchange', function (){
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                    }
                });
                return ui;
            };
        }(cmd);
    }

    //����Ҫȷ��ȡ����ť��dialog
    var dialogNoButton = ['SearchReplace','Help','Spechars'];
    k = dialogNoButton.length;
    while(k --){
        cmd = dialogNoButton[k];
        editorui[cmd] = function (cmd){
            cmd = cmd.toLowerCase();
            return function (editor, iframeUrl, title){
                iframeUrl = iframeUrl || editor.options.iframeUrlMap[cmd.toLowerCase()] || 'about:blank';
                iframeUrl = editor.ui.mapUrl(iframeUrl);
                title = title || editor.options.labelMap[cmd.toLowerCase()] || '';
                var dialog = new editorui.Dialog({
                    iframeUrl: iframeUrl,
                    autoReset: true,
                    draggable: true,
                    editor: editor,
                    className: 'edui-for-' + cmd,
                    title: title,
                    onok: function (){},
                    oncancel: function (){},
                    onclose: function (t, ok){
                        if (ok) {
                            return this.onok();
                        } else {
                            return this.oncancel();
                        }
                    }
                });
                dialog.render();
                var ui = new editorui.Button({
                    className: 'edui-for-' + cmd,
                    title: title,
                    onclick: function (){
                        dialog.open();
                    }
                });
                editor.addListener('selectionchange', function (){
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                    }
                });
                return ui;
            };
        }(cmd);
    }

    var dialogCmds = ['Attachment','Anchor','Link', 'InsertImage', 'Map', 'GMap', 'InsertVideo','TableSuper','HighlightCode','InsertFrame','EditTd'];
    
    k = dialogCmds.length;
    while (k --) {
        cmd = dialogCmds[k];
        editorui[cmd] = function (cmd){
            cmd = cmd.toLowerCase();
            return function (editor, iframeUrl, title){
            
                iframeUrl = iframeUrl || editor.options.iframeUrlMap[cmd.toLowerCase()] || 'about:blank';
                iframeUrl = editor.ui.mapUrl(iframeUrl);
                title = title || editor.options.labelMap[cmd.toLowerCase()] || '';
                var dialog = new editorui.Dialog({
                    iframeUrl: iframeUrl,
                    autoReset: true,
                    draggable: true,
                    editor: editor,
                    className: 'edui-for-' + cmd,
                    title: title,
                    buttons: [{
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function (){
                            dialog.close(true);
                        }
                    }, {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function (){
                            dialog.close(false);
                        }
                    }],
                    onok: function (){},
                    oncancel: function (){},
                    onclose: function (t, ok){
                        if (ok) {
                            return this.onok();
                        } else {
                            return this.oncancel();
                        }
                    }
                });
                dialog.render();
                var ui = new editorui.Button({
                    className: 'edui-for-' + cmd,
                    title: title,
                    onclick: function (){
                        dialog.open();
                    }
                });
                editor.addListener('selectionchange', function (){
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {

                        ui.setChecked(state);
                        

                        ui.setDisabled(false);
                    }
                });
                return ui;
            };
        }(cmd);
    }
    editorui.WordImage = function(editor){
        var ui = new editorui.Button({
            className: 'edui-for-wordimage',
            title: "ͼƬת��",
            onclick: function (){
                editor.execCommand("wordimage","word_img");
                editor.ui._dialogs['wordImageDialog'].open();

            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState("wordimage","word_img");
            //if(console)console.log(state);
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                ui.setChecked(state);
            }
        });
        return ui;
    };

    editorui.FontFamily = function (editor, list, title){
        list = list || editor.options.listMap['fontfamily'] || [];
        title = title || editor.options.labelMap['fontfamily'] || '';
        var items = [];
        for (var i=0; i<list.length; i++) {
            var font = list[i];
            var fonts = editor.options.fontMap[font];
            var value = '"' + font + '"';
            var regex = new RegExp(font, 'i');
            if (fonts) {
                value = '"' + fonts.join('","') + '"';
                regex = new RegExp('(?:\\|)' + fonts.join('|') + '(?:\\|)', 'i');
            }
            items.push({
                label: font,
                value: value,
                regex: regex,
                renderLabelHtml: function (){
                    return '<div class="edui-label %%-label" style="font-family:' +
                        utils.unhtml(this.value) + '">' + (this.label || '') + '</div>';
                }
            });
        }
        var ui = new editorui.Combox({
            editor:editor,
            items: items,
            onselect: function (t,index){
                editor.execCommand('FontFamily', this.items[index].value);
            },
            onbuttonclick: function (){
                this.showPopup();
            },
            title: title,
            initValue: editor.options.ComboxInitial.FONT_FAMILY,
            className: 'edui-for-fontfamily',
            indexByValue: function (value){
                if(value){
                    value = '|' + value.replace(/,/g, '|').replace(/"/g, '') + '|';
                    value.replace(/\s*|\s*/g, '|');
                    for (var i=0; i<this.items.length; i++) {
                        var item = this.items[i];
                        if (item.regex.test(value)) {
                            return i;
                        }
                    }
                }

                return -1;
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady){
            if(!uiReady){
                var state = editor.queryCommandState('FontFamily');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('FontFamily');
                    //trace:1871 ie�´�Դ��ģʽ�л�����ʱ�������������ţ����һ��ж���
                    value && (value = value.replace(/['"]/g,'').split(',')[0]);
                    ui.setValue( value);

                }
            }

        });
        return ui;
    };

    editorui.FontSize = function (editor, list, title){
        list = list || editor.options.listMap['fontsize'] || [];
        title = title || editor.options.labelMap['fontsize'] || '';
        var items = [];
        for (var i=0; i<list.length; i++) {
            var size = list[i] + 'px';
            items.push({
                label: size,
                value: size,
                renderLabelHtml: function (){
                    return '<div class="edui-label %%-label" style="font-size:' +
                        this.value + '">' + (this.label || '') + '</div>';
                }
            });
        }
        var ui = new editorui.Combox({
            editor:editor,
            items: items,
            title: title,
            initValue: editor.options.ComboxInitial.FONT_SIZE,
            onselect: function (t,index){
                editor.execCommand('FontSize', this.items[index].value);
            },
            onbuttonclick: function (){
                this.showPopup();
            },
            className: 'edui-for-fontsize'
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady){
            if(!uiReady){
                var state = editor.queryCommandState('FontSize');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    ui.setValue(editor.queryCommandValue('FontSize'));
                } 
            }

        });
        return ui;
    };
//    editorui.RowSpacing = function (editor, list, title){
//        list = list || editor.options.listMap['rowspacing'] || [];
//        title = title || editor.options.labelMap['rowspacing'] || '';
//        var items = [];
//        for (var i=0; i<list.length; i++) {
//            var tag = list[i] + 'px';
//            var value = list[i];
//            items.push({
//                label: tag,
//                value: value,
//                renderLabelHtml: function (){
//                    return '<div class="edui-label %%-label" style="font-size:12px">' + (this.label || '') + '</div>';
//                }
//            });
//        }
//        var ui = new editorui.Combox({
//            editor:editor,
//            items: items,
//            title: title,
//            initValue: editor.options.ComboxInitial.ROW_SPACING,
//            onselect: function (t,index){
//                editor.execCommand('RowSpacing', this.items[index].value);
//            },
//            onbuttonclick: function (){
//                this.showPopup();
//            },
//            className: 'edui-for-rowspacing'
//        });
//        editor.addListener('selectionchange', function (type, causeByUi, uiReady){
//            if(!uiReady){
//                var state = editor.queryCommandState('RowSpacing');
//                if (state == -1) {
//                    ui.setDisabled(true);
//                } else {
//                    ui.setDisabled(false);
//                    ui.setValue(editor.queryCommandValue('RowSpacing'));
//                }
//            }
//
//        });
//        return ui;
//    };
    editorui.Paragraph = function (editor, list, title){
        list = list || editor.options.listMap['paragraph'] || [];
        title = title || editor.options.labelMap['paragraph'] || '';
        var items = [];
        for (var i=0; i<list.length; i++) {
            var item = list[i].split(':');
            var tag = item[0];
            var label = item[1];
            items.push({
                label: label,
                value: tag,
                renderLabelHtml: function (){
                    return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || '') + '</span></div>';
                }
            });
        }
        var ui = new editorui.Combox({
            editor:editor,
            items: items,
            title: title,
            initValue: editor.options.ComboxInitial.PARAGRAPH,
            className: 'edui-for-paragraph',
            onselect: function (t,index){
                editor.execCommand('Paragraph', this.items[index].value);
            },
            onbuttonclick: function (){
                this.showPopup();
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady){
            if(!uiReady){
                var state = editor.queryCommandState('Paragraph');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('Paragraph');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };


    //�Զ������
    editorui.CustomStyle = function(editor,list,title){
        list = list || editor.options.listMap['customstyle'] || [];
        title = title || editor.options.labelMap['customstyle'] || '';

        for(var i=0,items = [],t;t=list[i++];){
            (function(ti){
                items.push({
                    label: ti.label,
                    value: ti,
                    renderLabelHtml: function (){
                        return '<div class="edui-label %%-label">' +'<'+ ti.tag +' ' + (ti.className?' class="'+ti.className+'"':"")
                            + (ti.style ? ' style="' + ti.style+'"':"") + '>' + ti.label+"<\/"+ti.tag+">"
                            + '</div>';
                    }
                });
            })(t)

        }
      
        var ui = new editorui.Combox({
            editor:editor,
            items: items,
            title: title,
            initValue:editor.options.ComboxInitial.CUSTOMSTYLE,
            className: 'edui-for-customstyle',
            onselect: function (t,index){
                editor.execCommand('customstyle', this.items[index].value);
            },
            onbuttonclick: function (){
                this.showPopup();
            },
            indexByValue: function (value){
                for(var i=0,ti;ti=this.items[i++];){
                    if(ti.label == value){
                        return i-1
                    }
                }
                return -1;
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady){
            if(!uiReady){
                var state = editor.queryCommandState('customstyle');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('customstyle');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };
    editorui.InsertTable = function (editor, iframeUrl, title){
        iframeUrl = iframeUrl || editor.options.iframeUrlMap['inserttable'] || 'about:blank';
        iframeUrl = editor.ui.mapUrl(iframeUrl);
        title = title || editor.options.labelMap['inserttable'] || '';
        var dialog = new editorui.Dialog({
            iframeUrl: iframeUrl,
            autoReset: true,
            draggable: true,
            editor: editor,
            className: 'edui-for-inserttable',
            title: title,
            buttons: [{
                className: 'edui-okbutton',
                label: 'ȷ��',
                onclick: function (){
                    dialog.close(true);
                }
            }, {
                className: 'edui-cancelbutton',
                label: 'ȡ��',
                onclick: function (){
                    dialog.close(false);
                }
            }],
            onok: function (){},
            oncancel: function (){},
            onclose: function (t,ok){
                if (ok) {
                    return this.onok();
                } else {
                    return this.oncancel();
                }
            }
        });
        dialog.render();
        editor.tableDialog = dialog;
        var ui = new editorui.TableButton({
            editor:editor,
            title: title,
            className: 'edui-for-inserttable',
            onpicktable: function (t,numCols, numRows){
                editor.execCommand('InsertTable', {numRows:numRows, numCols:numCols});
            },
            onmore: function (){
                dialog.open();
            },
            onbuttonclick: function (){
                dialog.open();
            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState('inserttable');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
            }
        });
        return ui;
    };


    editorui.AutoTypeSet = function (editor, iframeUrl, title){
        title = title || editor.options.labelMap['autotypeset'] || '';
        var ui = new editorui.AutoTypeSetButton({
            editor:editor,
            title: title,
            className: 'edui-for-autotypeset',
            onbuttonclick: function (){
                editor.execCommand('autotypeset')
            }
        });
        editor.addListener('selectionchange', function (){
            ui.setDisabled(editor.queryCommandState('autotypeset') == -1);
        });
        return ui;
    };


    editorui.LineHeight = function (editor, title){
        for(var i=0,ci,items=[];ci = editor.options.listMap.lineheight[i++];){
            items.push({
                //todo:д����
                label : ci == '1' ? 'Ĭ��' : ci,
                value: ci,
                onclick:function(){
                    editor.execCommand("lineheight", this.value);
                }
            })
        }
        var ui = new editorui.MenuButton({
            editor:editor,
            className : 'edui-for-lineheight',
            title : title || editor.options.labelMap['lineheight'] || '',
            items :items,
            onbuttonclick: function (){
                var value = editor.queryCommandValue('LineHeight') || this.value;
                editor.execCommand("LineHeight", value);
            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState('LineHeight');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('LineHeight');
                value && ui.setValue((value + '').replace(/cm/,''));
                ui.setChecked(state)
            }
        });
        return ui;
    };
    editorui.RowSpacingTop = function (editor, title){
        for(var i=0,ci,items=[];ci = editor.options.listMap.rowspacing[i++];){
            items.push({
                label : ci,
                value: ci,
                onclick:function(){
                    editor.execCommand("rowspacing", this.value,'top');
                }
            })
        }
        var ui = new editorui.MenuButton({
            editor:editor,
            className : 'edui-for-rowspacingtop',
            title : title || editor.options.labelMap['rowspacingtop'] || '��ǰ���',
            items :items,
            onbuttonclick: function (){
                var value = editor.queryCommandValue('rowspacing','top') || this.value;
                editor.execCommand("rowspacing", value,'top');
            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState('rowspacing','top');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('rowspacing','top');
                value && ui.setValue((value + '').replace(/%/,''));
                ui.setChecked(state)
            }
        });
        return ui;
    };
    editorui.RowSpacingBottom = function (editor, title){
        for(var i=0,ci,items=[];ci = editor.options.listMap.rowspacing[i++];){
            items.push({
                label : ci,
                value: ci,
                onclick:function(){
                    editor.execCommand("rowspacing", this.value,'bottom');
                }
            })
        }
        var ui = new editorui.MenuButton({
            editor:editor,
            className : 'edui-for-rowspacingbottom',
            title : title || editor.options.labelMap['rowspacingbottom'] || '�κ���',
            items :items,
            onbuttonclick: function (){
                var value = editor.queryCommandValue('rowspacing','bottom') || this.value;
                editor.execCommand("rowspacing", value,'bottom');
            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState('rowspacing','bottom');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('rowspacing','bottom');
                value && ui.setValue((value + '').replace(/%/,''));
                ui.setChecked(state)
            }
        });
        return ui;
    };
    editorui.InsertOrderedList = function (editor, title){
        title = title || editor.options.labelMap['insertorderedlist'] || '';
        var _onMenuClick = function(){
            editor.execCommand("InsertOrderedList", this.value);
        };
        var ui = new editorui.MenuButton({
            editor:editor,
            className : 'edui-for-insertorderedlist',
            title : title,
            items :
                [{
                    label: '1,2,3...',
                    value: 'decimal',
                    onclick : _onMenuClick
                },{
                    label: 'a,b,c ...',
                    value: 'lower-alpha',
                    onclick : _onMenuClick
                },{
                    label: 'i,ii,iii...',
                    value: 'lower-roman',
                    onclick : _onMenuClick
                },{
                    label: 'A,B,C',
                    value: 'upper-alpha',
                    onclick : _onMenuClick
                },{
                    label: 'I,II,III...',
                    value: 'upper-roman',
                    onclick : _onMenuClick
                }],
            onbuttonclick: function (){
                var value = editor.queryCommandValue('InsertOrderedList') || this.value;
                editor.execCommand("InsertOrderedList", value);
            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState('InsertOrderedList');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('InsertOrderedList');
                ui.setValue(value);
                 ui.setChecked(state)
            }
        });
        return ui;
    };

    editorui.InsertUnorderedList = function (editor, title){
        title = title || editor.options.labelMap['insertunorderedlist'] || '';
        var _onMenuClick = function(){
            editor.execCommand("InsertUnorderedList", this.value);
        };
        var ui = new editorui.MenuButton({
            editor:editor,
            className : 'edui-for-insertunorderedlist',
            title: title,
            items:
                [{
                    label: '�� СԲȦ',
                    value: 'circle',
                    onclick : _onMenuClick
                },{
                    label: '�� СԲ��',
                    value: 'disc',
                    onclick : _onMenuClick
                },{
                    label: '�� С����',
                    value: 'square',
                    onclick : _onMenuClick
                }],
            onbuttonclick: function (){
                var value = editor.queryCommandValue('InsertUnorderedList') || this.value;
                editor.execCommand("InsertUnorderedList", value);
            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState('InsertUnorderedList');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('InsertUnorderedList');
                ui.setValue(value);
                ui.setChecked(state)
            }
        });
        return ui;
    };
    
    editorui.FullScreen = function (editor, title){
        title = title || editor.options.labelMap['fullscreen'] || '';
        var ui = new editorui.Button({
            className: 'edui-for-fullscreen',
            title: title,
            onclick: function (){
                if (editor.ui) {
                    editor.ui.setFullScreen(!editor.ui.isFullScreen());
                }
                this.setChecked(editor.ui.isFullScreen());
            }
        });
        editor.addListener('selectionchange', function (){
            var state = editor.queryCommandState('fullscreen');
            ui.setDisabled(state == -1);
            ui.setChecked(editor.ui.isFullScreen());
        });
        return ui;
    };

    
    editorui.Emotion = function(editor, iframeUrl, title){
        title = title || editor.options.labelMap['emotion'] || '';
        iframeUrl = iframeUrl || editor.options.iframeUrlMap['emotion'] || 'about:blank';
        iframeUrl = editor.ui.mapUrl(iframeUrl);
        var ui = new editorui.MultiMenuPop({
            title: title,
            editor: editor,
            className: 'edui-for-emotion',
            iframeUrl: iframeUrl
        });
        editor.addListener('selectionchange', function (){

            var state = editor.queryCommandState('emotion');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
            }
        });
        return ui; 
    };
})();

///import core
///commands ȫ��
///commandsName FullScreen
///commandsTitle  ȫ��
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase;

    function EditorUI( options ) {
        this.initOptions( options );
        this.initEditorUI();
    }

    EditorUI.prototype = {
        uiName: 'editor',
        initEditorUI: function () {
            this.editor.ui = this;
            this._dialogs = {};
            this.initUIBase();
            this._initToolbars();
            var editor = this.editor,
                    iframeUrlMap = editor.options.iframeUrlMap;
            editor.addListener( 'ready', function () {
                baidu.editor.dom.domUtils.on( editor.window, 'scroll', function () {
                    baidu.editor.ui.Popup.postHide();
                } );

                //display bottom-bar label based on config
                if ( editor.options.elementPathEnabled ) {
                    editor.ui.getDom( 'elementpath' ).innerHTML = '<div class="edui-editor-breadcrumb">path:</div>';
                }
                if ( editor.options.wordCount ) {
                    editor.ui.getDom( 'wordcount' ).innerHTML = '����ͳ��';
                }

                if(!editor.selection.isFocus())return;
                editor.fireEvent( 'selectionchange', false, true );
            } );
            editor.addListener( 'mousedown', function ( t, evt ) {
                var el = evt.target || evt.srcElement;
                baidu.editor.ui.Popup.postHide( el );
            } );
            editor.addListener( 'contextmenu', function ( t, evt ) {
                baidu.editor.ui.Popup.postHide();
            } );
            var me = this;
            editor.addListener( 'selectionchange', function () {
                if(!editor.selection.isFocus())return;
                me._updateElementPath();
                //����ͳ��
                me._wordCount();
            } );
            editor.addListener( 'sourcemodechanged', function ( t, mode ) {
                if ( editor.options.elementPathEnabled ) {
                    if ( mode ) {
                        me.disableElementPath();
                    } else {
                        me.enableElementPath();
                    }
                }
                if ( editor.options.wordCount ) {
                    if ( mode ) {
                        me.disableWordCount();
                    } else {
                        me.enableWordCount();
                    }
                }


            } );
            // �����ӵı༭������
            var linkDialog = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap ? editor.ui.mapUrl(iframeUrlMap.link ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-link',
                title: '������',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            linkDialog.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            linkDialog.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }

            } );
            linkDialog.render();
            // ͼƬ�ı༭������
            var imgDialog = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap?editor.ui.mapUrl(iframeUrlMap.insertimage ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-insertimage',
                title: 'ͼƬ',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            imgDialog.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            imgDialog.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }

            } );
            imgDialog.render();
            //ê��
            var anchorDialog = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap?editor.ui.mapUrl( iframeUrlMap.anchor ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-anchor',
                title: 'ê��',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            anchorDialog.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            anchorDialog.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }

            } );
            anchorDialog.render();
            // video
            var videoDialog = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap?editor.ui.mapUrl( iframeUrlMap.insertvideo ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-insertvideo',
                title: '��Ƶ',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            videoDialog.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            videoDialog.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }

            } );
            videoDialog.render();

            //����wordͼƬ�ϴ�
            var wordImageDialog = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap?editor.ui.mapUrl( iframeUrlMap.wordimage ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-wordimage',
                title: 'ͼƬת��',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            wordImageDialog.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            wordImageDialog.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }
            } );
            wordImageDialog.render();
            //����dialog��uiʵ��
            me._dialogs['wordImageDialog'] = wordImageDialog;

            var tdDialog = new baidu.editor.ui.Dialog({
                iframeUrl: iframeUrlMap?me.mapUrl(iframeUrlMap['edittd']):'about:blank',
                autoReset: true,
                draggable: true,
                editor:editor,
                className: 'edui-for-edittd',
                title: "��Ԫ��",
                buttons: [{
                    className: 'edui-okbutton',
                    label: 'ȷ��',
                    onclick: function (){
                        tdDialog.close(true);
                    }
                }, {
                    className: 'edui-cancelbutton',
                    label: 'ȡ��',
                    onclick: function (){
                        tdDialog.close(false);
                    }
                }],
                onok: function (){},
                oncancel: function (){},
                onclose: function (t,ok){
                    if (ok) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }
            });
            tdDialog.render();
            me._dialogs['tdDialog'] = tdDialog;

            // map
            var mapDialog = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap?editor.ui.mapUrl(iframeUrlMap.map ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-map',
                title: '��ͼ',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            mapDialog.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            mapDialog.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }

            } );
            mapDialog.render();
            // map
            var gmapDialog = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap?editor.ui.mapUrl( iframeUrlMap.gmap ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-gmap',
                title: 'Google��ͼ',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            gmapDialog.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            gmapDialog.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }

            } );
            gmapDialog.render();
            var popup = new baidu.editor.ui.Popup( {
                editor:editor,
                content: '',
                className: 'edui-bubble',
                _onEditButtonClick: function () {
                    this.hide();
                    linkDialog.open();
                },
                _onImgEditButtonClick: function () {
                    this.hide();
                    var nodeStart = editor.selection.getRange().getClosedNode();
                    var img = baidu.editor.dom.domUtils.findParentByTagName( nodeStart, "img", true );
                    if ( img && img.className.indexOf( "edui-faked-video" ) != -1 ) {
                        videoDialog.open();
                    } else if ( img && img.src.indexOf( "http://api.map.baidu.com" ) != -1 ) {
                        mapDialog.open();
                    } else if ( img && img.src.indexOf( "http://maps.google.com/maps/api/staticmap" ) != -1 ) {
                        gmapDialog.open();
                    } else if ( img && img.getAttribute( "anchorname" ) ) {
                        anchorDialog.open();
                    }else if(img && img.getAttribute("word_img")){
                        editor.word_img = [img.getAttribute("word_img")];
                        editor.ui._dialogs["wordImageDialog"].open();
                    } else {
                        imgDialog.open();
                    }

                },
                _getImg: function () {
                    var img = editor.selection.getRange().getClosedNode();
                    if ( img && (img.nodeName == 'img' || img.nodeName == 'IMG') ) {
                        return img;
                    }
                    return null;
                },
                _onImgSetFloat: function( value ) {
                    if ( this._getImg() ) {
                        editor.execCommand( "imagefloat", value );
                        var img = this._getImg();
                        if ( img ) {
                            this.showAnchor( img );
                        }
                    }
                },
                _setIframeAlign: function( value ) {
                    var frame = popup.anchorEl;
                    var newFrame = frame.cloneNode( true );
                    switch ( value ) {
                        case -2:
                            newFrame.setAttribute( "align", "" );
                            break;
                        case -1:
                            newFrame.setAttribute( "align", "left" );
                            break;
                        case 1:
                            newFrame.setAttribute( "align", "right" );
                            break;
                        case 2:
                            newFrame.setAttribute( "align", "middle" );
                            break;
                    }
                    frame.parentNode.insertBefore( newFrame, frame );
                    baidu.editor.dom.domUtils.remove( frame );
                    popup.anchorEl = newFrame;
                    popup.showAnchor( popup.anchorEl );
                },
                _updateIframe: function() {
                    editor._iframe = popup.anchorEl;
                    insertframe.open();
                    popup.hide();
                },
                _onRemoveButtonClick: function () {
                    var nodeStart = editor.selection.getRange().getClosedNode();
                    var img = baidu.editor.dom.domUtils.findParentByTagName( nodeStart, "img", true );
                    if ( img && img.getAttribute( "anchorname" ) ) {
                        editor.execCommand( "anchor" );
                    } else {
                        editor.execCommand( 'unlink' );
                    }
                    this.hide();
                },
                queryAutoHide: function ( el ) {
                    if ( el && el.ownerDocument == editor.document ) {
                        if ( el.tagName.toLowerCase() == 'img' || baidu.editor.dom.domUtils.findParentByTagName( el, 'a', true ) ) {
                            return el !== popup.anchorEl;
                        }
                    }
                    return baidu.editor.ui.Popup.prototype.queryAutoHide.call( this, el );
                }
            } );
            popup.render();
            //iframe
            var insertframe = new baidu.editor.ui.Dialog( {
                iframeUrl: iframeUrlMap?editor.ui.mapUrl( iframeUrlMap.insertframe ):"",
                autoReset: true,
                draggable: true,
                editor: editor,
                className: 'edui-for-insertframe',
                title: '����iframe',
                buttons: [
                    {
                        className: 'edui-okbutton',
                        label: 'ȷ��',
                        onclick: function () {
                            insertframe.close( true );
                        }
                    },
                    {
                        className: 'edui-cancelbutton',
                        label: 'ȡ��',
                        onclick: function () {
                            insertframe.close( false );
                        }
                    }
                ],
                onok: function () {
                },
                oncancel: function () {
                },
                onclose: function ( t, ok ) {
                    if ( ok ) {
                        return this.onok();
                    } else {
                        return this.oncancel();
                    }
                }

            } );
            insertframe.render();
            editor.addListener( 'mouseover', function( t, evt ) {
                evt = evt || window.event;
                var el = evt.target || evt.srcElement;
                if ( /iframe/ig.test( el.tagName ) && editor.options.imagePopup ) {
                    var html = popup.formatHtml(
                        '<nobr>����: <span onclick=$$._setIframeAlign(-2) class="edui-clickable">Ĭ��</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">�����</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">�Ҷ���</span>&nbsp;&nbsp;' +
                            '<span onclick=$$._setIframeAlign(2) class="edui-clickable">����</span>' +
                            ' <span onclick="$$._updateIframe( this);" class="edui-clickable">�޸�</span></nobr>' );
                    if ( html ) {
                        popup.getDom( 'content' ).innerHTML = html;
                        popup.anchorEl = el;
                        popup.showAnchor( popup.anchorEl );
                    } else {
                        popup.hide();
                    }
                }
            } );
            editor.addListener( 'selectionchange', function ( t, causeByUi ) {
                if ( !causeByUi ) return;
                var html = '';
                var img = editor.selection.getRange().getClosedNode();
                if ( img != null && img.tagName.toLowerCase() == 'img' ) {
                    if ( img.getAttribute( 'anchorname' ) ) {
                        //ê�㴦��
                        html += popup.formatHtml(
                            '<nobr>����: <span onclick=$$._onImgEditButtonClick(event) class="edui-clickable">�޸�</span>&nbsp;&nbsp;<span onclick=$$._onRemoveButtonClick(event) class="edui-clickable">ɾ��</span></nobr>' );
                    } else if ( editor.options.imagePopup ) {
                        html += popup.formatHtml(
                            '<nobr>����: <span onclick=$$._onImgSetFloat("none") class="edui-clickable">Ĭ��</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("left") class="edui-clickable">����</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("right") class="edui-clickable">����</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._onImgSetFloat("center") class="edui-clickable">����</span>' +
                                ' <span onclick="$$._onImgEditButtonClick(event, this);" class="edui-clickable">�޸�</span></nobr>' );
                    }
                }
                var link;
                if ( editor.selection.getRange().collapsed ) {
                    link = editor.queryCommandValue( "link" );
                } else {
                    link = editor.selection.getStart();
                }
                link = baidu.editor.dom.domUtils.findParentByTagName( link, "a", true );
                var url;
                if ( link != null && (url = (link.getAttribute( 'data_ue_src' ) || link.getAttribute( 'href', 2 ))) != null ) {
                    var txt = url;
                    if ( url.length > 30 ) {
                        txt = url.substring( 0, 20 ) + "...";
                    }
                    if ( html ) {
                        html += '<div style="height:5px;"></div>'
                    }
                    html += popup.formatHtml(
                        '<nobr>����: <a target="_blank" href="' + url + '" title="' + url + '" >' + txt + '</a>' +
                            ' <span class="edui-clickable" onclick="$$._onEditButtonClick(event, this);">�޸�</span>' +
                            ' <span class="edui-clickable" onclick="$$._onRemoveButtonClick(event, this);"> ���</span></nobr>' );
                    popup.showAnchor( link );
                }
                if ( html ) {
                    popup.getDom( 'content' ).innerHTML = html;
                    popup.anchorEl = img || link;
                    popup.showAnchor( popup.anchorEl );
                } else {
                    popup.hide();
                }
            } );
        },
        _initToolbars: function () {
            var editor = this.editor;
            var toolbars = this.toolbars || [];
            var toolbarUis = [];
            for ( var i = 0; i < toolbars.length; i++ ) {
                var toolbar = toolbars[i];
                var toolbarUi = new baidu.editor.ui.Toolbar();
                for ( var j = 0; j < toolbar.length; j++ ) {
                    var toolbarItem = toolbar[j];
                    var toolbarItemUi = null;
                    if ( typeof toolbarItem == 'string' ) {
                        if ( toolbarItem == '|' ) {
                            toolbarItem = 'Separator';
                        }

                        if ( baidu.editor.ui[toolbarItem] ) {
                            toolbarItemUi = new baidu.editor.ui[toolbarItem]( editor );
                        }

                        //todo fullscreen���ﵥ������һ�£��ŵ�����ȥ
                        if ( toolbarItem == 'FullScreen' ) {
                            if ( toolbarUis && toolbarUis[0] ) {
                                toolbarUis[0].items.splice( 0, 0, toolbarItemUi );
                            } else {
                                toolbarUi.items.splice( 0, 0, toolbarItemUi );
                            }

                            continue;


                        }
                    } else {
                        toolbarItemUi = toolbarItem;
                    }
                    if ( toolbarItemUi ) {
                        toolbarUi.add( toolbarItemUi );
                    }
                }
                toolbarUis[i] = toolbarUi;
            }
            this.toolbars = toolbarUis;
        },
        getHtmlTpl: function () {
            return '<div id="##" class="%%">' +
                '<div id="##_toolbarbox" class="%%-toolbarbox">' +
                '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' +
                this.renderToolbarBoxHtml() +
                '</div></div>' +
                '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;">' +
                '<div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">����ϴ�</div>' +
                '<div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div>' +
                '<div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div>' +
                '<div style="height:0;overflow:hidden;clear:both;"></div>' +
                '</div>' +
                '</div>' +
                '<div id="##_iframeholder" class="%%-iframeholder"></div>' +
                //modify wdcount by matao
                '<div id="##_bottombar" class="%%-bottomContainer"><table><tr>' +
                '<td id="##_elementpath" class="%%-bottombar"></td>' +
                '<td id="##_wordcount" class="%%-wordcount"></td>' +
                '</tr></table></div>' +
                '</div>';
        },
        showWordImageDialog:function() {
            this.editor.execCommand( "wordimage", "word_img" );
            this._dialogs['wordImageDialog'].open();
        },
        renderToolbarBoxHtml: function () {
            var buff = [];
            for ( var i = 0; i < this.toolbars.length; i++ ) {
                buff.push( this.toolbars[i].renderHtml() );
            }
            return buff.join( '' );
        },
        setFullScreen: function ( fullscreen ) {

            if ( this._fullscreen != fullscreen ) {
                this._fullscreen = fullscreen;
                this.editor.fireEvent( 'beforefullscreenchange', fullscreen );
                var editor = this.editor;

                if ( baidu.editor.browser.gecko ) {
                    var bk = editor.selection.getRange().createBookmark();
                }

                if ( fullscreen ) {

                    this._bakHtmlOverflow = document.documentElement.style.overflow;
                    this._bakBodyOverflow = document.body.style.overflow;
                    this._bakAutoHeight = this.editor.autoHeightEnabled;
                    this._bakScrollTop = Math.max( document.documentElement.scrollTop, document.body.scrollTop );
                    if ( this._bakAutoHeight ) {
                        //��ȫ��ʱ����ִ���Զ�����
                        editor.autoHeightEnabled = false;
                        this.editor.disableAutoHeight();
                    }

                    document.documentElement.style.overflow = 'hidden';
                    document.body.style.overflow = 'hidden';

                    this._bakCssText = this.getDom().style.cssText;
                    this._bakCssText1 = this.getDom( 'iframeholder' ).style.cssText;
                    this._updateFullScreen();

                } else {


                    this.getDom().style.cssText = this._bakCssText;
                    this.getDom( 'iframeholder' ).style.cssText = this._bakCssText1;
                    if ( this._bakAutoHeight ) {
                        editor.autoHeightEnabled = true;
                        this.editor.enableAutoHeight();
                    }
                    document.documentElement.style.overflow = this._bakHtmlOverflow;
                    document.body.style.overflow = this._bakBodyOverflow;
                    window.scrollTo( 0, this._bakScrollTop );
                }
                if ( baidu.editor.browser.gecko ) {

                    var input = document.createElement( 'input' );

                    document.body.appendChild( input );

                    editor.body.contentEditable = false;
                    setTimeout( function() {

                        input.focus();
                        setTimeout( function() {
                            editor.body.contentEditable = true;
                            editor.selection.getRange().moveToBookmark( bk ).select( true );
                            baidu.editor.dom.domUtils.remove( input );

                            fullscreen && window.scroll( 0, 0 );

                        } )

                    } )
                }

                this.editor.fireEvent( 'fullscreenchanged', fullscreen );
                this.triggerLayout();
            }
        },
        _wordCount:function() {
            var wdcount = this.getDom( 'wordcount' );
            if ( !this.editor.options.wordCount ) {
                wdcount.style.display = "none";
                return;
            }
            wdcount.innerHTML = this.editor.queryCommandValue( "wordcount" );
        },
        disableWordCount: function () {
            var w = this.getDom( 'wordcount' );
            w.innerHTML = '';
            w.style.display = 'none';
            this.wordcount = false;

        },
        enableWordCount: function () {
            var w = this.getDom( 'wordcount' );
            w.style.display = '';
            this.wordcount = true;
            this._wordCount();
        },
        _updateFullScreen: function () {
            if ( this._fullscreen ) {
                var vpRect = uiUtils.getViewportRect();
                this.getDom().style.cssText = 'border:0;position:absolute;left:0;top:0;width:' + vpRect.width + 'px;height:' + vpRect.height + 'px;z-index:' + (this.getDom().style.zIndex * 1 + 100);
                uiUtils.setViewportOffset( this.getDom(), { left: 0, top: 0 } );
                this.editor.setHeight( vpRect.height - this.getDom( 'toolbarbox' ).offsetHeight - this.getDom( 'bottombar' ).offsetHeight );

            }
        },
        _updateElementPath: function () {
            var bottom = this.getDom( 'elementpath' ),list;
            if ( this.elementPathEnabled && (list = this.editor.queryCommandValue( 'elementpath' ))) {

                var buff = [];
                for ( var i = 0,ci; ci = list[i]; i++ ) {
                    buff[i] = this.formatHtml( '<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + i + '&quot;);">' + ci + '</span>' );
                }
                bottom.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">path: ' + buff.join( ' &gt; ' ) + '</div>';

            } else {
                bottom.style.display = 'none'
            }
        },
        disableElementPath: function () {
            var bottom = this.getDom( 'elementpath' );
            bottom.innerHTML = '';
            bottom.style.display = 'none';
            this.elementPathEnabled = false;

        },
        enableElementPath: function () {
            var bottom = this.getDom( 'elementpath' );
            bottom.style.display = '';
            this.elementPathEnabled = true;
            this._updateElementPath();
        },
        isFullScreen: function () {
            return this._fullscreen;
        },
        postRender: function () {
            UIBase.prototype.postRender.call( this );
            for ( var i = 0; i < this.toolbars.length; i++ ) {
                this.toolbars[i].postRender();
            }
            var me = this;
            var timerId,
                domUtils = baidu.editor.dom.domUtils,
                updateFullScreenTime = function() {
                    clearTimeout( timerId );
                    timerId = setTimeout( function () {
                        me._updateFullScreen();
                    } );
                };
            domUtils.on( window, 'resize', updateFullScreenTime );

            me.addListener( 'destroy', function() {
                domUtils.un( window, 'resize', updateFullScreenTime );
                clearTimeout( timerId );
            } )
        },
        showToolbarMsg: function ( msg, flag ) {
            this.getDom( 'toolbarmsg_label' ).innerHTML = msg;
            this.getDom( 'toolbarmsg' ).style.display = '';
            //
            if ( !flag ) {
                var w = this.getDom( 'upload_dialog' );
                w.style.display = 'none';
            }
        },
        hideToolbarMsg: function () {
            this.getDom( 'toolbarmsg' ).style.display = 'none';
        },
        mapUrl: function ( url ) {
            return url.replace( '~/', this.editor.options.UEDITOR_HOME_URL || '' );
        },
        triggerLayout: function () {
            var dom = this.getDom();
            if ( dom.style.zoom == '1' ) {
                dom.style.zoom = '100%';
            } else {
                dom.style.zoom = '1';
            }
        }
    };
    utils.inherits( EditorUI, baidu.editor.ui.UIBase );

    baidu.editor.ui.Editor = function ( options ) {

        var editor = new baidu.editor.Editor( options );
        editor.options.editor = editor;
        new EditorUI( editor.options );


        var oldRender = editor.render;
        editor.render = function ( holder ) {

            if ( holder ) {
                if ( holder.constructor === String ) {
                    holder = document.getElementById( holder );
                }
                holder && holder.getAttribute( 'name' ) && ( editor.options.textarea = holder.getAttribute( 'name' ));
                if ( holder && /script|textarea/ig.test( holder.tagName ) ) {
                    var newDiv = document.createElement( 'div' );
                    holder.parentNode.insertBefore( newDiv, holder );
                    editor.options.initialContent = holder.value || holder.innerHTML;

                    holder.id && (newDiv.id = holder.id);

                    holder.className && (newDiv.className = holder.className);
                    holder.style.cssText && (newDiv.style.cssText = holder.style.cssText);
                    holder.parentNode.removeChild( holder );
                    holder = newDiv;
                    holder.innerHTML = '';
                }

            }

            editor.ui.render( holder );
            var iframeholder = editor.ui.getDom( 'iframeholder' );
            //��ʵ�����һ���༭������������
            editor.container = editor.ui.getDom();
            editor.container.style.zIndex = editor.options.zIndex;
            oldRender.call( editor, iframeholder );
        };
        return editor;
    };
})();
///import core
///import uicore
 ///commands ����
(function(){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        SplitButton = baidu.editor.ui.SplitButton,
        MultiMenuPop = baidu.editor.ui.MultiMenuPop = function(options){
            this.initOptions(options);
            this.initMultiMenu();
        };

    MultiMenuPop.prototype = {
        initMultiMenu: function (){
            var me = this;
            this.popup = new Popup({
                content: '',
                editor : me.editor,
                iframe_rendered: false,
                onshow: function (){
                    if (!this.iframe_rendered) {
                        this.iframe_rendered = true;
                        this.getDom('content').innerHTML = '<iframe id="'+me.id+'_iframe" src="'+ me.iframeUrl +'" frameborder="0"></iframe>';
                        me.editor.container.style.zIndex && (this.getDom().style.zIndex = me.editor.container.style.zIndex * 1 + 1);
                    }
                }
               // canSideUp:false,
               // canSideLeft:false
            });
            this.onbuttonclick = function(){
                this.showPopup();
            };
            this.initSplitButton();
        }

    };

    utils.inherits(MultiMenuPop, SplitButton);
})();
})();
