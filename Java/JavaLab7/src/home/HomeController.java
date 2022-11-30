package home;

import java.net.URL;
import java.sql.PreparedStatement;
import java.util.ResourceBundle;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.input.MouseEvent;

public class HomeController implements Initializable {

    @FXML
    private TextField name;
    @FXML
    private TextField department;

    @FXML
    private TableView<EmployeeData> employeeDataTableView;
    @FXML
    private TableColumn<EmployeeData, String> idColumn;
    @FXML
    private TableColumn<EmployeeData, String> nameColumn;
    @FXML
    private TableColumn<EmployeeData, String> departmentColumn;

    @FXML
    private Button addEntryBtn;
    @FXML
    private Button clearBtn;

    // instantiate a model
    HomeModel homeModel = null;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        this.homeModel = new HomeModel();
        this.loadEmployeeData();
    }

    // load Data
    @FXML
    public void loadEmployeeData() {

        this.idColumn.setCellValueFactory(new PropertyValueFactory<EmployeeData, String>("id"));
        this.nameColumn.setCellValueFactory(new PropertyValueFactory<EmployeeData, String>("name"));
        this.departmentColumn.setCellValueFactory(new PropertyValueFactory<EmployeeData, String>("department"));

        this.employeeDataTableView.setItems(homeModel.getEmployees());
    }

    // add Employee
    @FXML
    private void addEmployee(ActionEvent event) {
        homeModel.addEmployee(this.name.getText(), this.department.getText());
        this.loadEmployeeData();
        this.clearFields(null);
    }

    // update Employee
    @FXML
    private void updateEmployee(ActionEvent event) {
        EmployeeData employee = employeeDataTableView.getSelectionModel().getSelectedItem();
        homeModel.updateEmployee(this.name.getText(), this.department.getText(), employee.idProperty().getValue());
        this.loadEmployeeData();
        this.clearFields(null);
    }

    // delete Employee
    @FXML
    private void deleteEmployee(ActionEvent event) {
        EmployeeData employee = employeeDataTableView.getSelectionModel().getSelectedItem();
        homeModel.deleteEmployee(employee.idProperty().getValue());
        this.loadEmployeeData();
        this.clearFields(null);
    }

    // clear Fields
    @FXML
    private void clearFields(ActionEvent event) {
        this.name.setText("");
        this.department.setText("");
    }

}