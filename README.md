[![MIT License][license-shield]][license-url]
[![Twitter][twitter-shield]][twitter-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

# 🔩 Kaj-Manage

<br />
<p align="center">
  <a href="https://github.com/Bivas-Biswas/kaj-manage">
    <img src="https://github.com/Bivas-Biswas/kaj-manage/blob/main/readme/kajmanage_logo.png" alt="Logo" width="40%">
  </a>
    <h3 align="center">KajManage</h3>
  <p align="center">
  A Task Managing App, Track your work with time.
    <br />
    <a href="https://github.com/Bivas-Biswas/kaj-manage/#kajmanage"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kaj-manage.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Bivas-Biswas/kaj-manage/issues">Report Bug</a>
    ·
    <a href="https://github.com/Bivas-Biswas/kaj-manage/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

# 🛒 Table of Contents

[Contents](#table-of-contents)

- [About The Project](#about-the-project)
  - [Showcase](#showcase)
  - [Task](#task)
  - [Built With](#built-with)
  - [Extra Features](#extra-features)
- [Basic Structure of the Project](#basic-structure-of-the-project)
- [License](#license)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## 📞 About The Project

KajManage, A Task Managing App. We all know about [scrum](https://www.digite.com/agile/scrum-methodology/), The app helps use to create our own custom scum very easily. Also easy to maintain. We can divide task according our scrum. like most popular scrum is [Todo](https://blog.agileskills.de/en/todo-doing-done-and-the-three-scrum-artifacts/) - Todo, Doing Done

## 📸 Showcase

<!-- <table align="center">
    <tr>
        <td>
            <a href="https://bivas-biswas.github.io/kaj-manage">
                <p align="center">
                    <img src="assets/homepage.jpg" alt="homepage">
                    <p align="center">Home Page</p>
                </p>
            </a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://bivas-biswas.github.io/BrickBreakers">
                <p align="center">
                    <img src="assets/setting_page.jpg" alt="setting_page">
                    <p align="center">Setting Page</p>
                </p>
            </a>
        </td>
    </tr>
</table> -->

## 📑 Task [🔗](https://water-pin-778.notion.site/Devsnest-Internship-Task-57a456c235f64f968867acd5779d9b07)

You have to make a simple to-do list app that has two views.

- A simple list view to list to-dos grouped by their status. ✅
- A board view where to-dos are grouped by their status and the user can drag & drop an item between the different statuses (like a kanban board). ✅
- A to-do should contain: ID, title, description, end date (optional), created at, updated at. ✅

#### 💯 Bonus:

- Add support for templates, so the user can create their own templates to save time when adding similar tasks ✅

Feel free to add any interesting things that would be useful to you ✅

## 🛠 Built With

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## ♨ Extra Features

## 👷‍♂️ Basic Structure of the Project

```
|
|- .husky             # Husky Config file
|- public             # Any files within this directory will not be processed by Webpack but copied directly to the build folder.
|- readme             # Contains all helper file for the README.md
|- src:               # Contains all source code for the React application.
    |
    |- assets
        |- css        # Contains tailwind css
    |- components     # Contains all the components used within the app.
    |- context        # Context provider
    |- config         # DataBase connection configuration
    |- data           # contains data
    |- hooks          # Contains all custom hooks
    |- layout         # Declares all components layout
    |- pages          # Contains all the pages of the app.
    |- styles         # Contains custom css files.
    |- ts             # Declares all typescript type of variable
    |- utisl          # Contains all functions
    |- App.js
    |- index.j
    |- react-app-env.d.ts
```

More Information of subfolder. Go this [link🔗](https://github.com/Bivas-Biswas/kaj-manage/blob/main/subfolder_structure.md/)\
Here You will be able to learn in depth details of the subfolders used in the project.

<!-- LICENSE -->

###

## 👮‍♂️ License

[![MIT License][license-shield]][license-url]

## 🙏 Acknowledgements

- [React-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd) is a react drag and drop libary. It's the most libary with proper accessibility.
  It helped to build the drag drop task manager
- 🔎 [ESLint](https://eslint.org/) is a static code analysis tool for identifying problematic patterns found in JavaScript code. It helped to me understand code bugs and specially Typescript Types 😊.

- 💄 [Prettier](https://prettier.io/), a code formatter helped me maintain same style in whole codebase.
- 💨 [Husky](https://typicode.github.io/husky/#/) a Git pre hooks. It helped to checks of all prettier, eslint test befor evry commit.
- 🔄 [lint-staged](https://github.com/okonet/lint-staged#readme) is a big brother of husky.
  Husky runs the pre hooks and lint-staged tell him which file need to sees like a brother. In this project I used as when I committed, it checked all files prettier style and eslint problem. my lint-staged [🔗](https://github.com/Bivas-Biswas/kaj-manage/blob/main/package.json#L79-L82)
- ⏲ [moment.js](https://momentjs.com/) is a Date Formatter. It helped me to convert TimeStram to date. Also some inbuild function `calender()` change format `2021-10-13T03:08:41+05:30` to `Today at 3:09 AM`
- ⚓ Other packages [React Icons](https://react-icons.github.io/react-icons/) (helped to get free svg icons), [react-modal](https://github.com/reactjs/react-modal#react-modal) (helped to create modal easily), [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton#react-loading-skeleton) (helped to add loading skeleton).
- Lastly Acknowledge to me. How I managed all packages. 💪

[contributors-shield]: https://img.shields.io/github/contributors/Bivas-Biswas/kaj-manage.svg?style=for-the-badge
[contributors-url]: https://github.com/Bivas-Biswas/kaj-manage/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Bivas-Biswas/kaj-manage.svg?style=for-the-badge
[forks-url]: https://github.com/Bivas-Biswas/kaj-manage/network/members
[stars-shield]: https://img.shields.io/github/stars/Bivas-Biswas/kaj-manage.svg?style=for-the-badge
[stars-url]: https://github.com/Bivas-Biswas/kaj-manage/stargazers
[issues-shield]: https://img.shields.io/github/issues/Bivas-Biswas/kaj-manage.svg?style=for-the-badge
[issues-url]: https://github.com/Bivas-Biswas/kaj-manage/issues
[license-shield]: https://img.shields.io/github/license/Bivas-Biswas/kaj-manage.svg?style=for-the-badge
[license-url]: https://github.com/Bivas-Biswas/kaj-manage/blob/master/LICENSE.txt
[twitter-shield]: https://img.shields.io/badge/twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white
[twitter-url]: https://www.linkedin.com/in/bivas-biswas-828a731b7/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bivas-biswas-828a731b7/
