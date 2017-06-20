function summit(){
	var yourname = document.getElementById('yourname').value
	var yourcomment = document.getElementById('yourcomment').value
	var name = document.createTextNode("Name: " + yourname)
	var comment = document.createTextNode("Comment: " + yourcomment)
	
    var commentlist = document.createElement('li')
    var newname = document.createElement('h1')
    var newcomment = document.createElement('p')

    newname.appendChild(name)
    newcomment.appendChild(comment)
    commentlist.appendChild(newname)
    commentlist.appendChild(newcomment)
	document.getElementById('commentlist').appendChild(commentlist)
	
}