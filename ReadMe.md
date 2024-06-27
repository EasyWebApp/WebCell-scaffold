![](src/image/WebCell-0.png)

# WebCell-scaffold

App Project scaffold of [WebCell][1] v3

https://web-cell-scaffold.vercel.app/

[![CI & CD](https://github.com/EasyWebApp/WebCell-scaffold/actions/workflows/main.yml/badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## Technology stack

-   Language: [TypeScript v5][5]
-   Component engine: [WebCell v3][1]
-   Component suite: [BootCell v2][7]
-   PWA framework: [Workbox v7][8]
-   Package bundler: [Parcel v2][9]
-   CI / CD: GitHub [Actions][10] + [Pages][11]

## Development

```shell
npm i pnpm -g
pnpm i
npm start
```

## Deployment

```shell
pnpm build
```

## Best practice

1.  Install GitHub apps in your organization or account:

    1.  [Probot settings][12]: set up Issue labels & Pull Request rules
    2.  [PR badge][13]: set up Online [VS Code][14] editor entries in Pull Request description

2.  Click the **[<kbd>Use this template</kbd>][15] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above

3.  Click the **[<kbd>Open in GitHub codespaces</kbd>][3] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4.  Set [Vercel variables][16] as [Repository secrets][17], then every commit will get an independent **Preview URL**

5.  Recommend to add a [Notification step in GitHub actions][18] for your Team IM app

6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][19] instead of IM messages or Mobile Phone calls

7.  Collect all these issues into [Project kanbans][20], then create **Pull requests** & add `closes #issue_number` into its description for automation

[1]: https://web-cell.dev/
[2]: https://github.com/EasyWebApp/WebCell-scaffold/actions/workflows/main.yml
[3]: https://codespaces.new/EasyWebApp/WebCell-scaffold
[4]: https://gitpod.io/?autostart=true#https://github.com/EasyWebApp/WebCell-scaffold
[5]: https://typescriptlang.org/
[7]: https://bootstrap.web-cell.dev/
[8]: https://developers.google.com/web/tools/workbox
[9]: https://parceljs.org/
[10]: https://github.com/features/actions
[11]: https://pages.github.com/
[12]: https://github.com/apps/settings
[13]: https://pullrequestbadge.com/
[14]: https://code.visualstudio.com/
[15]: https://github.com/new?template_name=WebCell-scaffold&template_owner=EasyWebApp
[16]: https://github.com/EasyWebApp/WebCell-scaffold/blob/eaa710bc8d737a52bf726ebe339e2a29db7e3e04/.github/workflows/main.yml#L9-L11
[17]: https://github.com/EasyWebApp/WebCell-scaffold/settings/secrets/actions
[18]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[19]: https://github.com/EasyWebApp/WebCell-scaffold/issues/new/choose
[20]: https://github.com/EasyWebApp/WebCell-scaffold/projects
