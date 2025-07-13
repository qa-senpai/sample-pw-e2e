# Структура папки `app/api` у Playwright-проєкті

Ця частина проєкту відповідає за **API-тестування** і реалізована за принципами api controller, для HTTP-запитів.

---

## 📁 `api/controllers`

Містить класи або функції, які інкапсулюють логіку **конкретних API-ендпоінтів**.

### Приклади:

- `UserController.ts` — методи: `getUser()`, `createUser()`
- `AuthController.ts` — методи: `login()`, `refreshToken()`
- `ProductController.ts` — методи: `getProduct()`, `createProduct()`

Контролери — це **аналоги Page Object-ів**, але для REST API.

---

## 📄 `ControllersManage.ts`

Це **менеджер** або **фабрика** для створення екземплярів API-контролерів.

### Завдання:

- Ініціалізувати всі контролери в одному місці
- Забезпечити зручний доступ до API-контролерів у тестах

## ✅ Переваги такої структури:

- **Чітке розділення відповідальностей**
- **Масштабованість** — нові ендпоінти додаються як нові контролери
- **Зручність і читаємість тестів**

---

## 📚 Офіційна документація:

### **Playwright API Testing Documentation:**

- 🔗 **[API testing](https://playwright.dev/docs/api-testing)** — основна документація по API-тестуванню
- 🔗 **[APIRequestContext](https://playwright.dev/docs/api/class-apirequestcontext)** — клас для HTTP-запитів
- 🔗 **[Making HTTP requests](https://playwright.dev/docs/api-testing#making-http-requests)** — виконання HTTP-запитів
- 🔗 **[API testing with fixtures](https://playwright.dev/docs/api-testing#api-testing-with-fixtures)** — використання фікстур для API

### **HTTP Methods & Configuration:**

- 🔗 **[request.get()](https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-get)** — GET запити
- 🔗 **[request.post()](https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-post)** — POST запити
- 🔗 **[request.put()](https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-put)** — PUT запити
- 🔗 **[request.delete()](https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-delete)** — DELETE запити

### **Advanced Topics:**

- 🔗 **[Authentication in API tests](https://playwright.dev/docs/api-testing#authentication)** — автентифікація в API-тестах
- 🔗 **[Setting up API context](https://playwright.dev/docs/api-testing#setting-up-api-request-context)** — налаштування API контексту
- 🔗 **[Reusing authentication](https://playwright.dev/docs/auth#reuse-authentication-state)** — переюзування автентифікації
