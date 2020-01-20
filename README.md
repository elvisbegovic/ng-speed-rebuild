# NGC 9 rc9 rebuild ~5s

```
Angular CLI: 9.0.0-rc.9
Node: 13.6.0
OS: win32 x64

Angular: 9.0.0-rc.9
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, localize, platform-browser
... platform-browser-dynamic, router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.900.0-rc.9
@angular-devkit/build-angular     0.900.0-rc.9
@angular-devkit/build-optimizer   0.900.0-rc.9
@angular-devkit/build-webpack     0.900.0-rc.9
@angular-devkit/core              9.0.0-rc.9
@angular-devkit/schematics        9.0.0-rc.9
@angular/cdk                      9.0.0-rc.8
@angular/material                 9.0.0-rc.8
@ngtools/webpack                  9.0.0-rc.9
@schematics/angular               9.0.0-rc.9
@schematics/update                0.900.0-rc.9
rxjs                              6.5.3
typescript                        3.6.4
webpack                           4.41.2



> ngc -p projects/one/tsconfig.app.json --watch --diagnostics

Time for diagnostics: 19183ms.

Total time: 73s

Compilation complete. Watching for file changes.

File change detected. Starting incremental compilation.

Time for diagnostics: 6838ms.

Total time: 7.1s

Compilation complete. Watching for file changes.

File change detected. Starting incremental compilation.

Time for diagnostics: 6236ms.

Total time: 6.3s

Compilation complete. Watching for file changes.

File change detected. Starting incremental compilation.

Time for diagnostics: 4907ms.

Total time: 5.0s

Compilation complete. Watching for file changes.

```



# ng serve 9rc9 rebuild  83s -> 7s -> 5s -> 15s -> 17s -> 14s
This is by trigger rebuild by append `cnosole.log(1)` in `projects\one\src\app\a4\a1\a11\a11.component.ts` in `ngOnInit()`
```
Date: 2020-01-20T14:00:42.768Z - Hash: 876192a2a082a9b27fba - Time: 130468ms
** Angular Live Development Server is listening on 0.0.0.0:4200, open your browser on http://localhost:4200/ **
: Compiled successfully.

Date: 2020-01-20T14:01:38.226Z - Hash: 216d6cd6aee7d37ea96a
823 unchanged chunks
chunk {158} 158.747659e622dc880df2d7.js, 158.747659e622dc880df2d7.js.map () 15.3 kB  [rendered]
chunk {runtime} runtime.aadac18024875aaa5bc4.js, runtime.aadac18024875aaa5bc4.js.map (runtime) 32.1 kB [entry] [rendered]
Time: 8396ms
: Compiled successfully.

Date: 2020-01-20T14:01:53.259Z - Hash: eea13bda59e47b0eff9a
823 unchanged chunks
chunk {158} 158.78c61840dcb5b7251e63.js, 158.78c61840dcb5b7251e63.js.map () 15.3 kB  [rendered]
chunk {runtime} runtime.99149e88ecdfd1b07cd2.js, runtime.99149e88ecdfd1b07cd2.js.map (runtime) 32.1 kB [entry] [rendered]
Time: 6996ms
: Compiled successfully.

Date: 2020-01-20T14:02:03.600Z - Hash: 483086a21f3d0a2bca38
823 unchanged chunks
chunk {158} 158.b3e751cc9ccb1ffe8699.js, 158.b3e751cc9ccb1ffe8699.js.map () 15.3 kB  [rendered]
chunk {runtime} runtime.8da87e3dfa50df71ac40.js, runtime.8da87e3dfa50df71ac40.js.map (runtime) 32.1 kB [entry] [rendered]
Time: 5252ms
: Compiled successfully.

Date: 2020-01-20T14:02:30.355Z - Hash: 37f76ffb90983a9ffe01
823 unchanged chunks
chunk {158} 158.517f4809cb42f2300f7a.js, 158.517f4809cb42f2300f7a.js.map () 15.3 kB  [rendered]
chunk {runtime} runtime.f99fbe2cb3f1a38514e8.js, runtime.f99fbe2cb3f1a38514e8.js.map (runtime) 32.1 kB [entry] [rendered]
Time: 15432ms
: Compiled successfully.

Date: 2020-01-20T14:04:33.933Z - Hash: 22b5fb25ebd6c153e885
823 unchanged chunks
chunk {158} 158.19cce3587bac1b7613fd.js, 158.19cce3587bac1b7613fd.js.map () 15.4 kB  [rendered]
chunk {runtime} runtime.697285100ffce366990e.js, runtime.697285100ffce366990e.js.map (runtime) 32.1 kB [entry] [rendered]
Time: 17722ms
: Compiled successfully.

Date: 2020-01-20T14:04:56.453Z - Hash: 753c04175437c21b1948
823 unchanged chunks
chunk {158} 158.4203179597cc67ea241b.js, 158.4203179597cc67ea241b.js.map () 15.4 kB  [rendered]
chunk {runtime} runtime.6980764238e10f1063f0.js, runtime.6980764238e10f1063f0.js.map (runtime) 32.1 kB [entry] [rendered]
Time: 14322ms
: Compiled successfully.

```
