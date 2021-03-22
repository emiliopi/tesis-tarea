<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Lista de empleados</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(employee, index) in employees"
          :key="index"
          @click="setActiveTutorial(employee, index)"
        >
          {{ employee.firstname }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentEmployee">
        <h4>Empleado</h4>
        <div>
          <label><strong>Nombre:</strong></label>
          {{ currentEmployee.firstname }}
        </div>
        <div>
          <label><strong>Apellido:</strong></label>
          {{ currentEmployee.lastname }}
        </div>
        <div>
          <label><strong>Salario:</strong></label> {{ currentEmployee.salary }}
        </div>
        <router-link
          :to="{
            name: 'employee-details',
            params: { id: currentEmployee._id },
          }"
          ><a class="badge badge-warning"> Editar </a></router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Clic en el empleado que desea ver la informacion...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      employees: [],
      currentEmployee: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.employees = response.data.res;
          console.log(response.data.res);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentEmployee = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentEmployee = tutorial;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>