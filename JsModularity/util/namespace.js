var namespace = (function() {

    var global = window || {},
        namespace;

    namespace = function (nsString) {
        var module = global,
            parts = nsString.split('.');

        for (var i = 0, len = parts.length; i < len; ++i) {
            var part = parts[i];

            module[part] = module[part] || {};
            module = module[part];
        }
    };

    return namespace;
})();
