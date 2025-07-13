# Структура папки `fixtures` у Playwright-проєкті

---

## 📁 `app/fixtures`

Містить **фікстури (fixtures)** — розширені налаштування тестового середовища Playwright.

Фікстури дозволяють **підготувати та налаштувати об'єкти** перед виконанням тестів і **очистити ресурси** після їх завершення.

---

## 🎯 Що зберігається в `fixtures`:

### **Base Fixtures** (основні фікстури)

- `base.fixture.ts` — базова фікстура, яка розширює стандартний Playwright test
- Налаштування **Page Objects** та **API клієнтів**
- **Dependency Injection** для тестів

### **Specialized Fixtures** (спеціалізовані фікстури)

- **Authentication fixtures** — автоматичний логін користувачів
- **Database fixtures** — підготовка тестових даних
- **Browser fixtures** — налаштування браузера (розмір, розширення)
- **API fixtures** — mock-серверів, токенів автентифікації

---

## 💡 Принципи роботи з фікстурами:

### **Автоматична ініціалізація**

- Фікстури **автоматично створюються** перед кожним тестом
- **Автоматичне очищення** після завершення тесту
- **Lazy loading** — створюються тільки при потребі

### **Dependency Injection**

- Автоматичне **впровадження залежностей** у тести
- **Типізація** об'єктів для кращого IntelliSense
- **Перевикористання** між різними тестами

### **Scoping (Область дії)**

- **Test-scoped** — нова фікстура для кожного тесту
- **Worker-scoped** — спільна фікстура для всіх тестів у воркері
- **Project-scoped** — глобальна фікстура для всього проєкту

---

---

## ✅ Переваги використання фікстур:

- **DRY принцип** — немає дублювання коду ініціалізації
- **Автоматичне управління ресурсами** — setup/teardown
- **Типізація** — IntelliSense та автокомпліт
- **Модульність** — можна комбінувати різні фікстури
- **Паралелізм** — фікстури безпечні для паралельного виконання
- **Читабельність тестів** — тести фокусуються на логіці, а не на налаштуваннях

---

## 🚀 Використання у тестах:

```typescript
import { test } from "@fixtures/base.fixture";

test("should search for products", async ({ pages, apiClient }) => {
  // pages та apiClient автоматично ініціалізовані
  await pages.homePage.goto();
  await pages.homePage.search("iPhone");

  const products = await apiClient.products.getAll();
  expect(products).toHaveLength(10);
});
```

---

## 📚 Офіційна документація:

### **Playwright Fixtures Documentation:**

- 🔗 **[Test fixtures](https://playwright.dev/docs/test-fixtures)** — основна документація по фікстурам
- 🔗 **[Built-in fixtures](https://playwright.dev/docs/test-fixtures#built-in-fixtures)** — вбудовані фікстури Playwright
- 🔗 **[Custom fixtures](https://playwright.dev/docs/test-fixtures#creating-a-fixture)** — створення власних фікстур
- 🔗 **[Fixture scopes](https://playwright.dev/docs/test-fixtures#fixture-scopes)** — області дії фікстур
- 🔗 **[Override fixtures](https://playwright.dev/docs/test-fixtures#overriding-fixtures)** — перевизначення фікстур

### **Advanced Topics:**

- 🔗 **[Worker-scoped fixtures](https://playwright.dev/docs/test-fixtures#worker-scoped-fixtures)** — фікстури рівня воркера
- 🔗 **[Automatic fixtures](https://playwright.dev/docs/test-fixtures#automatic-fixtures)** — автоматичні фікстури
- 🔗 **[Parameterized fixtures](https://playwright.dev/docs/test-fixtures#parameterized-fixtures)** — параметризовані фікстури

---
