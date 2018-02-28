var count=0;
$(document).ready(function(){
	$("#btnSubmit").click(function(){
		var NewTask = $("#taskName").val();
		var NewDate = $("#taskDate").val();
		var NewDesc = $("#taskDesc").val();
		if(NewTask==""){
			swal({title:"",text:"Enter Task Name",type:"error",showConfirmButton:false,timer:2000});
			$("#taskName").css({"border":"1px solid #cd201f"});
			$("#taskName").focus();
			return false;
		}
		if(NewDate==""){
			swal({title:"",text:"Select Task Date",type:"error",showConfirmButton:false,timer:2000});
			$("#taskDate").css({"border":"1px solid #cd201f"});
			$("#taskDate").focus();
			return false;
		}
		if(NewDesc==""){
			swal({title:"",text:"Describe About your Task",type:"error",showConfirmButton:false,timer:2000});
			$("#taskDesc").css({"border":"1px solid #cd201f"});
			$("#taskDesc").focus();
			return false;
		}
		else{
			$("#taskName").val("");
			$("#taskName").css({"border":"1px solid #ccc"});
			$("#taskDate").val("");
			$("#taskDate").css({"border":"1px solid #ccc"});
			$("#taskDesc").val("");
			$("#taskDesc").css({"border":"1px solid #ccc"});
			var pend_id = "tk"+count;
			count++;
			var taskDiv = "<div class='card' id='"+pend_id+"'><div class='card-body'><input type='checkbox' onclick='move(this)'>&nbsp;&nbsp;"+NewDate+";</br>Task Name : "+NewTask+".</br>Task Description : "+NewDesc+".</div></div></br>";
			$("#pend_task").append(taskDiv);
		}
});
	$("#btnReset").click(function(){
		$("#taskName").css({"border":"1px solid #ccc"});
	});
});

function move(a){
	var move_taskid = $(a).parent().parent().attr("id");
	var move_taskName = $(a).parent().text();
	//alert(move_taskid);
	//alert(move_taskName);
	swal({title:"",text:"Task Has Been Moved to Completed Task",type:"success",showConfirmButton:false,timer:2000});
	var comp_taskid = "compTask"+count;
	count++;
	var comp_taskDiv = "<div class='card' id='"+comp_taskid+"'><div class='card-body'>"+move_taskName+"<button class='close' onclick='remove(this)'>&times;</button></div></div>";
	$("#comp_task").append(comp_taskDiv);
	$(a).parent().parent().remove();
}

function remove(b){
	var done_task = $(b).parent().parent().attr("id");
	swal({title:"",text:"The Task Has Been Removed Successfully",type:"success",showConfirmButton:false,timer:2000});
	//alert(done_task);
	$(b).parent().parent().remove();
	
}