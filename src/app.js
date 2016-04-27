export class App {
  configureRouter(config, router) {
    config.title = '';
    config.map([
      { route: ['','chores'], name: 'chores', moduleId: './chores', nav:true, title:'Chores'},
      { route: 'other', name: 'other', moduleId: './other', nav:true, title:'Second Page'}
    ]);
    this.router = router;
  }
}
