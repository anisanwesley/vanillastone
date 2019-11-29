Log = {
    todo: function(text){
        if(App.log.todo){
            console.log('TODO:: '+ text)
        }
    },
    event: function(text){
        if(App.log.event){
            console.log('EVENT:: '+ text)
        }
    },
    trace: function(text, args){
        if(App.log.trace){
            if(args){
                console.log('TRACE:: '+ text + '. args:', args)
            } else {
                console.log('TRACE:: '+ text)
            }
        }
    },
    create: function(text){
        if(App.log.create){
            console.log('CREATE:: '+ text)
        }
    },
    error: function(text, object){
        if(App.log.error){
            console.error('ERROR:: '+ text, object)
        }
    },
    table: function(array, properties, description){
        if(App.log.table){
            console.log(description)
            console.table(array, properties)
        }
    },
}