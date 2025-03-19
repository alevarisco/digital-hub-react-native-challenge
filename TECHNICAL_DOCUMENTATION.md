
---

### `TECHNICAL_DOCUMENTATION.md`

This file explains the architectural decisions, technologies employed, and assumptions made.

```markdown
# Technical Documentation

## Introduction

This document outlines the architectural decisions, technologies, and assumptions made during the development of the React Native Brand Management App. The project follows Clean Architecture principles to ensure separation of concerns, modularity, and maintainability.

---

## Architecture: Clean Architecture

The project is structured using Clean Architecture, which separates the codebase into layers with well-defined responsibilities. This approach was chosen to make the app modular, testable, and independent of frameworks and external systems.

### Layers of Clean Architecture
1. **Entities**:
   - Represent the core business models.
   - In this project, entities are simple data structures for brands (e.g., `{ id, nombre, pais, tipo, descripcion, anioFundacion }`).
   - Location: `src/services/brand/brand.interface.tsx` (assumed, as entities are typically plain data objects in React Native).

2. **Use Cases**:
   - Contain the business logic and application-specific rules.
   - Examples: `brandUseCase`, `deleteBrandUseCase`, `detailBrandUseCase`.
   - These use cases interact with repositories to fetch or manipulate data, ensuring the business logic is independent of the data source.

3. **Interface Adapters**:
   - Convert data between the use cases and the frameworks (e.g., UI, Redux).
   - Redux slices (`tableSlice`, `brandSlice`, `languageSlice`).
   - Redux was chosen for state management to handle the app's state (e.g., brand data, pagination) in a predictable way.

4. **Frameworks & Drivers**:
   - Include external systems like the API client.
   - The `apiClient` handles HTTP requests to the local server, and `brandRepository` abstracts the data source.

5. **Components**: 
    - The UI views are found on `src/ui/pages` (`Home`, `DataList`, `DataForm`, `DataDetail`, `Gelocalization` and `Settings`).
     - The UI components are found on `src/ui/components` (`Button`, `Content`, `Navigation`, `Table`, `Text-Area`, `Text-Input` and `Title`).

### Why Clean Architecture?
- Clean Architecture makes it easier to scale the app by adding new features or entities without introducing complexity or technical debt. The app can grow in complexity without becoming unmanageable, which is crucial for a project that may evolve over time.

---

## Technology Stack

### 1. React Native
- **Why Chosen**: React Native allows cross-platform development for Android and iOS with a single codebase, reducing development time and effort.

### 2. Redux
- **Why Chosen**: Redux provides a predictable state management solution, ideal for managing the app's state (e.g., brand data, pagination, loading states).

### 3. Axios
- **Why Chosen**: Axios is a robust HTTP client with features like interceptors, error handling, and a clean API, making it ideal for API requests.

### 4. React Navigation
- **Why Chosen**: React Navigation is the de facto standard for navigation in React Native, offering a flexible and well-documented solution.

### 5. `react-i18next`
- **Why Chosen**: Provides a robust solution for internationalization, allowing the app to support multiple languages.

### 6. `@react-native-community/geolocation`
- **Why Chosen**: A lightweight library for accessing geolocation data, with good community support.

---

## Key Technical Decisions

### 1. API Connectivity
- **Decision**: Used `axios` with a dynamic `baseURL` (`10.0.2.2:45500` for Android, `localhost:45500` for iOS) to handle API requests.
- **Reason**: Android emulators require `10.0.2.2` to access the host machine's localhost, while iOS emulators can use `localhost` directly.
- **Challenge**: Android blocks HTTP traffic by default, so I enabled `cleartextTraffic` in `AndroidManifest.xml`.

### 2. Responsive UI
- **Decision**: Made the UI responsive using `Dimensions` for dynamic styling.
- **Reason**: Fixed the fontSize ensure a consistent between the screen sizes. 

### 3. Geolocation
- **Decision**: Used `@react-native-community/geolocation` for location data, with permissions configured for both Android and iOS.
- **Reason**: The library is lightweight and well-supported, fitting the app's needs for basic geolocation.
- **Challenge**: For both devices, you should handle the permissions.

### 4. State Management
- **Decision**: Used Redux with slices (`tableSlice`, `brandSlice`, `languageSlice`) to manage state.
- **Reason**: Redux ensures predictable state updates, which is crucial for features like pagination, sorting, and API data.

### 5. Build Configuration
- **Decision**: Configured the JDK and Android SDK to resolve build errors.
- **Reason**: Gradle requires a JDK, and the error indicated a missing Java Runtime.
- **Challenge**: Ensuring compatibility with React Native (e.g., using JDK 17) required careful environment setup.

---

## Assumptions

1. **Local API Server**:
   - Assumed a local API server running on `http://10.0.2.2:45500` (Android) or `http://localhost:45500` (iOS) with endpoints like `/brands`.
   - If a production API is used, the `apiClient` configuration would need to be updated.

2. **Development Environment**:
   - Assumed a macOS environment for development.
   - For Windows, the JDK and Android SDK setup would need adjustments.
   - The app requires a local API server for development.


3. **Entities**:
   - Assumed simple brand entities (`{ id, nombre, pais, tipo }`) since the data structure wasn't explicitly defined.
   - If more complex entities are needed, the `src/services/` layer can be expanded.

4. **Testing**:
   - Assumed that unit testing and integration testing are not currently implemented but can be added using Jest and React Native Testing Library.
   - Clean Architecture makes testing easier by isolating use cases.

5. **Settings View**:
   - Assumed to develop a view with a way to change the language of the app using `react-i18next`

---

---

## Conclusion

The React Native Brand Management App leverages Clean Architecture to create a modular, testable, and maintainable codebase. The chosen technologies (React Native, Redux, Axios, etc.) balance development speed, scalability, and community support. The decisions made address the app's requirements while ensuring a responsive and functional UI across platforms.