export class  student{
    studentObj:any[]=[
        {
          name:'Karthi',
          age:23,
          dept:'MCT'
        },
        {
          name:'Ajith',
          age:25,
          dept:'IT'
        },
        {
          name:'Sumaran',
          age:23,
          dept:'CSE'
        },
        {
          name:'Aravind',
          age:23,
          dept:'ECE'
        },
        {
          name:'Mohan',
          age:23,
          dept:'MECH'
        },
      ]
      status:boolean;
      constructor(status:boolean){
this.status=status
      }
}
