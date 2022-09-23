import { Component, OnInit, ViewChild } from "@angular/core";
import { FlexmonsterPivot } from "ng-flexmonster";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'flexmonster-project';
  @ViewChild("pivot1") pivot1!: FlexmonsterPivot;
  @ViewChild("pivot2") pivot2!: FlexmonsterPivot;
  @ViewChild("pieChart") pieChart!: FlexmonsterPivot;
  @ViewChild("columnChart") columnChart!: FlexmonsterPivot;
  @ViewChild("barChart") barChart!: FlexmonsterPivot;

  public reportPivot1: Object = {
    dataSource: {
      filename: "data/dashboad-demo-data.json",
    },
    slice: {
      rows: [
        {
          uniqueName: "Division",
        },
      ],
      columns: [
        {
          uniqueName: "Patient Status",
        },
        {
          uniqueName: "[Measures]",
        },
      ],
      measures: [
        {
          uniqueName: "Treatment Cost",
          aggregation: "sum",
          format: "currency",
        },
      ],
    },
    conditions: [
      {
        formula: "#value < 6000",
        measure: "Treatment Cost",
        aggregation: "sum",
        format: {
          backgroundColor: "#00A45A",
          color: "#fff",
          fontFamily: "Arial",
          fontSize: "12px",
        },
        isTotal: false,
      },
      {
        formula: "#value > 12000",
        measure: "Treatment Cost",
        aggregation: "sum",
        format: {
          backgroundColor: "#df3800",
          color: "#fff",
          fontFamily: "Arial",
          fontSize: "12px",
        },
        isTotal: false,
      },
    ],
    options: {
      configuratorButton: false,
      drillThrough: false,
      timePattern: "m'h' ss'min'",
    },
    formats: [
      {
        name: "currency",
        currencySymbol: "$",
      },
      {
        name: "",
        decimalPlaces: 2,
      },
    ],
    tableSizes: {
      columns: [
        {
          tuple: [],
          measure: {
            uniqueName: "Treatment Cost",
            aggregation: "sum",
          },
          width: 175,
        },
        {
          tuple: ["patient status.[inpatient]"],
          measure: {
            uniqueName: "Treatment Cost",
            aggregation: "sum",
          },
          width: 183,
        },
        {
          tuple: ["patient status.[outpatient]"],
          measure: {
            uniqueName: "Treatment Cost",
            aggregation: "sum",
          },
          width: 185,
        },
      ],
    },
  };

  public reportPivot2: Object = {
    dataSource: {
      filename: "data/dashboad-demo-data.json",
    },
    slice: {
      rows: [
        {
          uniqueName: "Satisfaction",
        },
      ],
      columns: [
        {
          uniqueName: "Patient Status",
        },
        {
          uniqueName: "[Measures]",
        },
      ],
      measures: [
        {
          uniqueName: "Average Waiting Time",
          formula: 'average("Waiting Time")',
          caption: "Waiting Time",
        },
        {
          uniqueName: "Treatment Cost",
          aggregation: "sum",
          active: false,
          format: "currency",
        },
      ],
      drillThrough: ["Satisfaction", "Patient Status", "Waiting Time"],
      sorting: {
        column: {
          type: "asc",
          tuple: [],
          measure: {
            uniqueName: "Average Waiting Time",
          },
        },
      },
    },
    conditions: [
      {
        formula: "#value < 50",
        measure: "Average Waiting Time",
        isTotal: true,
        format: {
          backgroundColor: "#00A45A",
          color: "#FFFFFF",
          fontFamily: "Arial",
          fontSize: "12px",
        },
      },
      {
        formula: "#value > 102",
        measure: "Average Waiting Time",
        isTotal: true,
        format: {
          backgroundColor: "#df3800",
          color: "#FFFFFF",
          fontFamily: "Arial",
          fontSize: "12px",
        },
      },
    ],
    options: {
      configuratorButton: false,
      grid: {
        showHeaders: false,
        showFilter: false,
        dragging: false,
      },
    },
    formats: [
      {
        name: "currency",
        currencySymbol: "$",
      },
      {
        name: "",
        decimalPlaces: 2,
      },
    ],
    tableSizes: {
      columns: [
        {
          tuple: ["patient status.[inpatient]"],
          measure: {
            uniqueName: "Average Waiting Time",
            aggregation: "none",
          },
          width: 72,
        },
        {
          tuple: ["patient status.[outpatient]"],
          measure: {
            uniqueName: "Average Waiting Time",
            aggregation: "none",
          },
          width: 79,
        },
        {
          tuple: [],
          measure: {
            uniqueName: "Average Waiting Time",
            aggregation: "none",
          },
          width: 149,
        },
      ],
    },
  };

  public reportPieChart: Object = {
    dataSource: {
      filename: "data/dashboad-demo-data.json",
    },
    slice: {
      rows: [
        {
          uniqueName: "Satisfaction",
        },
      ],
      columns: [
        {
          uniqueName: "[Measures]",
        },
      ],
      measures: [
        {
          uniqueName: "Satisfaction Percentage",
          formula: 'count("Patient Status") / 200',
          caption: "Satisfaction Percentage",
          format: "satisfaction_perc",
        },
      ],
      drillThrough: [
        "Satisfaction",
        "Patient Status",
        "Waiting Time",
        "Gender",
        "Division",
      ],
    },
    options: {
      viewType: "charts",
      configuratorButton: false,
      chart: {
        type: "pie",
        showFilter: false,
        showLegend: false,
        showMeasures: false,
      },
    },
    formats: [
      {
        name: "currency",
        currencySymbol: "$",
      },
      {
        name: "",
        decimalPlaces: 2,
      },
      {
        name: "satisfaction_perc",
        isPercent: true,
      },
    ],
  };

  public reportColumnChart: Object = {
    dataSource: {
      filename: "data/dashboad-demo-data.json",
    },
    slice: {
      rows: [
        {
          uniqueName: "Satisfaction",
        },
      ],
      columns: [
        {
          uniqueName: "Patient Status",
        },
        {
          uniqueName: "[Measures]",
        },
      ],
      measures: [
        {
          uniqueName: "Satisfaction Percentage",
          formula: 'count("Patient Status") / 200',
          caption: "Satisfaction Percentage",
          format: "satisfaction_perc",
        },
      ],
      drillThrough: [
        "Satisfaction",
        "Patient Status",
        "Waiting Time",
        "Gender",
        "Division",
      ],
    },
    options: {
      viewType: "charts",
      configuratorButton: false,
      chart: {
        type: "stacked_column",
        showFilter: false,
        showMeasures: false,
      },
    },
    formats: [
      {
        name: "",
        decimalPlaces: 2,
      },
      {
        name: "satisfaction_perc",
        isPercent: true,
      },
    ],
  };

  public reportBarChart: Object = {
    dataSource: {
      filename: "data/dashboad-demo-data.json",
    },
    slice: {
      rows: [
        {
          uniqueName: "Division",
        },
      ],
      columns: [
        {
          uniqueName: "[Measures]",
        },
      ],
      measures: [
        {
          uniqueName: "Waiting Time",
          aggregation: "average",
        },
        {
          uniqueName: "Treatment Cost",
          aggregation: "sum",
          active: false,
          format: "currency",
        },
      ],
      sorting: {
        column: {
          type: "desc",
          tuple: [],
          measure: {
            uniqueName: "Waiting Time",
            aggregation: "average",
          },
        },
      },
    },
    options: {
      viewType: "charts",
      configuratorButton: false,
      chart: {
        type: "bar_h",
        showFilter: false,
        showMeasures: false,
      },
    },
    formats: [
      {
        name: "currency",
        currencySymbol: "$",
      },
      {
        name: "",
        decimalPlaces: 2,
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  customizeCellFunction(
    cell: Flexmonster.CellBuilder,
    data: Flexmonster.CellData
  ) {
    if (data.hierarchy) {
      if (data.type == "header") {
        if (data.hierarchy.caption == "Satisfaction" && data.member) {
         let name = data.member.caption;
         let face = `<img class="flag" style="width:23px; height:23px;" 
           src="https://www.flexmonster.com/fm_uploads/2020/01/${name}Emoji.png">`;
         cell.text = `<div style="display:flex; align-items:center; font-size:12px; 
           position:relative; bottom: 3px; left:2px;">${face}${data.member.caption}</div>`;
        }
      }
    }
  }
}