var count = 0;
var count1 = 0;
$(document).ready(function(){
	$("#btn-submit").click(function(){
		var task = $("#taskname").val();
		if(task == ""){
			swal("Please Specify Task Name","","error");
			$("#taskname").css({"border":"1px solid #cd201f"});
			$("#taskname").val("");
			$("#taskname").focus();
			return false;
		}else{
			//$("#task").append(task);
			var tk_id = "tk"+count;
			count++;
			var divBody = "<div class='card col-md-6' id='"+tk_id+"' style='margin:0 auto;margin-bottom:25px;'><div class='card-body'><input type='checkbox' onclick='move(this)'>&nbsp;&nbsp;"+$("#taskname").val()+"</div></div>";
			$("#task").append(divBody);
			$("#taskname").val("");
		}
	});
	$("#btn-reset").click(function(){
		$("#taskname").val("");
		$("#taskname").css({"border":"1px solid #ccc"});
	});
});
function move(a){
	var move_task = $(a).parent().parent().attr("id");
	var temp = $(a).parent().text();
	swal({title:"The Task Name -"+temp});
	$(a).parent().parent().remove();
	//alert("The Task Name :"+temp);
	//alert(move_task);
	var tk1_id = "tk"+count1;
	count1++;
	var divbody = "<div class='card col-md-6' id='"+tk1_id+"' style='margin:0 auto;margin-bottom:25px;'><div class='card-body'>"+temp+"<button class='close' onclick='remove(this)'>&times;</button></div></div>";
	$("#complete").append(divbody);
}
function remove(b){
	var task_done = $(b).parent().parent().attr("id");
	var task_done_name = $(b).parent().text();
	//alert(task_done);
	swal({title:"The Task -"+task_done_name+"is Completely Removed Successfully"});
	$(b).parent().parent().remove();
}