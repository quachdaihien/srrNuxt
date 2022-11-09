import { COMPONENT_SIZE_LIST } from "~/utils/contants";
const COMPONENT_CLASS = "v-" + "title";
const DEFAULT_SIZE = COMPONENT_SIZE_LIST[0];

const classes = (props) => {
  const sizeClasses = COMPONENT_SIZE_LIST.reduce((cls, size) => {
    if (size === DEFAULT_SIZE) return cls;
    cls[`${COMPONENT_CLASS}--${size}`] = props.size === size ? true : false;
    return cls;
  }, {});
  // v-title--squarre
  return {
    [`${COMPONENT_CLASS}--square`]: props.shape === "square",
    ...sizeClasses,
  };
};

export default {
  name: "Title",

  functional: true,

  props: {
    level: {
      type: Number,
      default: "",
    },
    size: {
      type: [String, Number],
      default: DEFAULT_SIZE,
    },
    color: {
      type: String,
      default: "",
    },
    shape: {
      type: String,
      default: "circle", // circle | square,
      validator: (value) => {
        if (["square", "circle"].includes(value)) {
          return true;
        } else {
          printWarning(
            `${COMPONENT_CLASS} prop 'shape' must be in ['square', 'circle'], current: '${value}'`
          );
          return false;
        }
      },
    },
  },

  render(createElement, ctx) {
    return createElement(
      "h" + ctx.props.level, // tag name
      {
        props: {
          level: ctx.props.level,
        },

        class: [COMPONENT_CLASS, classes(ctx.props)],

        style: {
          color: ctx.props.color,
        },

        attrs: {
          id: "foo",
        },

        on: {},
      }, // style

      ctx.children // array of children
    );
  },
};
