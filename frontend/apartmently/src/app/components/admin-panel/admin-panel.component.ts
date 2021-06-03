import {Component, OnInit, ViewChild} from '@angular/core';
import {UserTile} from 'src/app/common/user-tile';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  users: UserTile[];
  thePageNumber = 0;
  thePageSize = 6;
  theTotalElements = 0;
  pageTitle = "Admin panel";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageEvent: PageEvent;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.userService.getUsersPaginate(this.thePageNumber, this.thePageSize)
      .subscribe(this.processResult());
  }

  processResult() {
    return data => {
      this.users = data.content;
      this.thePageNumber = data.number;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    }
  }

  OnPageChange(event?: PageEvent) {

    this.thePageSize = event.pageSize;
    this.thePageNumber = event.pageIndex;

  }

}
