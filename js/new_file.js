//方法1：
/*
$(clickMe).on('click', function(){
	$(popover).show()
})

$(wrapper).on('click', function(e){
	e.stopPropagation()
})

$(document).one('click', function(){
		$(popover).hide()
	})
*/


//方法2

$(clickMe).on('click', function(){
	$(popover).show()
	$(document).one('click', function(){
		$(popover).hide()
	})
})

$(wrapper).on('click', function(e){
	e.stopPropagation()
})




//方法3:
/*
$(clickMe).on('click', function(){
	$(popover).show()
	setTimeout(function(){
		$(document).one('click', function(){
			$(popover).hide()
		})
	},3000)
})
*/