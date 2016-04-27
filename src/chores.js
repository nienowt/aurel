export class Chores {
  name = ''
  chore = ''
  chores = [
    {id: 1, name: 'Pete', chore: 'Shout'},
    {id: 2, name: 'Mary', chore: 'Yell'}
  ]
  editOpen = 'none'
  set(id){
    console.log(this.editOpen, id)
    if(this.editOpen == id) return this.editOpen = 'none'
    console.log(this.editOpen, id)
    return this.editOpen = id
  }

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
    console.log(this.editOpen)
  }
}
