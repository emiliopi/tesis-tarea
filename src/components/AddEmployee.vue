<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="firstname">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          required
          v-model="employee.firstname"
          name="firstname"
        />
      </div>

      <div class="form-group">
        <label for="lastname">Apellido</label>
        <input
          class="form-control"
          id="lastname"
          required
          v-model="employee.lastname"
          name="lastname"
        />
      </div>

      <div class="form-group">
        <label for="role">Rol</label>
        <input
          class="form-control"
          id="role"
          required
          v-model="employee.role"
          name="role"
        />
      </div>

      <div class="form-group">
        <label for="salary">Salario</label>
        <input
          class="form-control"
          id="salary"
          required
          v-model="employee.salary"
          name="salary"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Crear</button>
    </div>

    <div v-else>
      <h4>Empleado creado exitosamente!</h4>
      <button class="btn btn-success" @click="newTutorial">Crear nuevo</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-employee",
  data() {
    return {
      employee: {
        firstname: "",
        lastname: "",
        role: "",
        active: false,
        salary: 0,

      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        firstname: this.employee.firstname,
        lastname: this.employee.lastname,
        role: this.employee.role,
        active: this.employee.active,
        salary: this.employee.salary,

      };

      TutorialDataService.create(data)
        .then(response => {
          //this.tutorial.id = response.data.id;
          console.log(response);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.employee = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>