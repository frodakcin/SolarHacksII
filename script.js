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
window.onscroll = stickyHeaderCheck;


function FAQDrop(item)
{
	par = item.parentElement;
	sib = par.children[1];
	if(sib.classList.contains("FAQBoxOnP"))
	{
		sib.classList.remove("FAQBoxOnP");
		par.classList.remove("FAQBoxOn");
	}
	else
	{
		sib.classList.add("FAQBoxOnP");
		par.classList.add("FAQBoxOn");
	}
}	