# QA Automation Framework

A scalable Selenium Automation Framework built using Java, Selenium WebDriver, TestNG, and Page Object Model (POM). This framework demonstrates industry-standard automation architecture with reusable components, centralized driver management, explicit waits, and maintainable test design.

## Framework Architecture

The framework follows a layered architecture:

```text
TestNG Test
    ↓
BaseTest
    ↓
DriverFactory
    ↓
Page Objects
    ↓
BasePage Actions
    ↓
Selenium WebDriver
    ↓
Assertions
    ↓
Results & Reporting
```

## Tech Stack

* Java
* Selenium WebDriver
* TestNG
* Maven
* Page Object Model (POM)
* WebDriverManager
* Git & GitHub

## Project Structure

```text
src
├── main
│   ├── java
│   │   ├── core
│   │   │   ├── config
│   │   │   └── utils
│   │   ├── ui
│   │   │   ├── base
│   │   │   ├── drivers
│   │   │   └── pages
│   └── resources
│       └── config.properties
│
└── test
    └── java
        └── ui
            └── tests
```

## Key Components

### BaseTest

Provides common setup and teardown functionality for all test classes.

### DriverFactory

Centralized WebDriver initialization and browser management.

### Page Objects

Encapsulates locators and page-specific actions to improve maintainability.

### BasePage

Contains reusable Selenium actions and utility methods.

### Wait Utilities

Explicit wait implementation for handling dynamic web elements.

### Assertions

TestNG assertions used for validation and result verification.

## Implemented Test Scenarios

### Launch Application Test

* Launch application
* Verify successful page load

### Add Employee Test

* Login to application
* Navigate to PIM module
* Add employee
* Verify successful creation

### Employee Personal Details Test

* Login to application
* Update employee information
* Verify successful update

## Design Principles

* Page Object Model (POM)
* Separation of Concerns
* Reusability
* Maintainability
* Scalability
* Single Responsibility Principle

## How To Run

### Clone Repository

```bash
git clone https://github.com/VinayO7/qa-automation-framework.git
```

### Navigate To Project

```bash
cd qa-automation-framework
```

### Execute Tests

```bash
mvn test
```

## Future Enhancements

* Cross-browser execution
* Selenium Grid integration
* Extent Reports
* Allure Reports
* CI/CD integration using GitHub Actions
* Data-driven testing
* Parallel execution

## Author

**Vinay Nalavade**

QA Engineer | Automation Testing | Selenium | Java | API Testing

LinkedIn:
https://www.linkedin.com/in/vinaynalavade/

Portfolio:
https://vinayo7.github.io/vinay-portfolio/
