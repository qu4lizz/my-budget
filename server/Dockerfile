FROM maven:3.9.8-amazoncorretto-17-al2023 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

FROM amazoncorretto:17.0.12-al2023-headless
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
COPY --from=build /app/src /app/src
COPY --from=build /app/pom.xml /app/pom.xml
COPY .env /app/.env
EXPOSE 8081
ENTRYPOINT ["java", "-Dspring.devtools.restart.enabled=true", "-jar", "app.jar"]
