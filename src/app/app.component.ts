import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stock-app';

  ngOnInit(): void {
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    const jsFilter = document.querySelector(".jsFilter");
    const gridButton = document.querySelector(".grid");
    const listButton = document.querySelector(".list");
    const modeSwitch = document.querySelector(".mode-switch");

    if (jsFilter) {
      jsFilter.addEventListener("click", () => {
        const filterMenu = document.querySelector(".filter-menu");
        if (filterMenu) {
          filterMenu.classList.toggle("active");
        }
      });
    }

    if (gridButton) {
      gridButton.addEventListener("click", () => {
        const list = document.querySelector(".list");
        const productsAreaWrapper = document.querySelector(".products-area-wrapper");
        if (list) {
          list.classList.remove("active");
        }
        if (gridButton) {
          gridButton.classList.add("active");
        }
        if (productsAreaWrapper) {
          productsAreaWrapper.classList.add("gridView");
          productsAreaWrapper.classList.remove("tableView");
        }
      });
    }

    if (listButton) {
      listButton.addEventListener("click", () => {
        const grid = document.querySelector(".grid");
        const productsAreaWrapper = document.querySelector(".products-area-wrapper");
        if (listButton) {
          listButton.classList.add("active");
        }
        if (grid) {
          grid.classList.remove("active");
        }
        if (productsAreaWrapper) {
          productsAreaWrapper.classList.remove("gridView");
          productsAreaWrapper.classList.add("tableView");
        }
      });
    }

    if (modeSwitch) {
      modeSwitch.addEventListener("click", () => {
        document.documentElement.classList.toggle("light");
        modeSwitch.classList.toggle('active');
      });
    }
  }
}
