#FROM openjdk:latest
#WORKDIR /root/hello-world
#COPY helloworld.java /root/hello-world
#RUN apk add openjdk8
#ENV JAVA_HOME C:\Program Files\Java\jdk1.8.0_211
#ENV PATH $PATH C:\Program Files\Java\jdk1.8.0_211\bin
#RUN javac Hello
#ENTRYPOINT [ "Hello.java" ]

FROM openjdk:latest
WORKDIR /usr/src/myapp
COPY . /usr/src/myapp
ENV JAVA_HOME C:\Program Files\Java\jdk1.8.0_211
ENV PATH $PATH C:\Program Files\Java\jdk1.8.0_211\bin
RUN javac Hello.java
CMD ["java", "Hello"]
EXPOSE 8080

#to run java program in  a container
#we need to pull an openjdk image from dockerhub
#then create a workdirectory
#copy everything from the current directory to the workdirectory
#setup the environment and provide further commands.