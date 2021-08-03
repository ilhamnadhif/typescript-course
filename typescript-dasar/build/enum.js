"use strict";
// Enum
// numeric enum
{
    var Month = void 0;
    (function (Month) {
        Month[Month["JAN"] = 1] = "JAN";
        Month[Month["FEB"] = 10] = "FEB";
        Month[Month["MAR"] = 6] = "MAR";
        Month[Month["APR"] = 7] = "APR";
        Month[Month["MAY"] = 8] = "MAY";
    })(Month || (Month = {}));
    console.log(Month);
}
// string enum
{
    var Month = void 0;
    (function (Month) {
        Month["JAN"] = "Januari";
        Month["FEB"] = "Februari";
        Month["MAR"] = "Maret";
        Month["APR"] = "April";
        Month["MAY"] = "Mei";
    })(Month || (Month = {}));
    console.log(Month);
}
