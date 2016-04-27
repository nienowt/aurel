export class App {
  name = ''
  chore = ''
  chores = []
  editOpen = 'none'

  submit(){
    this.chores.push({id: Date.now(), name:this.name,chore:this.chore})
    this.chore = ''
    this.name = ''
  }
  remove(id){
    this.chores = this.chores.filter((c) => {
    return c.id != id
    })
  }
  edit(task){
    task.name = this.name || task.name
    task.chore = this.chore || task.chore
    this.name = ''
    this.chore = ''
    this.editOpen = 'none'
    console.log(task)
  }
}
