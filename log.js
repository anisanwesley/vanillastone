Log = {
    settings: {
        todo :false,
        event : true,
        trace : false,
        create : false,
        error : true,
    },
    todo: function(text){
        if(Log.settings.todo){
            console.log('TODO:: '+ text)
        }
    },
    event: function(text){
        if(Log.settings.event){
            console.log('EVENT:: '+ text)
        }
    },
    trace: function(text, args){
        if(Log.settings.trace){
            if(args){
                console.log('TRACE:: '+ text + 'args:' + args.toString())
            } else {
                console.log('TRACE:: '+ text)
            }
        }
    },
    create: function(text){
        if(Log.settings.create){
            console.log('CREATE:: '+ text)
        }
    },
    error: function(text){
        if(Log.settings.error){
            console.log('ERROR:: '+ text)
        }
    },
}