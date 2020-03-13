# How to run this java file in  a docker container

## 1. Write the application first
## 2. Create a file named Dockerfile without any extension
## 3. Within the dockerfile:
     FROM <base image>: <tag> \\specifying a base image to pull from dockerhub
     WORKDIR path //create a workdirectory for docker
     COPY . workdirectory // copy everything from current directory to the work directory 
     ENV JAVA_HOME <url>
     ENV PATH $PATH <url>  \\check these in your environment variables
     RUN <command>
     CMD <command>

## After this we build the dockerfile:

$docker build -t imagename:tag <location>
-> docker build -t java:test .

## After the build finishes we run the image

$docker run --it imagename:tag

-> docker run -it java:test


