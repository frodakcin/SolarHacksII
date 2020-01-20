var headerBar = document.getElementById("headerBar");
var headerYOffset = headerBar.offsetTop;
function stickyHeaderCheck()
{
	if(window.pageYOffset > headerYOffset)
	{
		headerBar.classList.remove("headerNoStick");
		headerBar.classList.add("headerStick");
	}
	else
	{
		headerBar.classList.remove("headerStick");
		headerBar.classList.add("headerNoStick");
	}
}



window.onscroll = function()
{
	stickyHeaderCheck();
};

function FAQDrop(item)
{
	para = item.children[1];
	if(para.classList.contains("FAQBoxOnP"))
	{
		item.classList.remove("FAQBoxOn");
		para.classList.remove("FAQBoxOnP");
	}
	else
	{
		item.classList.add("FAQBoxOn");
		para.classList.add("FAQBoxOnP");
	}
}	