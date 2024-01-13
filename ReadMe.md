![](src/image/WebCell-0.png)

# WebCell scaffold

App Project scaffold of **WebCell** v3

https://web-cell.dev/scaffold/

[![CI & CD](https://github.com/EasyWebApp/scaffold/actions/workflows/main.yml/badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## Technology stack

-   Language: [TypeScript v5][5]
-   Component engine: [WebCell v3][6]
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

1.  Install **[Settings][12] GitHub app** in your account or organization
2.  Click the **[Use this template][13] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above
3.  Click the **[Open in GitHub codespaces][3] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately
4.  Set [Vercel variables][14] as [Repository secrets][15], then every commit will get an independent **Preview URL**
5.  Recommend to add a [Notification step in GitHub actions][16] for your Team IM app
6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][17] instead of IM messages or Mobile Phone calls
7.  Collect all these issues into [Project kanbans][18], then create **Pull requests** & add `closes #issue_number` into its description for automation

[2]: https://github.com/EasyWebApp/scaffold/actions/workflows/main.yml
[3]: https://codespaces.new/EasyWebApp/scaffold
[4]: https://gitpod.io/?autostart=true#https://github.com/EasyWebApp/scaffold
[5]: https://typescriptlang.org/
[6]: https://web-cell.dev/
[7]: https://bootstrap.web-cell.dev/
[8]: https://developers.google.com/web/tools/workbox
[9]: https://parceljs.org/
[10]: https://github.com/features/actions
[11]: https://pages.github.com/
[12]: https://github.com/apps/settings
[13]: https://github.com/new?template_name=scaffold&template_owner=EasyWebApp
[14]: https://github.com/idea2app/Next-Bootstrap-ts/blob/80967ed49045af9dbcf4d3695a2c39d53a6f71f1/.github/workflows/pull-request.yml#L9-L12
[15]: https://github.com/EasyWebApp/scaffold/settings/secrets/actions
[16]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[17]: https://github.com/EasyWebApp/scaffold/issues/new/choose
[18]: https://github.com/EasyWebApp/scaffold/projects
