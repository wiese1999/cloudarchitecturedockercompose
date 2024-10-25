# Use Maven 3.9.5 with Adoptium OpenJDK 17
FROM maven:3.9.5-eclipse-temurin-17 AS build

# Set working directory
WORKDIR /app

# Copy the pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Use Eclipse Temurin OpenJDK 17 runtime from Adoptium
FROM eclipse-temurin:17-jdk-noble

# Copy the jar file from the build stage
COPY --from=build /app/target/cloudarchitecturedockercompose-0.0.1-SNAPSHOT.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app.jar"]
