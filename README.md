## Adopt Me! Bluegrass Pet Rescue  

Website redesign of [http://www.adoptmebluegrasspetrescue.com/] used as a project for my Code Louisville Frontend Web Design course.

### How to view

Because my site utilizes AJAX requests for some of the functionality it must be viewed from a web server. The easiest way for me to distribute this was to use Docker.

1) Install docker from https://www.docker.com/products/overview  
2) Clone the project repository to your computer  
3) CD to the project directory  
4) Run the command below replacing {image-name} with the name you want to give it:  
```docker build -t {image-name} .```    
EXAMPLE  
```docker build -t webpreview .```  
5) Now create a docker container from the image we just created to host and view the website using the command below replacing {containerName} with a name of your choosing:  
```docker run -p 127.0.0.1:90:80 --name {containerName} {image-name}```  
EXAMPLE  
```docker run -p 127.0.0.1:90:80 --name webContainer1 webpreview```  
6) Now you should be able to view the website by opening a browser and going to http://localhost:90
