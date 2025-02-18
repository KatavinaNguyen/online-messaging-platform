FROM maven:3.8.1-openjdk-11 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:22-jdk
COPY --from=build /target/online_messaging-0.0.1-SNAPSHOT.jar online_messaging.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","online_messaging.jar"]