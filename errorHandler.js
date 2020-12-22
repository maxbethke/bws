var pushError = (err) => {
    /*
        object errorObj:
        {
            code: "A User-friendly errorcode" (Req when calling)
            text: "errormessage that gets displayed to the user" (Req when calling)
            id: "UUID returned by the server side error handler"
            info: "technical information about the error that is displayed to the user"
            debug: "technical information for redugging purposes"
        }
    */

    $("#wprError #errorCode").text(err.code || "Unknown");
    $("#wprError #errorText").text(err.text || "Unknown");
    $("#wprError").show();

    $.ajax({
        url: "ajaxErrorHandler.php",
        method: "POST",
        data: {
            ts: new Date(),
            code: err.code,
            debuginfo: err.debuginfo
        },
        success: (res) => {
            ret = JSON.parse(res);

            err.id = ret["id"];
            $("#wprError #errorId").text(err.id);
        }
    });
}