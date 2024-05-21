/* const { Component, mount, xml } = owl;

// Owl Components
class Root extends Component {
  static template = xml`<div>Hello Owl</div>`;
}

mount(Root, document.body); */

/* (function () {
    console.log("hello owl", owl.__info__.version);
  })(); */

  //creando el primer componente 
  const { Component, mount, xml, useRef, onMounted } = owl;


  //para que se enfoque en la barra de busqueda
 
// Owl Components
class Task extends Component {
    static template = xml /* xml */`
      <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
        <input type="checkbox" t-att-checked="props.task.isCompleted"/>
        <span><t t-esc="props.task.text"/></span>
      </div>`;
    static props = ["task"];
  }


    //creando el segundo componente
    class Root extends Component {
      setup() {
        const inputRef = useRef("add-input");
        onMounted(() => inputRef.el.focus());
    }
        static template = xml /* xml */`
        <div class="todo-app">
    <input placeholder="Ingrese una Tarea" t-on-keyup="addTask" t-ref="add-input" />
          <div class="task-list">
            <t t-foreach="tasks" t-as="task" t-key="task.id">
              <Task task="task"/>
            </t>
          </div>
          </div>`;
          static components = { Task };
          nextId = 1;
          tasks = [
          ];
          addTask(ev) {
            // 13 is keycode for ENTER
            if (ev.keyCode === 13) {
                const text = ev.target.value.trim();
                ev.target.value = "";
                if (text) {
                    const newTask = {
                        id: this.nextId++,
                        text: text,
                        isCompleted: false,
                    };
                    this.tasks.push(newTask);
                }
            }
        }
      }


mount(Root, document.body, {dev: true});

