# 🎭 Playwright TypeScript Test Framework

---

## 🛠 Передумови

Перед початком роботи переконайтеся, що у вас встановлено:

### **Обов'язкові інструменти:**

- **Node.js** (версія 18 або вище)

  ```bash
  # Перевірка версії
  node --version
  ```

- **npm** або **yarn**
  ```bash
  # Перевірка версії npm
  npm --version
  ```

### **Рекомендовані інструменти:**

- **Visual Studio Code** з розширеннями:
  - Playwright Test for VSCode
  - TypeScript and JavaScript Language Features
  - ESLint

---

### **Крок 1: Клонування проєкту**

```bash
# Клонуйте репозиторій
git clone <repository-url>
cd pw-start-example-ts
```

### **Крок 2: Встановлення залежностей**

```bash
# Встановлення всіх npm пакетів
npm install

# Або з yarn
yarn install
```

### **Крок 3: Встановлення браузерів Playwright**

```bash
# Встановлення браузерів для тестування
npx playwright install

# Встановлення лише Chromium (опціонально)
npx playwright install chromium
```

### **Крок 4: Налаштування змінних середовища**

```bash
# Створіть файл .env в корені проєкту
touch .env
```

Додайте до файлу `.env`:

```env
# Базовий URL для тестування
BASE_URL=https://example.com

# Дані для автентифікації (за потреби)
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=password123

# Налаштування середовища
NODE_ENV=test
```

### **Крок 5: Перший запуск тестів**

```bash
# Запуск всіх тестів
npx playwright test

# Запуск тестів у headed режимі (з відкритим браузером)
npx playwright test --headed

# Запуск конкретного тесту
npx playwright test tests/homePage/loginUser.spec.ts
```

---

## 📁 Структура проєкту

```
pw-start-example-ts/
├── app/
│   ├── api/                    # API тестування
│   │   ├── controllers/        # API контролери
│   │   ├── BaseApiContext.ts   # Базовий API контекст
│   │   └── ControllersManage.ts # Менеджер контролерів
│   ├── fixtures/               # Test fixtures
│   │   └── base.fixture.ts     # Базові фікстури
│   └── ui/                     # UI тестування
│       ├── components/         # UI компоненти
│       ├── modals/            # Модальні вікна
│       └── pages/             # Page Objects
├── tests/                      # Тестові файли
│   ├── homePage/              # Тести головної сторінки
│   └── collectionPage/        # Тести сторінки колекцій
├── utils/                      # Утиліти
├── playwright.config.ts        # Конфігурація Playwright
├── tsconfig.json              # Конфігурація TypeScript
└── package.json               # Залежності проєкту
```

---

### **Основні команди:**

```bash
# Запуск всіх тестів
npx playwright test

# Запуск з головним браузером (видимий)
npx playwright test --headed

# Запуск в debug режимі
npx playwright test --debug

# Запуск конкретного файлу
npx playwright test tests/homePage/loginUser.spec.ts

# Запуск тестів з конкретним тегом
npx playwright test --grep "@smoke"
```

### **Різні браузери:**

```bash
# Тільки Chromium
npx playwright test --project=chromium

# Тільки Firefox
npx playwright test --project=firefox

# Тільки Safari
npx playwright test --project=webkit
```

### **Звіти та результати:**

```bash
# Відкрити HTML звіт
npx playwright show-report

# Відкрити trace viewer
npx playwright show-trace
```

---

### **Створення нового тесту:**

1. **Створіть тестовий файл:**

```typescript
// tests/newFeature/myTest.spec.ts
import { test } from "@fixtures/base.fixture";

test.describe("My Feature", () => {
  test("should do something", async ({ pages, apiClient }) => {
    await pages.homePage.goto();
    // Ваш тест тут
  });
});
```

2. **Створіть Page Object (за потреби):**

```typescript
// app/ui/pages/MyPage.ts
import { BasePage } from "./BasePage";

export class MyPage extends BasePage {
  async clickButton() {
    await this.page.click('[data-testid="my-button"]');
  }
}
```

3. **Додайте до PageManager:**

```typescript
// app/ui/pages/PageManager.ts
export class PageManager {
  // ...existing code...

  get myPage() {
    return new MyPage(this.page);
  }
}
```

### **Створення API контролера:**

```typescript
// app/api/controllers/MyController.ts
import { BaseApiContext } from "../BaseApiContext";

export class MyController extends BaseApiContext {
  async getData() {
    return await this.request.get("/api/data");
  }
}
```

---

### **Налагодження:**

```bash
# Codegen - запис дій користувача
npx playwright codegen https://example.com

# Інспектор селекторів
npx playwright inspector

# Trace viewer для налагодження
npx playwright show-trace
```

### **Лінтинг та форматування:**

```bash
# Запуск ESLint
npx eslint .

# Виправлення помилок ESLint
npx eslint . --fix

# Перевірка TypeScript
npx tsc --noEmit
```

---

## 📚 Додаткові ресурси

- 🔗 **[Playwright Documentation](https://playwright.dev/docs/intro)**
- 🔗 **[Playwright API Reference](https://playwright.dev/docs/api/class-page)**
- 🔗 **[TypeScript Handbook](https://www.typescriptlang.org/docs/)**
- 🔗 **[VS Code Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)**

---
