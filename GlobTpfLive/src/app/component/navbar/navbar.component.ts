import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';
import { AboutmainComponent } from '../aboutmain/aboutmain.component';
import { CampaignComponent } from '../campaign/campaign.component';
import Swal from 'sweetalert2';
import { ParticipantService } from '../../participant.service';
import { Router } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, ContactComponent, RouterLink, AboutmainComponent, CampaignComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  disable: boolean = true;
  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('username') !== null &&
      sessionStorage.getItem('password') !== null) {
      this.disable = false;
    } else {
      this.disable = true;
    }
  }

  openModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
}
