import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  constructor(private skillS: SkillService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(data =>{
      this.skill = data;
    }, err =>{
      alert('falló');
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert('falló');
      this.router.navigate(['']);
    })
  }
}
