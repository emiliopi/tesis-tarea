<template>
  <div v-if="currentEmployee" class="edit-form">
    <h4>Empleado</h4>
    <form>
      <div class="form-group">
        <label for="firstname">Nombre</label>
        <input type="text" class="form-control" id="firstname"
          v-model="currentEmployee.firstname"
        />
      </div>
      <div class="form-group">
        <label for="lastname">Apellido</label>
        <input type="text" class="form-control" id="lastname"
          v-model="currentEmployee.lastname"
        />
      </div>
      <div class="form-group">
        <label for="salary">Salario</label>
        <input type="text" class="form-control" id="salary"
          v-model="currentEmployee.salary"
        />
      </div>

      <div class="form-group">
        <label><strong>Estatus:</strong></label>
        {{ currentEmployee.active === false ? "Pendiente" : "Activado" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentEmployee.active"
      @click="updatePublished(false)"
    >
      Desactivar
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Activarlo
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteTutorial"
    >
      Emilinar
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTutorial"
    >
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Clic en el empleado que desea ver la informacion...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "employees",
  data() {
    return {
      currentEmployee: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentEmployee = response.data.res;
          console.log(response.data.res);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        active: status,
      };

      TutorialDataService.update(this.currentEmployee._id, data)
        .then(response => {
          //this.currentEmployee.published = status;
          console.log(response);
          this.$router.push({ name: "employees" });
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      TutorialDataService.update(this.currentEmployee._id, this.currentEmployee)
        .then(response => {
          console.log(response.data);
          this.message = 'Empleado actualizado exitosamente!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentEmployee._id)
        .then(response => {
          console.log(response);
          this.$router.push({ name: "employees" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>