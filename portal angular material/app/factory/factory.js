 // Service definition
 mainModule.factory('Language', function ($translate) {
     var rtlLanguages = ['ar'];

     var isRtl = function () {
         var languageKey = $translate.proposedLanguage() || $translate.use();
         for (var i = 0; i < rtlLanguages.length; i += 1) {
             if (languageKey.indexOf(rtlLanguages[i]) > -1)
                 return true;
         }
         return false;
     };

     //public api
     return {
         isRtl: isRtl
     };
 });