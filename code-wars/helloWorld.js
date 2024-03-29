const greet = () => {
	let bigGreet = `                                     
  h    # ###### #      #       ####  
  #    # e      #      #      #    # 
  ###### #####  l      #      #    # 
  #    # #      #      l      #    # 
  #    # #      #      #      o    # 
  #    # ###### ###### ######  ####  

                  !                  ### 
  w    #  ####  #####  #      #####  ### 
  #    # o    # #    # #      #    # ### 
  #    # #    # r    # #      #    #  #  
  # ## # #    # #####  l      #    #     
  ##  ## #    # #   #  #      d    # ### 
  #    #  ####  #    # ###### #####  !## 
  `;

	return bigGreet
		.split("")
		.filter((char) => char.match(/[a-z]|[!]/))
		.join("")
		.replace("!", " ");
};

console.log(greet());
