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
/*
$(clickMe).on('click', function(){
	$(popover).show()
	$(document).one('click', function(){
		$(popover).hide()
	})
})

$(wrapper).on('click', function(e){
	e.stopPropagation()
})
*/



//方法3:

var flag = false
var timer
$(clickMe).on('click', () => {
  console.log(flag)
  if (!flag) {
    $(popover).show()
    flag = true
    timer=setTimeout(() => {
      $(document).one('click', () => {
        $(popover).hide()
        flag = false
      })
    }, 0)
  } else {
    $(popover).hide()
    flag = false
    $(document).off('click')
  }
})

$(wrapper).on('click',(e)=>{
  e.stopPropagation()
})
