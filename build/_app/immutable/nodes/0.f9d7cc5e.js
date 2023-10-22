import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, g as transition_in, v as group_outros, d as transition_out, f as check_outros, h as detach, C as compute_rest_props, D as setContext, E as assign, F as exclude_internal_props, G as create_slot, k as element, l as claim_element, m as children, H as set_dynamic_element_data, I as action_destroyer, J as listen, K as update_slot_base, L as get_all_dirty_from_scope, M as get_slot_changes, N as get_spread_update, O as is_function, P as add_render_callback, Q as create_bidirectional_transition, R as run_all, T as bubble, w as binding_callbacks, U as getContext, a as space, c as claim_space, V as set_attributes, W as append_hydration, q as text, r as claim_text, n as attr, u as set_data, X as get_current_component, o as onMount, Y as noop, y as create_component, z as claim_component, A as mount_component, Z as get_spread_object, B as destroy_component, _ as bind, $ as add_flush_callback, a0 as compute_slots, a1 as svg_element, a2 as claim_svg_element, a3 as set_svg_attributes, a4 as src_url_equal, a5 as destroy_each, p as set_style, a6 as set_input_value, a7 as component_subscribe, a8 as createEventDispatcher$1, a9 as prevent_default, aa as onDestroy } from "../chunks/index.7f5fe353.js";
import { t as twMerge, a as twJoin, B as Button, g as goto, b as beforeNavigate, c as afterNavigate } from "../chunks/navigation.90129433.js";
import { w as writable } from "../chunks/paths.de60f601.js";
import { s as sbtcConfig, m as makeFlash, l as loginStacksJs, i as initApplication, a as logUserOut, b as loggedIn, c as isCoordinator, d as isLegal, e as defaultConfig } from "../chunks/stores.fc72d1a8.js";
import { C as CONFIG, f as fmtMicroToStx, a as fmtSatoshiToBitcoin, b as bitcoinBalanceFromMempool, t as truncate, s as setConfig } from "../chunks/utils.eacbc159.js";
import { p as page } from "../chunks/stores.cf6de67f.js";
const prerender = false;
const ssr = false;
async function load() {
  return {};
}
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load,
  prerender,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
const app = "";
const sbtc = "";
function create_dynamic_element$3(ctx) {
  let svelte_element;
  let use_action;
  let svelte_element_transition;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[14].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[13],
    null
  );
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[8],
    { class: (
      /*divClass*/
      ctx[7]
    ) },
    { role: (
      /*role*/
      ctx[6]
    ) }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*tag*/
        ctx[1]
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*tag*/
        (ctx[1] || "null").toUpperCase(),
        { class: true, role: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_dynamic_element_data(
        /*tag*/
        ctx[1]
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      ctx[20](svelte_element);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(use_action = /*use*/
          ctx[4].call(
            null,
            svelte_element,
            /*options*/
            ctx[5]
          )),
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[17]
          ),
          listen(
            svelte_element,
            "focusin",
            /*focusin_handler*/
            ctx[18]
          ),
          listen(
            svelte_element,
            "focusout",
            /*focusout_handler*/
            ctx[19]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8192)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[13],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[13]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[13],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*tag*/
        ctx[1]
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        dirty & /*$$restProps*/
        256 && /*$$restProps*/
        ctx[8],
        (!current || dirty & /*divClass*/
        128) && { class: (
          /*divClass*/
          ctx[7]
        ) },
        (!current || dirty & /*role*/
        64) && { role: (
          /*role*/
          ctx[6]
        ) }
      ]));
      if (use_action && is_function(use_action.update) && dirty & /*options*/
      32)
        use_action.update.call(
          null,
          /*options*/
          ctx[5]
        );
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      add_render_callback(() => {
        if (!current)
          return;
        if (!svelte_element_transition)
          svelte_element_transition = create_bidirectional_transition(
            svelte_element,
            /*transition*/
            ctx[2],
            /*params*/
            ctx[3],
            true
          );
        svelte_element_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (!svelte_element_transition)
        svelte_element_transition = create_bidirectional_transition(
          svelte_element,
          /*transition*/
          ctx[2],
          /*params*/
          ctx[3],
          false
        );
      svelte_element_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      ctx[20](null);
      if (detaching && svelte_element_transition)
        svelte_element_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$l(ctx) {
  let previous_tag = (
    /*tag*/
    ctx[1]
  );
  let svelte_element_anchor;
  let tag_will_be_removed = false;
  let current;
  let svelte_element = (
    /*tag*/
    ctx[1] && create_dynamic_element$3(ctx)
  );
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element)
        svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*tag*/
        ctx2[1]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$3(ctx2);
          previous_tag = /*tag*/
          ctx2[1];
          svelte_element.c();
          transition_in(svelte_element);
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*tag*/
          ctx2[1]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element$3(ctx2);
          previous_tag = /*tag*/
          ctx2[1];
          svelte_element.c();
          if (tag_will_be_removed) {
            tag_will_be_removed = false;
            transition_in(svelte_element);
          }
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          if (tag_will_be_removed) {
            tag_will_be_removed = false;
            transition_in(svelte_element);
          }
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        tag_will_be_removed = true;
        group_outros();
        transition_out(svelte_element, 1, 1, () => {
          svelte_element = null;
          previous_tag = /*tag*/
          ctx2[1];
          tag_will_be_removed = false;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options",
    "role"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const null_transition = () => ({ duration: 0 });
  const noop2 = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = null_transition } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop2 } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focusin_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focusout_handler(event) {
    bubble.call(this, $$self, event);
  }
  function svelte_element_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      node = $$value;
      $$invalidate(0, node);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(26, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("tag" in $$new_props)
      $$invalidate(1, tag = $$new_props.tag);
    if ("color" in $$new_props)
      $$invalidate(9, color = $$new_props.color);
    if ("rounded" in $$new_props)
      $$invalidate(10, rounded = $$new_props.rounded);
    if ("border" in $$new_props)
      $$invalidate(11, border = $$new_props.border);
    if ("shadow" in $$new_props)
      $$invalidate(12, shadow = $$new_props.shadow);
    if ("transition" in $$new_props)
      $$invalidate(2, transition = $$new_props.transition);
    if ("params" in $$new_props)
      $$invalidate(3, params = $$new_props.params);
    if ("node" in $$new_props)
      $$invalidate(0, node = $$new_props.node);
    if ("use" in $$new_props)
      $$invalidate(4, use = $$new_props.use);
    if ("options" in $$new_props)
      $$invalidate(5, options = $$new_props.options);
    if ("role" in $$new_props)
      $$invalidate(6, role = $$new_props.role);
    if ("$$scope" in $$new_props)
      $$invalidate(13, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*color*/
    512) {
      $$invalidate(9, color = color ?? "default");
    }
    if ($$self.$$.dirty & /*color*/
    512) {
      setContext("color", color);
    }
    $$invalidate(7, divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    node,
    tag,
    transition,
    params,
    use,
    options,
    role,
    divClass,
    $$restProps,
    color,
    rounded,
    border,
    shadow,
    $$scope,
    slots,
    click_handler,
    mouseenter_handler,
    mouseleave_handler,
    focusin_handler,
    focusout_handler,
    svelte_element_binding
  ];
}
class Frame extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$l, safe_not_equal, {
      tag: 1,
      color: 9,
      rounded: 10,
      border: 11,
      shadow: 12,
      transition: 2,
      params: 3,
      node: 0,
      use: 4,
      options: 5,
      role: 6
    });
  }
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`);
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(style[`border${capitalized_secondary_properties[0]}Width`]);
  const border_width_end_value = parseFloat(style[`border${capitalized_secondary_properties[1]}Width`]);
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
const get_default_slot_changes_1 = (dirty) => ({ svgSize: dirty & /*size*/
4 });
const get_default_slot_context_1 = (ctx) => ({
  svgSize: (
    /*svgSizes*/
    ctx[5][
      /*size*/
      ctx[2]
    ]
  )
});
const get_default_slot_changes$1 = (dirty) => ({ svgSize: dirty & /*size*/
4 });
const get_default_slot_context$1 = (ctx) => ({
  svgSize: (
    /*svgSizes*/
    ctx[5][
      /*size*/
      ctx[2]
    ]
  )
});
function create_else_block$3(ctx) {
  let button;
  let t;
  let button_aria_label_value;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*name*/
    ctx[0] && create_if_block_2$2(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_default_slot_context_1
  );
  let button_levels = [
    { type: "button" },
    /*$$restProps*/
    ctx[6],
    { class: (
      /*buttonClass*/
      ctx[4]
    ) },
    {
      "aria-label": button_aria_label_value = /*ariaLabel*/
      ctx[1] ?? /*name*/
      ctx[0]
    }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        class: true,
        "aria-label": true
      });
      var button_nodes = children(button);
      if (if_block)
        if_block.l(button_nodes);
      t = claim_space(button_nodes);
      if (default_slot)
        default_slot.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      append_hydration(button, t);
      if (default_slot) {
        default_slot.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[10]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*name*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_2$2(ctx2);
          if_block.c();
          if_block.m(button, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, size*/
        260)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_default_slot_changes_1
            ),
            get_default_slot_context_1
          );
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { type: "button" },
        dirty & /*$$restProps*/
        64 && /*$$restProps*/
        ctx2[6],
        (!current || dirty & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          ctx2[4]
        ) },
        (!current || dirty & /*ariaLabel, name*/
        3 && button_aria_label_value !== (button_aria_label_value = /*ariaLabel*/
        ctx2[1] ?? /*name*/
        ctx2[0])) && { "aria-label": button_aria_label_value }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$6(ctx) {
  let a;
  let t;
  let a_aria_label_value;
  let current;
  let if_block = (
    /*name*/
    ctx[0] && create_if_block_1$3(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_default_slot_context$1
  );
  let a_levels = [
    { href: (
      /*href*/
      ctx[3]
    ) },
    /*$$restProps*/
    ctx[6],
    { class: (
      /*buttonClass*/
      ctx[4]
    ) },
    {
      "aria-label": a_aria_label_value = /*ariaLabel*/
      ctx[1] ?? /*name*/
      ctx[0]
    }
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        class: true,
        "aria-label": true
      });
      var a_nodes = children(a);
      if (if_block)
        if_block.l(a_nodes);
      t = claim_space(a_nodes);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (if_block)
        if_block.m(a, null);
      append_hydration(a, t);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*name*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$3(ctx2);
          if_block.c();
          if_block.m(a, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, size*/
        260)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_default_slot_changes$1
            ),
            get_default_slot_context$1
          );
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & /*href*/
        8) && { href: (
          /*href*/
          ctx2[3]
        ) },
        dirty & /*$$restProps*/
        64 && /*$$restProps*/
        ctx2[6],
        (!current || dirty & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          ctx2[4]
        ) },
        (!current || dirty & /*ariaLabel, name*/
        3 && a_aria_label_value !== (a_aria_label_value = /*ariaLabel*/
        ctx2[1] ?? /*name*/
        ctx2[0])) && { "aria-label": a_aria_label_value }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block_2$2(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*name*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*name*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*name*/
      1)
        set_data(
          t,
          /*name*/
          ctx2[0]
        );
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_1$3(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*name*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*name*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*name*/
      1)
        set_data(
          t,
          /*name*/
          ctx2[0]
        );
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$k(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$6, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*href*/
      ctx2[3]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
  const omit_props_names = ["color", "name", "ariaLabel", "size", "href"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(7, color = $$new_props.color);
    if ("name" in $$new_props)
      $$invalidate(0, name = $$new_props.name);
    if ("ariaLabel" in $$new_props)
      $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("href" in $$new_props)
      $$invalidate(3, href = $$new_props.href);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(4, buttonClass = twMerge(
      "focus:outline-none whitespace-normal",
      sizing[size],
      colors[color],
      color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
      $$props.class
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    name,
    ariaLabel,
    size,
    href,
    buttonClass,
    svgSizes,
    $$restProps,
    color,
    $$scope,
    slots,
    click_handler
  ];
}
class ToolbarButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$k, safe_not_equal, {
      color: 7,
      name: 0,
      ariaLabel: 1,
      size: 2,
      href: 3
    });
  }
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements
    } = state;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max2 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 + alignmentOffset
      }
    };
  }
});
const flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
const shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element2) {
  return ["table", "td", "th"].includes(getNodeName(element2));
}
function isContainingBlock(element2) {
  const webkit = isWebKit();
  const css = getComputedStyle$1(element2);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.pageXOffset,
    scrollTop: element2.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getCssDimensions(element2) {
  const css = getComputedStyle$1(element2);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element2) {
  const win = getWindow(element2);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element2, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element2)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element2) {
  return Array.from(element2.getClientRects());
}
function getWindowScrollBarX(element2) {
  return getBoundingClientRect(getDocumentElement(element2)).left + getNodeScroll(element2).scrollLeft;
}
function getDocumentRect(element2) {
  const html = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement(element2) ? getScale(element2) : createCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  return getCssDimensions(element2);
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element2, polyfill) {
  if (!isHTMLElement(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element2);
  }
  return element2.offsetParent;
}
function getOffsetParent(element2, polyfill) {
  const window2 = getWindow(element2);
  if (!isHTMLElement(element2)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element2) || window2;
}
const getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element2) {
  return getComputedStyle$1(element2).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element2, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element2);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element2.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element2);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function create_if_block_2$1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      children(div).forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      ctx[22](div);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[22](null);
    }
  };
}
function create_if_block$5(ctx) {
  let frame;
  let current;
  const frame_spread_levels = [
    { use: (
      /*init*/
      ctx[9]
    ) },
    { options: (
      /*referenceEl*/
      ctx[3]
    ) },
    { role: "tooltip" },
    {
      tabindex: (
        /*activeContent*/
        ctx[1] ? -1 : void 0
      )
    },
    /*$$restProps*/
    ctx[11]
  ];
  let frame_props = {
    $$slots: { default: [create_default_slot$7] },
    $$scope: { ctx }
  };
  for (let i = 0; i < frame_spread_levels.length; i += 1) {
    frame_props = assign(frame_props, frame_spread_levels[i]);
  }
  frame = new Frame({ props: frame_props });
  frame.$on("focusin", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1],
      /*showHandler*/
      ctx[7]
    )))
      optional(
        /*activeContent*/
        ctx[1],
        /*showHandler*/
        ctx[7]
      ).apply(this, arguments);
  });
  frame.$on("focusout", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1],
      /*hideHandler*/
      ctx[8]
    )))
      optional(
        /*activeContent*/
        ctx[1],
        /*hideHandler*/
        ctx[8]
      ).apply(this, arguments);
  });
  frame.$on("mouseenter", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1] && !/*clickable*/
      ctx[4],
      /*showHandler*/
      ctx[7]
    )))
      optional(
        /*activeContent*/
        ctx[1] && !/*clickable*/
        ctx[4],
        /*showHandler*/
        ctx[7]
      ).apply(this, arguments);
  });
  frame.$on("mouseleave", function() {
    if (is_function(optional(
      /*activeContent*/
      ctx[1] && !/*clickable*/
      ctx[4],
      /*hideHandler*/
      ctx[8]
    )))
      optional(
        /*activeContent*/
        ctx[1] && !/*clickable*/
        ctx[4],
        /*hideHandler*/
        ctx[8]
      ).apply(this, arguments);
  });
  return {
    c() {
      create_component(frame.$$.fragment);
    },
    l(nodes) {
      claim_component(frame.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(frame, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const frame_changes = dirty[0] & /*init, referenceEl, activeContent, $$restProps*/
      2570 ? get_spread_update(frame_spread_levels, [
        dirty[0] & /*init*/
        512 && { use: (
          /*init*/
          ctx[9]
        ) },
        dirty[0] & /*referenceEl*/
        8 && { options: (
          /*referenceEl*/
          ctx[3]
        ) },
        frame_spread_levels[2],
        dirty[0] & /*activeContent*/
        2 && {
          tabindex: (
            /*activeContent*/
            ctx[1] ? -1 : void 0
          )
        },
        dirty[0] & /*$$restProps*/
        2048 && get_spread_object(
          /*$$restProps*/
          ctx[11]
        )
      ]) : {};
      if (dirty[0] & /*$$scope, arrowClass, arrow*/
      8388676) {
        frame_changes.$$scope = { dirty, ctx };
      }
      frame.$set(frame_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(frame, detaching);
    }
  };
}
function create_if_block_1$2(ctx) {
  let div;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(
        div,
        "class",
        /*arrowClass*/
        ctx[6]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = action_destroyer(
          /*initArrow*/
          ctx[10].call(null, div)
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*arrowClass*/
      64) {
        attr(
          div,
          "class",
          /*arrowClass*/
          ctx2[6]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot$7(ctx) {
  let t;
  let if_block_anchor;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[21].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[23],
    null
  );
  let if_block = (
    /*arrow*/
    ctx[2] && create_if_block_1$2(ctx)
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope*/
        8388608)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[23],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[23]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[23],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (
        /*arrow*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$2(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$j(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = !/*referenceEl*/
  ctx[3] && create_if_block_2$1(ctx);
  let if_block1 = (
    /*open*/
    ctx[0] && /*referenceEl*/
    ctx[3] && create_if_block$5(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (!/*referenceEl*/
      ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2$1(ctx2);
          if_block0.c();
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*open*/
        ctx2[0] && /*referenceEl*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & /*open, referenceEl*/
          9) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$5(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function optional(pred, func) {
  return pred ? func : () => void 0;
}
function instance$h($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { activeContent = false } = $$props;
  let { arrow: arrow$1 = true } = $$props;
  let { offset: offset$1 = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let clickable;
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  let triggerEls = [];
  let _blocked = false;
  const block = () => (_blocked = true, setTimeout(() => _blocked = false, 250));
  const showHandler = (ev) => {
    if (referenceEl === void 0)
      console.error("trigger undefined");
    if (!reference && triggerEls.includes(ev.target) && referenceEl !== ev.target) {
      $$invalidate(3, referenceEl = ev.target);
      block();
    }
    if (clickable && ev.type === "focusin" && !open)
      block();
    $$invalidate(0, open = clickable && ev.type === "click" && !_blocked ? !open : true);
  };
  const hasHover = (el) => el.matches(":hover");
  const hasFocus = (el) => el.contains(document.activeElement);
  const px = (n) => n != null ? `${n}px` : "";
  const hideHandler = (ev) => {
    if (activeContent) {
      setTimeout(
        () => {
          const elements = [referenceEl, floatingEl, ...triggerEls].filter(Boolean);
          if (ev.type === "mouseleave" && elements.some(hasHover))
            return;
          if (ev.type === "focusout" && elements.some(hasFocus))
            return;
          $$invalidate(0, open = false);
        },
        100
      );
    } else
      $$invalidate(0, open = false);
  };
  let arrowSide;
  const oppositeSideMap2 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  let middleware;
  function updatePosition() {
    computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        $$invalidate(19, arrowEl.style.left = px(middlewareData.arrow.x), arrowEl);
        $$invalidate(19, arrowEl.style.top = px(middlewareData.arrow.y), arrowEl);
        $$invalidate(20, arrowSide = oppositeSideMap2[placement2.split("-")[0]]);
        $$invalidate(19, arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0)), arrowEl);
      }
    });
  }
  function init2(node, _referenceEl) {
    floatingEl = node;
    let cleanup = autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  onMount(() => {
    const events = [
      ["focusin", showHandler, true],
      ["focusout", hideHandler, true],
      ["click", showHandler, clickable],
      ["mouseenter", showHandler, !clickable],
      ["mouseleave", hideHandler, !clickable]
    ];
    if (triggeredBy)
      triggerEls = [...document.querySelectorAll(triggeredBy)];
    else
      triggerEls = contentEl.previousElementSibling ? [contentEl.previousElementSibling] : [];
    if (!triggerEls.length) {
      console.error("No triggers found.");
    }
    triggerEls.forEach((element2) => {
      if (element2.tabIndex < 0)
        element2.tabIndex = 0;
      for (const [name, handler, cond] of events)
        if (cond)
          element2.addEventListener(name, handler);
    });
    if (reference) {
      $$invalidate(3, referenceEl = document.querySelector(reference) ?? document.body);
      if (referenceEl === document.body) {
        console.error(`Popup reference not found: '${reference}'`);
      } else {
        referenceEl.addEventListener("focusout", hideHandler);
        if (!clickable)
          referenceEl.addEventListener("mouseleave", hideHandler);
      }
    } else {
      $$invalidate(3, referenceEl = triggerEls[0]);
    }
    return () => {
      triggerEls.forEach((element2) => {
        if (element2) {
          for (const [name, handler] of events)
            element2.removeEventListener(name, handler);
        }
      });
      if (referenceEl) {
        referenceEl.addEventListener("focusout", hideHandler);
        referenceEl.addEventListener("mouseleave", hideHandler);
      }
    };
  });
  let arrowClass;
  function initArrow(node) {
    $$invalidate(19, arrowEl = node);
    return {
      destroy() {
        $$invalidate(19, arrowEl = null);
      }
    };
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      contentEl = $$value;
      $$invalidate(5, contentEl);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(35, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("activeContent" in $$new_props)
      $$invalidate(1, activeContent = $$new_props.activeContent);
    if ("arrow" in $$new_props)
      $$invalidate(2, arrow$1 = $$new_props.arrow);
    if ("offset" in $$new_props)
      $$invalidate(12, offset$1 = $$new_props.offset);
    if ("placement" in $$new_props)
      $$invalidate(13, placement = $$new_props.placement);
    if ("trigger" in $$new_props)
      $$invalidate(14, trigger = $$new_props.trigger);
    if ("triggeredBy" in $$new_props)
      $$invalidate(15, triggeredBy = $$new_props.triggeredBy);
    if ("reference" in $$new_props)
      $$invalidate(16, reference = $$new_props.reference);
    if ("strategy" in $$new_props)
      $$invalidate(17, strategy = $$new_props.strategy);
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("yOnly" in $$new_props)
      $$invalidate(18, yOnly = $$new_props.yOnly);
    if ("$$scope" in $$new_props)
      $$invalidate(23, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*trigger*/
    16384) {
      $$invalidate(4, clickable = trigger === "click");
    }
    if ($$self.$$.dirty[0] & /*placement, referenceEl*/
    8200) {
      placement && ($$invalidate(3, referenceEl), $$invalidate(13, placement));
    }
    if ($$self.$$.dirty[0] & /*referenceEl, open*/
    9) {
      dispatch("show", referenceEl, open);
    }
    if ($$self.$$.dirty[0] & /*offset, arrowEl*/
    528384) {
      middleware = [
        flip(),
        shift(),
        offset(+offset$1),
        arrowEl && arrow({ element: arrowEl, padding: 10 })
      ];
    }
    $$invalidate(6, arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-r", $$props.border && arrowSide === "top" && "border-t border-l ", $$props.border && arrowSide === "right" && "border-t border-r ", $$props.border && arrowSide === "left" && "border-b border-l "));
  };
  $$props = exclude_internal_props($$props);
  return [
    open,
    activeContent,
    arrow$1,
    referenceEl,
    clickable,
    contentEl,
    arrowClass,
    showHandler,
    hideHandler,
    init2,
    initArrow,
    $$restProps,
    offset$1,
    placement,
    trigger,
    triggeredBy,
    reference,
    strategy,
    yOnly,
    arrowEl,
    arrowSide,
    slots,
    div_binding,
    $$scope
  ];
}
class Popper extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$h,
      create_fragment$j,
      safe_not_equal,
      {
        activeContent: 1,
        arrow: 2,
        offset: 12,
        placement: 13,
        trigger: 14,
        triggeredBy: 15,
        reference: 16,
        strategy: 17,
        open: 0,
        yOnly: 18
      },
      null,
      [-1, -1]
    );
  }
}
const get_footer_slot_changes = (dirty) => ({});
const get_footer_slot_context = (ctx) => ({});
const get_header_slot_changes = (dirty) => ({});
const get_header_slot_context = (ctx) => ({});
function create_if_block_1$1(ctx) {
  let div;
  let current;
  const header_slot_template = (
    /*#slots*/
    ctx[12].header
  );
  const header_slot = create_slot(
    header_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
    get_header_slot_context
  );
  return {
    c() {
      div = element("div");
      if (header_slot)
        header_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (header_slot)
        header_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        div,
        "class",
        /*headerCls*/
        ctx[2]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (header_slot) {
        header_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (header_slot) {
        if (header_slot.p && (!current || dirty & /*$$scope*/
        32768)) {
          update_slot_base(
            header_slot,
            header_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              header_slot_template,
              /*$$scope*/
              ctx2[15],
              dirty,
              get_header_slot_changes
            ),
            get_header_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (header_slot)
        header_slot.d(detaching);
    }
  };
}
function create_if_block$4(ctx) {
  let div;
  let current;
  const footer_slot_template = (
    /*#slots*/
    ctx[12].footer
  );
  const footer_slot = create_slot(
    footer_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
    get_footer_slot_context
  );
  return {
    c() {
      div = element("div");
      if (footer_slot)
        footer_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (footer_slot)
        footer_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        div,
        "class",
        /*footerCls*/
        ctx[4]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (footer_slot) {
        footer_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (footer_slot) {
        if (footer_slot.p && (!current || dirty & /*$$scope*/
        32768)) {
          update_slot_base(
            footer_slot,
            footer_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              footer_slot_template,
              /*$$scope*/
              ctx2[15],
              dirty,
              get_footer_slot_changes
            ),
            get_footer_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(footer_slot, local);
      current = true;
    },
    o(local) {
      transition_out(footer_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (footer_slot)
        footer_slot.d(detaching);
    }
  };
}
function create_default_slot$6(ctx) {
  let t0;
  let ul;
  let t1;
  let if_block1_anchor;
  let current;
  let if_block0 = (
    /*$$slots*/
    ctx[6].header && create_if_block_1$1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[12].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
    null
  );
  let if_block1 = (
    /*$$slots*/
    ctx[6].footer && create_if_block$4(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(
        ul,
        "class",
        /*ulCls*/
        ctx[3]
      );
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, ul, anchor);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*$$slots*/
        ctx2[6].header
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          64) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32768)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[15],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (
        /*$$slots*/
        ctx2[6].footer
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          64) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$4(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(default_slot, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(default_slot, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(ul);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_fragment$i(ctx) {
  let popper;
  let updating_open;
  let current;
  const popper_spread_levels = [
    { activeContent: true },
    /*$$restProps*/
    ctx[5],
    { class: (
      /*containerCls*/
      ctx[1]
    ) }
  ];
  function popper_open_binding(value) {
    ctx[13](value);
  }
  let popper_props = {
    $$slots: { default: [create_default_slot$6] },
    $$scope: { ctx }
  };
  for (let i = 0; i < popper_spread_levels.length; i += 1) {
    popper_props = assign(popper_props, popper_spread_levels[i]);
  }
  if (
    /*open*/
    ctx[0] !== void 0
  ) {
    popper_props.open = /*open*/
    ctx[0];
  }
  popper = new Popper({ props: popper_props });
  binding_callbacks.push(() => bind(popper, "open", popper_open_binding));
  popper.$on(
    "show",
    /*show_handler*/
    ctx[14]
  );
  return {
    c() {
      create_component(popper.$$.fragment);
    },
    l(nodes) {
      claim_component(popper.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(popper, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const popper_changes = dirty & /*$$restProps, containerCls*/
      34 ? get_spread_update(popper_spread_levels, [
        popper_spread_levels[0],
        dirty & /*$$restProps*/
        32 && get_spread_object(
          /*$$restProps*/
          ctx2[5]
        ),
        dirty & /*containerCls*/
        2 && { class: (
          /*containerCls*/
          ctx2[1]
        ) }
      ]) : {};
      if (dirty & /*$$scope, $$slots*/
      32832) {
        popper_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*open*/
      1) {
        updating_open = true;
        popper_changes.open = /*open*/
        ctx2[0];
        add_flush_callback(() => updating_open = false);
      }
      popper.$set(popper_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(popper.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(popper.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(popper, detaching);
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  const omit_props_names = ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let activeCls = twMerge(activeClass, $$props.classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  let containerCls = twMerge(containerClass, $$props.classContainer);
  let headerCls = twMerge(headerClass, $$props.classHeader);
  let ulCls = twMerge("py-1", $$props.class);
  let footerCls = twMerge(footerClass, $$props.classFooter);
  function popper_open_binding(value) {
    open = value;
    $$invalidate(0, open);
  }
  function show_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("activeUrl" in $$new_props)
      $$invalidate(7, activeUrl = $$new_props.activeUrl);
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("containerClass" in $$new_props)
      $$invalidate(8, containerClass = $$new_props.containerClass);
    if ("headerClass" in $$new_props)
      $$invalidate(9, headerClass = $$new_props.headerClass);
    if ("footerClass" in $$new_props)
      $$invalidate(10, footerClass = $$new_props.footerClass);
    if ("activeClass" in $$new_props)
      $$invalidate(11, activeClass = $$new_props.activeClass);
    if ("$$scope" in $$new_props)
      $$invalidate(15, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*activeUrl*/
    128) {
      activeUrlStore.set(activeUrl);
    }
    {
      $$invalidate(5, $$restProps.arrow = $$restProps.arrow ?? false, $$restProps);
      $$invalidate(5, $$restProps.trigger = $$restProps.trigger ?? "click", $$restProps);
      $$invalidate(5, $$restProps.placement = $$restProps.placement ?? "bottom", $$restProps);
      $$invalidate(5, $$restProps.color = $$restProps.color ?? "dropdown", $$restProps);
      $$invalidate(5, $$restProps.shadow = $$restProps.shadow ?? true, $$restProps);
      $$invalidate(5, $$restProps.rounded = $$restProps.rounded ?? true, $$restProps);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    open,
    containerCls,
    headerCls,
    ulCls,
    footerCls,
    $$restProps,
    $$slots,
    activeUrl,
    containerClass,
    headerClass,
    footerClass,
    activeClass,
    slots,
    popper_open_binding,
    show_handler,
    $$scope
  ];
}
class Dropdown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$i, safe_not_equal, {
      activeUrl: 7,
      open: 0,
      containerClass: 8,
      headerClass: 9,
      footerClass: 10,
      activeClass: 11
    });
  }
}
function create_else_block$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$3(ctx) {
  let previous_tag = (
    /*tag*/
    ctx[0]
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*tag*/
    ctx[0] && create_dynamic_element$2(ctx)
  );
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element)
        svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*tag*/
        ctx2[0]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$2(ctx2);
          previous_tag = /*tag*/
          ctx2[0];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*tag*/
          ctx2[0]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element$2(ctx2);
          previous_tag = /*tag*/
          ctx2[0];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*tag*/
        ctx2[0];
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function create_dynamic_element$2(ctx) {
  let svelte_element;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[3]
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*tag*/
        ctx[0]
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*tag*/
        (ctx[0] || "null").toUpperCase(),
        {}
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_dynamic_element_data(
        /*tag*/
        ctx[0]
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(
          /*use*/
          ctx[2].call(null, svelte_element)
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*tag*/
        ctx2[0]
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [dirty & /*$$restProps*/
      8 && /*$$restProps*/
      ctx2[3]]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$h(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$3, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*show*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  const omit_props_names = ["tag", "show", "use"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("tag" in $$new_props)
      $$invalidate(0, tag = $$new_props.tag);
    if ("show" in $$new_props)
      $$invalidate(1, show = $$new_props.show);
    if ("use" in $$new_props)
      $$invalidate(2, use = $$new_props.use);
    if ("$$scope" in $$new_props)
      $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  return [tag, show, use, $$restProps, $$scope, slots];
}
class Wrapper extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$h, safe_not_equal, { tag: 0, show: 1, use: 2 });
  }
}
function create_dynamic_element$1(ctx) {
  let svelte_element;
  let svelte_element_type_value;
  let svelte_element_role_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    null
  );
  let svelte_element_levels = [
    { href: (
      /*href*/
      ctx[0]
    ) },
    {
      type: svelte_element_type_value = /*href*/
      ctx[0] ? void 0 : "button"
    },
    {
      role: svelte_element_role_value = /*href*/
      ctx[0] ? "link" : "button"
    },
    /*$$restProps*/
    ctx[4],
    { class: (
      /*liClass*/
      ctx[2]
    ) }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[0] ? "a" : "button"
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[0] ? "a" : "button") || "null").toUpperCase(),
        {
          href: true,
          type: true,
          role: true,
          class: true
        }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_dynamic_element_data(
        /*href*/
        ctx[0] ? "a" : "button"
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[10]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[11]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[12]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[13]
          ),
          listen(
            svelte_element,
            "focus",
            /*focus_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "blur",
            /*blur_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[17]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        262144)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*href*/
        ctx2[0] ? "a" : "button"
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        (!current || dirty & /*href*/
        1 && svelte_element_type_value !== (svelte_element_type_value = /*href*/
        ctx2[0] ? void 0 : "button")) && { type: svelte_element_type_value },
        (!current || dirty & /*href*/
        1 && svelte_element_role_value !== (svelte_element_role_value = /*href*/
        ctx2[0] ? "link" : "button")) && { role: svelte_element_role_value },
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        (!current || dirty & /*liClass*/
        4) && { class: (
          /*liClass*/
          ctx2[2]
        ) }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_default_slot$5(ctx) {
  let previous_tag = (
    /*href*/
    ctx[0] ? "a" : "button"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[0] ? "a" : "button") && create_dynamic_element$1(ctx)
  );
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element)
        svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*href*/
        ctx2[0] ? "a" : "button"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$1(ctx2);
          previous_tag = /*href*/
          ctx2[0] ? "a" : "button";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[0] ? "a" : "button"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element$1(ctx2);
          previous_tag = /*href*/
          ctx2[0] ? "a" : "button";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*href*/
        ctx2[0] ? "a" : "button";
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function create_fragment$g(ctx) {
  let wrapper;
  let current;
  wrapper = new Wrapper({
    props: {
      tag: "li",
      show: (
        /*wrap*/
        ctx[1]
      ),
      use: (
        /*init*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(wrapper.$$.fragment);
    },
    l(nodes) {
      claim_component(wrapper.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(wrapper, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const wrapper_changes = {};
      if (dirty & /*wrap*/
      2)
        wrapper_changes.show = /*wrap*/
        ctx2[1];
      if (dirty & /*$$scope, href, $$restProps, liClass*/
      262165) {
        wrapper_changes.$$scope = { dirty, ctx: ctx2 };
      }
      wrapper.$set(wrapper_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(wrapper.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(wrapper.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(wrapper, detaching);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  let active;
  let liClass;
  const omit_props_names = ["defaultClass", "href", "activeClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    $$invalidate(7, sidebarUrl = value);
  });
  let wrap = true;
  function init2(node) {
    var _a;
    $$invalidate(1, wrap = ((_a = node.parentElement) == null ? void 0 : _a.tagName) === "UL");
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(21, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("defaultClass" in $$new_props)
      $$invalidate(5, defaultClass = $$new_props.defaultClass);
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("activeClass" in $$new_props)
      $$invalidate(6, activeClass = $$new_props.activeClass);
    if ("$$scope" in $$new_props)
      $$invalidate(18, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*sidebarUrl, href*/
    129) {
      $$invalidate(8, active = sidebarUrl ? href === sidebarUrl : false);
    }
    $$invalidate(2, liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    href,
    wrap,
    liClass,
    init2,
    $$restProps,
    defaultClass,
    activeClass,
    sidebarUrl,
    active,
    slots,
    click_handler,
    change_handler,
    keydown_handler,
    keyup_handler,
    focus_handler,
    blur_handler,
    mouseenter_handler,
    mouseleave_handler,
    $$scope
  ];
}
class DropdownItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$g, safe_not_equal, { defaultClass: 5, href: 0, activeClass: 6 });
  }
}
const get_default_slot_changes = (dirty) => ({ hidden: dirty & /*hidden*/
8 });
const get_default_slot_context = (ctx) => ({
  hidden: (
    /*hidden*/
    ctx[3]
  ),
  toggle: (
    /*toggle*/
    ctx[4]
  )
});
function create_default_slot$4(ctx) {
  let div;
  let div_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_default_slot_context
  );
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = twMerge(
        /*navDivClass*/
        ctx[1],
        /*$$props*/
        ctx[6].classNavDiv,
        /*fluid*/
        ctx[2] && "w-full" || "container"
      ));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, hidden*/
        264)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if (!current || dirty & /*navDivClass, $$props, fluid*/
      70 && div_class_value !== (div_class_value = twMerge(
        /*navDivClass*/
        ctx2[1],
        /*$$props*/
        ctx2[6].classNavDiv,
        /*fluid*/
        ctx2[2] && "w-full" || "container"
      ))) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$f(ctx) {
  let frame;
  let current;
  const frame_spread_levels = [
    { tag: "nav" },
    /*$$restProps*/
    ctx[5],
    {
      class: twMerge(
        /*navClass*/
        ctx[0],
        /*$$props*/
        ctx[6].class
      )
    }
  ];
  let frame_props = {
    $$slots: { default: [create_default_slot$4] },
    $$scope: { ctx }
  };
  for (let i = 0; i < frame_spread_levels.length; i += 1) {
    frame_props = assign(frame_props, frame_spread_levels[i]);
  }
  frame = new Frame({ props: frame_props });
  return {
    c() {
      create_component(frame.$$.fragment);
    },
    l(nodes) {
      claim_component(frame.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(frame, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const frame_changes = dirty & /*$$restProps, twMerge, navClass, $$props*/
      97 ? get_spread_update(frame_spread_levels, [
        frame_spread_levels[0],
        dirty & /*$$restProps*/
        32 && get_spread_object(
          /*$$restProps*/
          ctx2[5]
        ),
        dirty & /*twMerge, navClass, $$props*/
        65 && {
          class: twMerge(
            /*navClass*/
            ctx2[0],
            /*$$props*/
            ctx2[6].class
          )
        }
      ]) : {};
      if (dirty & /*$$scope, navDivClass, $$props, fluid, hidden*/
      334) {
        frame_changes.$$scope = { dirty, ctx: ctx2 };
      }
      frame.$set(frame_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(frame, detaching);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  const omit_props_names = ["navClass", "navDivClass", "fluid"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = false } = $$props;
  let hidden = true;
  let toggle = () => {
    $$invalidate(3, hidden = !hidden);
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("navClass" in $$new_props)
      $$invalidate(0, navClass = $$new_props.navClass);
    if ("navDivClass" in $$new_props)
      $$invalidate(1, navDivClass = $$new_props.navDivClass);
    if ("fluid" in $$new_props)
      $$invalidate(2, fluid = $$new_props.fluid);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    {
      $$invalidate(5, $$restProps.color = $$restProps.color ?? "navbar", $$restProps);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    navClass,
    navDivClass,
    fluid,
    hidden,
    toggle,
    $$restProps,
    $$props,
    slots,
    $$scope
  ];
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$f, safe_not_equal, { navClass: 0, navDivClass: 1, fluid: 2 });
  }
}
function create_fragment$e(ctx) {
  let a;
  let a_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  let a_levels = [
    { href: (
      /*href*/
      ctx[0]
    ) },
    /*$$restProps*/
    ctx[1],
    {
      class: a_class_value = twMerge(
        "flex items-center",
        /*$$props*/
        ctx[2].class
      )
    }
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        dirty & /*$$restProps*/
        2 && /*$$restProps*/
        ctx2[1],
        (!current || dirty & /*$$props*/
        4 && a_class_value !== (a_class_value = twMerge(
          "flex items-center",
          /*$$props*/
          ctx2[2].class
        ))) && { class: a_class_value }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  const omit_props_names = ["href"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("$$scope" in $$new_props)
      $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [href, $$restProps, $$props, $$scope, slots];
}
class NavBrand extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$e, safe_not_equal, { href: 0 });
  }
}
function create_fragment$d(ctx) {
  let svg;
  let svg_class_value;
  let mounted;
  let dispose;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { role: "button" },
    { tabindex: "0" },
    { width: (
      /*size*/
      ctx[0]
    ) },
    { height: (
      /*size*/
      ctx[0]
    ) },
    {
      class: svg_class_value = /*$$props*/
      ctx[4].class
    },
    /*$$restProps*/
    ctx[5],
    { "aria-label": (
      /*ariaLabel*/
      ctx[1]
    ) },
    { fill: "none" },
    { viewBox: (
      /*viewBox*/
      ctx[2]
    ) },
    { "stroke-width": "2" }
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        role: true,
        tabindex: true,
        width: true,
        height: true,
        class: true,
        "aria-label": true,
        fill: true,
        viewBox: true,
        "stroke-width": true
      });
      var svg_nodes = children(svg);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      svg.innerHTML = /*svgpath*/
      ctx[3];
      if (!mounted) {
        dispose = listen(
          svg,
          "click",
          /*click_handler*/
          ctx[8]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*svgpath*/
      8)
        svg.innerHTML = /*svgpath*/
        ctx2[3];
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { role: "button" },
        { tabindex: "0" },
        dirty & /*size*/
        1 && { width: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*size*/
        1 && { height: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*$$props*/
        16 && svg_class_value !== (svg_class_value = /*$$props*/
        ctx2[4].class) && { class: svg_class_value },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        dirty & /*ariaLabel*/
        2 && { "aria-label": (
          /*ariaLabel*/
          ctx2[1]
        ) },
        { fill: "none" },
        dirty & /*viewBox*/
        4 && { viewBox: (
          /*viewBox*/
          ctx2[2]
        ) },
        { "stroke-width": "2" }
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      mounted = false;
      dispose();
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("color" in $$new_props)
      $$invalidate(6, color = $$new_props.color);
    if ("variation" in $$new_props)
      $$invalidate(7, variation = $$new_props.variation);
    if ("ariaLabel" in $$new_props)
      $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*variation*/
    128) {
      switch (variation) {
        case "outline":
          $$invalidate(3, svgpath = svgoutline);
          $$invalidate(2, viewBox = "0 0 24 24");
          break;
        case "solid":
          $$invalidate(3, svgpath = svgsolid);
          $$invalidate(2, viewBox = "0 0 24 24");
          break;
        default:
          $$invalidate(3, svgpath = svgoutline);
          $$invalidate(2, viewBox = "0 0 24 24");
      }
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    size,
    ariaLabel,
    viewBox,
    svgpath,
    $$props,
    $$restProps,
    color,
    variation,
    click_handler
  ];
}
class Menu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$d, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
function create_default_slot$3(ctx) {
  let menu;
  let current;
  menu = new Menu({
    props: {
      class: twMerge(
        /*menuClass*/
        ctx[1],
        /*$$props*/
        ctx[3].classMenu
      )
    }
  });
  return {
    c() {
      create_component(menu.$$.fragment);
    },
    l(nodes) {
      claim_component(menu.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(menu, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const menu_changes = {};
      if (dirty & /*menuClass, $$props*/
      10)
        menu_changes.class = twMerge(
          /*menuClass*/
          ctx2[1],
          /*$$props*/
          ctx2[3].classMenu
        );
      menu.$set(menu_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(menu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(menu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(menu, detaching);
    }
  };
}
function create_fragment$c(ctx) {
  let toolbarbutton;
  let current;
  const toolbarbutton_spread_levels = [
    { name: "Open main menu" },
    /*$$restProps*/
    ctx[2],
    {
      class: twMerge(
        /*btnClass*/
        ctx[0],
        /*$$props*/
        ctx[3].class
      )
    }
  ];
  let toolbarbutton_props = {
    $$slots: { default: [create_default_slot$3] },
    $$scope: { ctx }
  };
  for (let i = 0; i < toolbarbutton_spread_levels.length; i += 1) {
    toolbarbutton_props = assign(toolbarbutton_props, toolbarbutton_spread_levels[i]);
  }
  toolbarbutton = new ToolbarButton({ props: toolbarbutton_props });
  toolbarbutton.$on(
    "click",
    /*click_handler*/
    ctx[4]
  );
  return {
    c() {
      create_component(toolbarbutton.$$.fragment);
    },
    l(nodes) {
      claim_component(toolbarbutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toolbarbutton, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const toolbarbutton_changes = dirty & /*$$restProps, twMerge, btnClass, $$props*/
      13 ? get_spread_update(toolbarbutton_spread_levels, [
        toolbarbutton_spread_levels[0],
        dirty & /*$$restProps*/
        4 && get_spread_object(
          /*$$restProps*/
          ctx2[2]
        ),
        dirty & /*twMerge, btnClass, $$props*/
        9 && {
          class: twMerge(
            /*btnClass*/
            ctx2[0],
            /*$$props*/
            ctx2[3].class
          )
        }
      ]) : {};
      if (dirty & /*$$scope, menuClass, $$props*/
      42) {
        toolbarbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbarbutton.$set(toolbarbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbarbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbarbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbarbutton, detaching);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  const omit_props_names = ["btnClass", "menuClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("btnClass" in $$new_props)
      $$invalidate(0, btnClass = $$new_props.btnClass);
    if ("menuClass" in $$new_props)
      $$invalidate(1, menuClass = $$new_props.menuClass);
  };
  $$props = exclude_internal_props($$props);
  return [btnClass, menuClass, $$restProps, $$props, click_handler];
}
class NavHamburger extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$c, safe_not_equal, { btnClass: 0, menuClass: 1 });
  }
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let svelte_element_role_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    null
  );
  let svelte_element_levels = [
    {
      role: svelte_element_role_value = /*href*/
      ctx[0] ? void 0 : "link"
    },
    { href: (
      /*href*/
      ctx[0]
    ) },
    /*$$restProps*/
    ctx[2],
    { class: (
      /*liClass*/
      ctx[1]
    ) }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[0] ? "a" : "div"
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[0] ? "a" : "div") || "null").toUpperCase(),
        { role: true, href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_dynamic_element_data(
        /*href*/
        ctx[0] ? "a" : "div"
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "blur",
            /*blur_handler*/
            ctx[9]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[10]
          ),
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[11]
          ),
          listen(
            svelte_element,
            "focus",
            /*focus_handler*/
            ctx[12]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[13]
          ),
          listen(
            svelte_element,
            "keypress",
            /*keypress_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[17]
          ),
          listen(
            svelte_element,
            "mouseover",
            /*mouseover_handler*/
            ctx[18]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*href*/
        ctx2[0] ? "a" : "div"
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        1 && svelte_element_role_value !== (svelte_element_role_value = /*href*/
        ctx2[0] ? void 0 : "link")) && { role: svelte_element_role_value },
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*liClass*/
        2) && { class: (
          /*liClass*/
          ctx2[1]
        ) }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$b(ctx) {
  let li;
  let previous_tag = (
    /*href*/
    ctx[0] ? "a" : "div"
  );
  let current;
  let svelte_element = (
    /*href*/
    (ctx[0] ? "a" : "div") && create_dynamic_element(ctx)
  );
  return {
    c() {
      li = element("li");
      if (svelte_element)
        svelte_element.c();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      if (svelte_element)
        svelte_element.l(li_nodes);
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      if (svelte_element)
        svelte_element.m(li, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*href*/
        ctx2[0] ? "a" : "div"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*href*/
          ctx2[0] ? "a" : "div";
          svelte_element.c();
          svelte_element.m(li, null);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[0] ? "a" : "div"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*href*/
          ctx2[0] ? "a" : "div";
          svelte_element.c();
          svelte_element.m(li, null);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*href*/
        ctx2[0] ? "a" : "div";
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let active;
  let liClass;
  const omit_props_names = ["href", "activeClass", "nonActiveClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    $$invalidate(5, navUrl = value);
  });
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(21, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("activeClass" in $$new_props)
      $$invalidate(3, activeClass = $$new_props.activeClass);
    if ("nonActiveClass" in $$new_props)
      $$invalidate(4, nonActiveClass = $$new_props.nonActiveClass);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*navUrl, href*/
    33) {
      $$invalidate(6, active = navUrl ? href === navUrl : false);
    }
    $$invalidate(1, liClass = twMerge(
      "block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",
      active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
      $$props.class
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    href,
    liClass,
    $$restProps,
    activeClass,
    nonActiveClass,
    navUrl,
    active,
    $$scope,
    slots,
    blur_handler,
    change_handler,
    click_handler,
    focus_handler,
    keydown_handler,
    keypress_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler,
    mouseover_handler
  ];
}
class NavLi extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$b, safe_not_equal, {
      href: 0,
      activeClass: 3,
      nonActiveClass: 4
    });
  }
}
function create_else_block$1(ctx) {
  let div;
  let ul;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  let div_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*_divClass*/
      ctx[2]
    ) },
    { hidden: (
      /*hidden*/
      ctx[0]
    ) }
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      ul = claim_element(div_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        ul,
        "class",
        /*_ulClass*/
        ctx[3]
      );
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, ul);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*_ulClass*/
      8) {
        attr(
          ul,
          "class",
          /*_ulClass*/
          ctx2[3]
        );
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        (!current || dirty & /*_divClass*/
        4) && { class: (
          /*_divClass*/
          ctx2[2]
        ) },
        (!current || dirty & /*hidden*/
        1) && { hidden: (
          /*hidden*/
          ctx2[0]
        ) }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let frame;
  let div_transition;
  let current;
  let mounted;
  let dispose;
  frame = new Frame({
    props: {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: (
        /*_ulClass*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  let div_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*_divClass*/
      ctx[2]
    ) },
    { role: "button" },
    { tabindex: "0" }
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      create_component(frame.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, role: true, tabindex: true });
      var div_nodes = children(div);
      claim_component(frame.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(frame, div, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          div,
          "click",
          /*click_handler*/
          ctx[11]
        );
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const frame_changes = {};
      if (dirty & /*_ulClass*/
      8)
        frame_changes.class = /*_ulClass*/
        ctx[3];
      if (dirty & /*$$scope*/
      4096) {
        frame_changes.$$scope = { dirty, ctx };
      }
      frame.$set(frame_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx[4],
        (!current || dirty & /*_divClass*/
        4) && { class: (
          /*_divClass*/
          ctx[2]
        ) },
        { role: "button" },
        { tabindex: "0" }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      add_render_callback(() => {
        if (!current)
          return;
        if (!div_transition)
          div_transition = create_bidirectional_transition(
            div,
            slide,
            /*slideParams*/
            ctx[1],
            true
          );
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      if (!div_transition)
        div_transition = create_bidirectional_transition(
          div,
          slide,
          /*slideParams*/
          ctx[1],
          false
        );
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(frame);
      if (detaching && div_transition)
        div_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$a(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*hidden*/
    ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let _divClass;
  let _ulClass;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("activeUrl" in $$new_props)
      $$invalidate(5, activeUrl = $$new_props.activeUrl);
    if ("divClass" in $$new_props)
      $$invalidate(6, divClass = $$new_props.divClass);
    if ("ulClass" in $$new_props)
      $$invalidate(7, ulClass = $$new_props.ulClass);
    if ("hidden" in $$new_props)
      $$invalidate(0, hidden = $$new_props.hidden);
    if ("slideParams" in $$new_props)
      $$invalidate(1, slideParams = $$new_props.slideParams);
    if ("activeClass" in $$new_props)
      $$invalidate(8, activeClass = $$new_props.activeClass);
    if ("nonActiveClass" in $$new_props)
      $$invalidate(9, nonActiveClass = $$new_props.nonActiveClass);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*activeUrl*/
    32) {
      {
        activeUrlStore.set(activeUrl);
      }
    }
    $$invalidate(2, _divClass = twMerge(divClass, $$props.class));
    $$invalidate(3, _ulClass = twMerge(
      ulClass,
      // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
      $$props.classUl
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    hidden,
    slideParams,
    _divClass,
    _ulClass,
    $$restProps,
    activeUrl,
    divClass,
    ulClass,
    activeClass,
    nonActiveClass,
    slots,
    click_handler,
    $$scope
  ];
}
class NavUl extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$a, safe_not_equal, {
      activeUrl: 5,
      divClass: 6,
      ulClass: 7,
      hidden: 0,
      slideParams: 1,
      activeClass: 8,
      nonActiveClass: 9
    });
  }
}
const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAA3CAYAAACrQB4rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACAlJREFUeNrsXUt26jgQVT7z5u3AzHr2yApiVhCygsCoh4EVkKwAGPYIsoKEFcRZQRj2LN5B0ztoFSl3+5kS1tc/qs7xyTngWEKqW3WrVJKvBAsLi5Vc8RCwsDB4WFgqlQvbf/zjr7978s9YXm9//v4jDdVB2c5U/klkGzueLpbWg0cqNIBmIa8efvQsr6VU8L1H0EAbc3lF+NES2vHZBgtLZeCRCj1A0MTE13tU7qUjaGIETbA2WFgqAw9SNFDoqcbtQOFmUsHfDEETYRtjjdt32EbCU8jSWPAQFE1XElTwnQYwpwgcU9lgG0zlWJoDHqRPAJqBYxsbpFqpIhkwtwAmUzmW5oEHPcFCkz6ZKPgqSyogMNe5ZIAPYSrHUh94pFKPUKl7gdpL8YoD/ibwQk8WiYqoCGZTIGJCJT92+ypS7GiMjgxWnel9HIsHZC75cdmhDmzF9zLHPlD7PYI17UzaK9OJ68L9vYDAEdiRKPC83Vr+35iIu0xT+cVMJAz0MLCSgsF7VXz3o+p4sCRbKnJggn4v5P0rG2OnIdDGe+GzIc6JF524JDyDDV1KA81FKljK5O7Ed6OKgTNGhdVlFocsrvy/d/QUrZJLxzgGYowbefXF90Lp3iNo7vG5QwbRSRlZAisEcNaW/x6rvGcXwbORVz+f4ULX28fvXAAJMUs/WycCjpkDJ8sxZevV7XkwNlgovn7DucuujcLIxvI5T20a/2uL/4GM2Yz6Avn1BHisUFciKJ8rTpTfADjlc3dttFA1Ubb/AGa6YG0h1HIDzNWESlrIPs3QSxXB/Si/W7Zl3c7G8/xTdgMMmLyGmpQrQS+ms9jJi6GnPcuuJuo2IuZpqMr2wTzL654I3rMF887HPEIDRBnlmhGKn+IAD0NWZXeYsg0Ia78lADQK3I+I6MdG03tMiM8eGDy/gmiJ8dAyl2jo84Kmkzwo4ouXojXH2CiURMRnH5p6kWKfi/1tRebNJub5CT/OlJfi/TO8bCxcr01WqQaqlAJNkuOkio3eKuxbZHAveMsB9m/bJoN6bTlpMSYFKgnuHIpTu0zZIsLrCARQWvh+pKBIPoSa/58GRnUj3DK0raNt2RaFLyzuDKYksIAmwpYMdYWyfRSBVKBCcSBKTiUFxqHa61LMcygilQP1hd7BF2hgssHTfIqwdXBdoWz7Qjp6q6BuoYTyHK8hDWuXEgZAEdZysD5dLQ4GtwCaKWPEjLLlvEFC0KmQSYNVVYa1yeBxjV8OxXhYqxQbKkWEFO1VuBWPph3HT1xC2VTULULghaJukxLDCiB6amMNmxZ4cBD6wj0zEyOI1rgOUEbRniB+cqRoABqoh5t0HDwPGkBRUbdg2UoM/Ccl7CSLk0v1opW0DXLvuPoL1QGu+0HGonxTne0W7Ly3/KUersOULRLHe1QSRcYz0YiVQgCoL06X/WdHlgGIXtucWLg8MRAwKTdoTZpaFnOYrED7QdqQKFB5mGxdrTLqVjC+WWnWRuP3ZDQ/6gx4CGvSpKpmsGywFWJyZod/6FK2WqgbYXwnOd1JS2j+Z2hgVw6ezIrlthzUSY2yuGZ4bieIKijbrqQuMNFMOIT2RE9Y43h/gtL10Av1OgWeQPEQxzXulC0pmy9ingZ1USSYO6R0N4q+Z4fPtEKuLQfhQJsqKptJkaKd+3YE6myGGNP7oiRAp4BY21FdyBqGkHUTxwklqE54bkOl/aXjIEA8tApN1c4dOEhlKM8zQBp26orqins09GeiCAPiNszLpWBpK2VzEe/UDRe5bfpJJaIiBk83LH4T5K6JgETATKEsS3wvchvHK4rEz21Dxv037zHPGclAmJ3zVSVlMzkPDiz5mqBurnFPXAAMgCnq0M7gAYPHXno+B9ujh3izOM10XqBDA5tNjQWh+vAoDDY8Krz7R6D5jA2NYY9pm544HZ6hOFMgFGXbelJ0J+qGHqboZcaG8RTVBx8JIqdNeqrjehk8BsplEPfMPSk5ZS2PPI/Fc0Lt8VkR1nptoKBzzbmwiaX2xHzqsoNpmYGtAjwPquI/HLxGBIeKWjCtVW+sCh95UvL8c6lDDa0OR8fF5b2DcVDJhnhuXHaELnqnd3GcWdt5rB6hxl+n0l9VrPxSdcwToQLCD5ngK0ay87keRbO2V68IEIClggrgDXLxfQ5Yt3g/NRkbD4Hzned4ICF+30g4nCGA8wnrNa+Ex/zCef/I0bsIf5eKMs48ziekwcfEfH5iv7YF4MfYN8o7JcU4s8qEQf7gkAfRwFw+DA6cWEm47Azsurtbd56UwLc32xLPvBOOB3CAV0PjMibGbSz03/W09Hl6DhgvBPbasV+Hk3DrThhkHLdxwMkN+MxRmQ6lJ65VEQrKtnP0Zm+Ocd2pcZs4jttGdYyzY782wm1HQHb6aVo3eFohqAj3FlmfpQ/g5OjFSc7tKa4TvoxZbtxMAA73Bt0BjDsCTPuVxXN9VQx24doxDJbnAXU5wUrcWgSLXzMeHBFWaSf+f8tZ6rnt7O1qY/RCfdc2MBheYL9fQvRbY9xSjL8+0DNUOZ8j7FesMBoJxmilMeuFp86EPFdtGcKdt00gY+kjHkCKFp3bfqgQcuFpYkO8BJhf0MvSffAUaIbpe3moAG1WtTtnYakVPAUqtzAMRH953TxPDctZgqcQnM414iHwMs/8nh4WBs9xPAQAohYYEwQNxzUsDJ4TIAIKt8Z4KEXQcFzDwmKSVOjSecUsLCwsLIZyxUPAwmIn/wowAL/Nhl0XndXSAAAAAElFTkSuQmCC";
function create_fragment$9(ctx) {
  let div2;
  let div1;
  let div0;
  let a;
  let img;
  let img_src_value;
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      a = element("a");
      img = element("img");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = logo))
        attr(img, "src", img_src_value);
      attr(img, "alt", "UASU");
      attr(img, "width", "150");
      attr(img, "height", "55");
      attr(a, "href", "https://uasu.finance");
      attr(div0, "class", "font-bold text-transparent bg-clip-text md:text-4xl bg-blue-700 whitespace-nowrap text-4xl mb-3");
      attr(div1, "class", "py-0");
      attr(div2, "class", "flex items-center gap-3 mr-4 flex-no-wrap");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      append_hydration(div0, a);
      append_hydration(a, img);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
class Brand extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$9, safe_not_equal, {});
  }
}
const ClipboardDocument = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5v-3.379a3 3 0 00-.879-2.121l-3.12-3.121a3 3 0 00-1.402-.791 2.252 2.252 0 011.913-1.576A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z", "clip-rule": "evenodd" }, { "d": "M3.5 6A1.5 1.5 0 002 7.5v9A1.5 1.5 0 003.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L8.44 6.439A1.5 1.5 0 007.378 6H3.5z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z", "clip-rule": "evenodd" }, { "d": "M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" }, { "d": "M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" }] } };
const User = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z", "clip-rule": "evenodd" }] } };
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let path;
  let path_levels = [
    /*a*/
    ctx[6]
  ];
  let path_data = {};
  for (let i = 0; i < path_levels.length; i += 1) {
    path_data = assign(path_data, path_levels[i]);
  }
  return {
    c() {
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      path = claim_svg_element(nodes, "path", {});
      children(path).forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(path, path_data);
    },
    m(target, anchor) {
      insert_hydration(target, path, anchor);
    },
    p(ctx2, dirty) {
      set_svg_attributes(path, path_data = get_spread_update(path_levels, [dirty & /*icon*/
      2 && /*a*/
      ctx2[6]]));
    },
    d(detaching) {
      if (detaching)
        detach(path);
    }
  };
}
function create_fragment$8(ctx) {
  var _a, _b;
  let svg;
  let each_value = (
    /*icon*/
    ((_a = ctx[1]) == null ? void 0 : _a.path) ?? []
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  let svg_levels = [
    /*icon*/
    (_b = ctx[1]) == null ? void 0 : _b.a,
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[0]
    ) },
    { height: (
      /*size*/
      ctx[0]
    ) },
    { "aria-hidden": "true" },
    /*$$restProps*/
    ctx[2]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        "aria-hidden": true
      });
      var svg_nodes = children(svg);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(svg_nodes);
      }
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(svg, null);
        }
      }
    },
    p(ctx2, [dirty]) {
      var _a2, _b2;
      if (dirty & /*icon*/
      2) {
        each_value = /*icon*/
        ((_a2 = ctx2[1]) == null ? void 0 : _a2.path) ?? [];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(svg, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        dirty & /*icon*/
        2 && /*icon*/
        ((_b2 = ctx2[1]) == null ? void 0 : _b2.a),
        { xmlns: "http://www.w3.org/2000/svg" },
        dirty & /*size*/
        1 && { width: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*size*/
        1 && { height: (
          /*size*/
          ctx2[0]
        ) },
        { "aria-hidden": "true" },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let icon;
  const omit_props_names = ["src", "size", "solid", "mini"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
  let { mini = false } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("src" in $$new_props)
      $$invalidate(3, src = $$new_props.src);
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("solid" in $$new_props)
      $$invalidate(4, solid = $$new_props.solid);
    if ("mini" in $$new_props)
      $$invalidate(5, mini = $$new_props.mini);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*src, solid, mini*/
    56) {
      $$invalidate(1, icon = src == null ? void 0 : src[solid ? "solid" : mini ? "mini" : "default"]);
    }
  };
  return [size, icon, $$restProps, src, solid, mini];
}
class Icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$8, safe_not_equal, { src: 3, size: 0, solid: 4, mini: 5 });
  }
}
function create_fragment$7(ctx) {
  let svg;
  let g2;
  let path0;
  let mask0;
  let path1;
  let g1;
  let mask1;
  let path2;
  let g0;
  let path3;
  let path4;
  let defs;
  let linearGradient;
  let stop0;
  let stop1;
  let stop2;
  let stop3;
  let stop4;
  let stop5;
  let stop6;
  let stop7;
  let stop8;
  let stop9;
  let stop10;
  let stop11;
  let stop12;
  let stop13;
  let stop14;
  let stop15;
  let stop16;
  let stop17;
  let stop18;
  let stop19;
  let stop20;
  let stop21;
  let stop22;
  let stop23;
  let stop24;
  let stop25;
  let stop26;
  let stop27;
  let stop28;
  let stop29;
  let stop30;
  let stop31;
  let stop32;
  let stop33;
  let stop34;
  let stop35;
  let stop36;
  let stop37;
  let stop38;
  let stop39;
  let stop40;
  let stop41;
  let stop42;
  let stop43;
  let stop44;
  let stop45;
  let stop46;
  let stop47;
  let stop48;
  let stop49;
  let stop50;
  let stop51;
  let stop52;
  let stop53;
  let stop54;
  let stop55;
  let stop56;
  let stop57;
  let stop58;
  let stop59;
  let stop60;
  let stop61;
  let stop62;
  let stop63;
  let stop64;
  let stop65;
  let stop66;
  let stop67;
  let stop68;
  let stop69;
  let stop70;
  let stop71;
  let stop72;
  let stop73;
  let stop74;
  let stop75;
  let stop76;
  let stop77;
  let stop78;
  let stop79;
  let stop80;
  let stop81;
  let stop82;
  let stop83;
  let stop84;
  let stop85;
  let stop86;
  let stop87;
  let stop88;
  let stop89;
  let stop90;
  let stop91;
  let stop92;
  let stop93;
  let stop94;
  let stop95;
  let stop96;
  let stop97;
  let stop98;
  let stop99;
  let stop100;
  let stop101;
  let stop102;
  let stop103;
  let stop104;
  let stop105;
  let stop106;
  let stop107;
  let stop108;
  let stop109;
  let stop110;
  let stop111;
  let stop112;
  let stop113;
  let stop114;
  let stop115;
  let stop116;
  let stop117;
  let stop118;
  let clipPath;
  let path5;
  return {
    c() {
      svg = svg_element("svg");
      g2 = svg_element("g");
      path0 = svg_element("path");
      mask0 = svg_element("mask");
      path1 = svg_element("path");
      g1 = svg_element("g");
      mask1 = svg_element("mask");
      path2 = svg_element("path");
      g0 = svg_element("g");
      path3 = svg_element("path");
      path4 = svg_element("path");
      defs = svg_element("defs");
      linearGradient = svg_element("linearGradient");
      stop0 = svg_element("stop");
      stop1 = svg_element("stop");
      stop2 = svg_element("stop");
      stop3 = svg_element("stop");
      stop4 = svg_element("stop");
      stop5 = svg_element("stop");
      stop6 = svg_element("stop");
      stop7 = svg_element("stop");
      stop8 = svg_element("stop");
      stop9 = svg_element("stop");
      stop10 = svg_element("stop");
      stop11 = svg_element("stop");
      stop12 = svg_element("stop");
      stop13 = svg_element("stop");
      stop14 = svg_element("stop");
      stop15 = svg_element("stop");
      stop16 = svg_element("stop");
      stop17 = svg_element("stop");
      stop18 = svg_element("stop");
      stop19 = svg_element("stop");
      stop20 = svg_element("stop");
      stop21 = svg_element("stop");
      stop22 = svg_element("stop");
      stop23 = svg_element("stop");
      stop24 = svg_element("stop");
      stop25 = svg_element("stop");
      stop26 = svg_element("stop");
      stop27 = svg_element("stop");
      stop28 = svg_element("stop");
      stop29 = svg_element("stop");
      stop30 = svg_element("stop");
      stop31 = svg_element("stop");
      stop32 = svg_element("stop");
      stop33 = svg_element("stop");
      stop34 = svg_element("stop");
      stop35 = svg_element("stop");
      stop36 = svg_element("stop");
      stop37 = svg_element("stop");
      stop38 = svg_element("stop");
      stop39 = svg_element("stop");
      stop40 = svg_element("stop");
      stop41 = svg_element("stop");
      stop42 = svg_element("stop");
      stop43 = svg_element("stop");
      stop44 = svg_element("stop");
      stop45 = svg_element("stop");
      stop46 = svg_element("stop");
      stop47 = svg_element("stop");
      stop48 = svg_element("stop");
      stop49 = svg_element("stop");
      stop50 = svg_element("stop");
      stop51 = svg_element("stop");
      stop52 = svg_element("stop");
      stop53 = svg_element("stop");
      stop54 = svg_element("stop");
      stop55 = svg_element("stop");
      stop56 = svg_element("stop");
      stop57 = svg_element("stop");
      stop58 = svg_element("stop");
      stop59 = svg_element("stop");
      stop60 = svg_element("stop");
      stop61 = svg_element("stop");
      stop62 = svg_element("stop");
      stop63 = svg_element("stop");
      stop64 = svg_element("stop");
      stop65 = svg_element("stop");
      stop66 = svg_element("stop");
      stop67 = svg_element("stop");
      stop68 = svg_element("stop");
      stop69 = svg_element("stop");
      stop70 = svg_element("stop");
      stop71 = svg_element("stop");
      stop72 = svg_element("stop");
      stop73 = svg_element("stop");
      stop74 = svg_element("stop");
      stop75 = svg_element("stop");
      stop76 = svg_element("stop");
      stop77 = svg_element("stop");
      stop78 = svg_element("stop");
      stop79 = svg_element("stop");
      stop80 = svg_element("stop");
      stop81 = svg_element("stop");
      stop82 = svg_element("stop");
      stop83 = svg_element("stop");
      stop84 = svg_element("stop");
      stop85 = svg_element("stop");
      stop86 = svg_element("stop");
      stop87 = svg_element("stop");
      stop88 = svg_element("stop");
      stop89 = svg_element("stop");
      stop90 = svg_element("stop");
      stop91 = svg_element("stop");
      stop92 = svg_element("stop");
      stop93 = svg_element("stop");
      stop94 = svg_element("stop");
      stop95 = svg_element("stop");
      stop96 = svg_element("stop");
      stop97 = svg_element("stop");
      stop98 = svg_element("stop");
      stop99 = svg_element("stop");
      stop100 = svg_element("stop");
      stop101 = svg_element("stop");
      stop102 = svg_element("stop");
      stop103 = svg_element("stop");
      stop104 = svg_element("stop");
      stop105 = svg_element("stop");
      stop106 = svg_element("stop");
      stop107 = svg_element("stop");
      stop108 = svg_element("stop");
      stop109 = svg_element("stop");
      stop110 = svg_element("stop");
      stop111 = svg_element("stop");
      stop112 = svg_element("stop");
      stop113 = svg_element("stop");
      stop114 = svg_element("stop");
      stop115 = svg_element("stop");
      stop116 = svg_element("stop");
      stop117 = svg_element("stop");
      stop118 = svg_element("stop");
      clipPath = svg_element("clipPath");
      path5 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        fill: true,
        class: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      g2 = claim_svg_element(svg_nodes, "g", { "clip-path": true });
      var g2_nodes = children(g2);
      path0 = claim_svg_element(g2_nodes, "path", { fill: true, d: true });
      children(path0).forEach(detach);
      mask0 = claim_svg_element(g2_nodes, "mask", {
        id: true,
        width: true,
        height: true,
        x: true,
        y: true,
        maskUnits: true,
        style: true
      });
      var mask0_nodes = children(mask0);
      path1 = claim_svg_element(mask0_nodes, "path", { fill: true, d: true });
      children(path1).forEach(detach);
      mask0_nodes.forEach(detach);
      g1 = claim_svg_element(g2_nodes, "g", { mask: true });
      var g1_nodes = children(g1);
      mask1 = claim_svg_element(g1_nodes, "mask", {
        id: true,
        width: true,
        height: true,
        x: true,
        y: true,
        maskUnits: true,
        style: true
      });
      var mask1_nodes = children(mask1);
      path2 = claim_svg_element(mask1_nodes, "path", { fill: true, d: true });
      children(path2).forEach(detach);
      mask1_nodes.forEach(detach);
      g0 = claim_svg_element(g1_nodes, "g", { mask: true });
      var g0_nodes = children(g0);
      path3 = claim_svg_element(g0_nodes, "path", { fill: true, d: true });
      children(path3).forEach(detach);
      g0_nodes.forEach(detach);
      g1_nodes.forEach(detach);
      path4 = claim_svg_element(g2_nodes, "path", { fill: true, d: true });
      children(path4).forEach(detach);
      g2_nodes.forEach(detach);
      defs = claim_svg_element(svg_nodes, "defs", {});
      var defs_nodes = children(defs);
      linearGradient = claim_svg_element(defs_nodes, "linearGradient", {
        id: true,
        x1: true,
        x2: true,
        y1: true,
        y2: true,
        gradientUnits: true
      });
      var linearGradient_nodes = children(linearGradient);
      stop0 = claim_svg_element(linearGradient_nodes, "stop", { "stop-color": true });
      children(stop0).forEach(detach);
      stop1 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop1).forEach(detach);
      stop2 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop2).forEach(detach);
      stop3 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop3).forEach(detach);
      stop4 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop4).forEach(detach);
      stop5 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop5).forEach(detach);
      stop6 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop6).forEach(detach);
      stop7 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop7).forEach(detach);
      stop8 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop8).forEach(detach);
      stop9 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop9).forEach(detach);
      stop10 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop10).forEach(detach);
      stop11 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop11).forEach(detach);
      stop12 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop12).forEach(detach);
      stop13 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop13).forEach(detach);
      stop14 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop14).forEach(detach);
      stop15 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop15).forEach(detach);
      stop16 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop16).forEach(detach);
      stop17 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop17).forEach(detach);
      stop18 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop18).forEach(detach);
      stop19 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop19).forEach(detach);
      stop20 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop20).forEach(detach);
      stop21 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop21).forEach(detach);
      stop22 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop22).forEach(detach);
      stop23 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop23).forEach(detach);
      stop24 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop24).forEach(detach);
      stop25 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop25).forEach(detach);
      stop26 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop26).forEach(detach);
      stop27 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop27).forEach(detach);
      stop28 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop28).forEach(detach);
      stop29 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop29).forEach(detach);
      stop30 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop30).forEach(detach);
      stop31 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop31).forEach(detach);
      stop32 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop32).forEach(detach);
      stop33 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop33).forEach(detach);
      stop34 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop34).forEach(detach);
      stop35 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop35).forEach(detach);
      stop36 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop36).forEach(detach);
      stop37 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop37).forEach(detach);
      stop38 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop38).forEach(detach);
      stop39 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop39).forEach(detach);
      stop40 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop40).forEach(detach);
      stop41 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop41).forEach(detach);
      stop42 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop42).forEach(detach);
      stop43 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop43).forEach(detach);
      stop44 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop44).forEach(detach);
      stop45 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop45).forEach(detach);
      stop46 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop46).forEach(detach);
      stop47 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop47).forEach(detach);
      stop48 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop48).forEach(detach);
      stop49 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop49).forEach(detach);
      stop50 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop50).forEach(detach);
      stop51 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop51).forEach(detach);
      stop52 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop52).forEach(detach);
      stop53 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop53).forEach(detach);
      stop54 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop54).forEach(detach);
      stop55 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop55).forEach(detach);
      stop56 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop56).forEach(detach);
      stop57 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop57).forEach(detach);
      stop58 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop58).forEach(detach);
      stop59 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop59).forEach(detach);
      stop60 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop60).forEach(detach);
      stop61 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop61).forEach(detach);
      stop62 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop62).forEach(detach);
      stop63 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop63).forEach(detach);
      stop64 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop64).forEach(detach);
      stop65 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop65).forEach(detach);
      stop66 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop66).forEach(detach);
      stop67 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop67).forEach(detach);
      stop68 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop68).forEach(detach);
      stop69 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop69).forEach(detach);
      stop70 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop70).forEach(detach);
      stop71 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop71).forEach(detach);
      stop72 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop72).forEach(detach);
      stop73 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop73).forEach(detach);
      stop74 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop74).forEach(detach);
      stop75 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop75).forEach(detach);
      stop76 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop76).forEach(detach);
      stop77 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop77).forEach(detach);
      stop78 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop78).forEach(detach);
      stop79 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop79).forEach(detach);
      stop80 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop80).forEach(detach);
      stop81 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop81).forEach(detach);
      stop82 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop82).forEach(detach);
      stop83 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop83).forEach(detach);
      stop84 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop84).forEach(detach);
      stop85 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop85).forEach(detach);
      stop86 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop86).forEach(detach);
      stop87 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop87).forEach(detach);
      stop88 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop88).forEach(detach);
      stop89 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop89).forEach(detach);
      stop90 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop90).forEach(detach);
      stop91 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop91).forEach(detach);
      stop92 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop92).forEach(detach);
      stop93 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop93).forEach(detach);
      stop94 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop94).forEach(detach);
      stop95 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop95).forEach(detach);
      stop96 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop96).forEach(detach);
      stop97 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop97).forEach(detach);
      stop98 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop98).forEach(detach);
      stop99 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop99).forEach(detach);
      stop100 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop100).forEach(detach);
      stop101 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop101).forEach(detach);
      stop102 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop102).forEach(detach);
      stop103 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop103).forEach(detach);
      stop104 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop104).forEach(detach);
      stop105 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop105).forEach(detach);
      stop106 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop106).forEach(detach);
      stop107 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop107).forEach(detach);
      stop108 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop108).forEach(detach);
      stop109 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop109).forEach(detach);
      stop110 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop110).forEach(detach);
      stop111 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop111).forEach(detach);
      stop112 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop112).forEach(detach);
      stop113 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop113).forEach(detach);
      stop114 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop114).forEach(detach);
      stop115 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop115).forEach(detach);
      stop116 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop116).forEach(detach);
      stop117 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop117).forEach(detach);
      stop118 = claim_svg_element(linearGradient_nodes, "stop", { offset: true, "stop-color": true });
      children(stop118).forEach(detach);
      linearGradient_nodes.forEach(detach);
      clipPath = claim_svg_element(defs_nodes, "clipPath", { id: true });
      var clipPath_nodes = children(clipPath);
      path5 = claim_svg_element(clipPath_nodes, "path", { fill: true, d: true });
      children(path5).forEach(detach);
      clipPath_nodes.forEach(detach);
      defs_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "fill", "#000");
      attr(path0, "d", "M17.522 19.863H2.489a2.296 2.296 0 0 1-2.29-2.29V2.531A2.296 2.296 0 0 1 2.49.242h15.04a2.296 2.296 0 0 1 2.29 2.289v15.042a2.31 2.31 0 0 1-2.299 2.29Z");
      attr(path1, "fill", "#fff");
      attr(path1, "d", "M.16.213h17.387V17.6H.16V.213Z");
      attr(mask0, "id", "b");
      attr(mask0, "width", "18");
      attr(mask0, "height", "18");
      attr(mask0, "x", "0");
      attr(mask0, "y", "0");
      attr(mask0, "maskUnits", "userSpaceOnUse");
      set_style(mask0, "mask-type", "luminance");
      attr(path2, "fill", "#fff");
      attr(path2, "d", "M8.421 6.303h3.04l6.061-6.06H2.489A2.296 2.296 0 0 0 .199 2.53v15.043l8.222-8.231v-3.04Z");
      attr(mask1, "id", "c");
      attr(mask1, "width", "18");
      attr(mask1, "height", "18");
      attr(mask1, "x", "0");
      attr(mask1, "y", "0");
      attr(mask1, "maskUnits", "userSpaceOnUse");
      set_style(mask1, "mask-type", "luminance");
      attr(path3, "fill", "url(#d)");
      attr(path3, "d", "M.2.242v17.332h17.322V.242H.2Z");
      attr(g0, "mask", "url(#c)");
      attr(g1, "mask", "url(#b)");
      attr(path4, "fill", "#fff");
      attr(path4, "d", "m3.166 6.349.266-.531c.036-.101.137-.12.229-.073 0 0 .448.238.897.238.201 0 .339-.083.339-.248 0-.174-.138-.283-.66-.494-.76-.293-1.117-.705-1.117-1.3 0-.604.45-1.163 1.456-1.163.586 0 1.007.165 1.218.302.091.055.137.165.091.266l-.247.503c-.046.092-.156.101-.238.074 0 0-.449-.211-.815-.211-.238 0-.338.1-.338.229 0 .174.174.238.54.384.76.293 1.336.623 1.336 1.392 0 .65-.576 1.209-1.565 1.209-.65 0-1.108-.211-1.31-.367-.082-.054-.128-.137-.082-.21ZM6.91 5.122c0-.146.12-.284.285-.284h3.415c1.776 0 3.14 1.19 3.14 2.756 0 1.145-.943 2.042-1.639 2.371.788.257 1.941 1.062 1.941 2.427 0 1.666-1.428 2.875-3.25 2.875H7.195a.285.285 0 0 1-.284-.284v-9.86Zm3.517 4.093c.76 0 1.281-.596 1.281-1.337 0-.742-.521-1.264-1.281-1.264H8.834v2.61h1.593v-.01Zm.21 4.294c.742 0 1.337-.577 1.337-1.355 0-.742-.742-1.3-1.52-1.3h-1.62v2.655h1.803Z");
      attr(g2, "clip-path", "url(#a)");
      attr(stop0, "stop-color", "#ED693C");
      attr(stop1, "offset", ".008");
      attr(stop1, "stop-color", "#ED693C");
      attr(stop2, "offset", ".016");
      attr(stop2, "stop-color", "#ED6A3B");
      attr(stop3, "offset", ".023");
      attr(stop3, "stop-color", "#ED6B3B");
      attr(stop4, "offset", ".031");
      attr(stop4, "stop-color", "#ED6C3A");
      attr(stop5, "offset", ".039");
      attr(stop5, "stop-color", "#EE6D3A");
      attr(stop6, "offset", ".047");
      attr(stop6, "stop-color", "#EE6D3A");
      attr(stop7, "offset", ".055");
      attr(stop7, "stop-color", "#EE6E39");
      attr(stop8, "offset", ".063");
      attr(stop8, "stop-color", "#EE6F39");
      attr(stop9, "offset", ".07");
      attr(stop9, "stop-color", "#EE7038");
      attr(stop10, "offset", ".078");
      attr(stop10, "stop-color", "#EE7138");
      attr(stop11, "offset", ".086");
      attr(stop11, "stop-color", "#EE7237");
      attr(stop12, "offset", ".094");
      attr(stop12, "stop-color", "#EE7237");
      attr(stop13, "offset", ".102");
      attr(stop13, "stop-color", "#EF7337");
      attr(stop14, "offset", ".109");
      attr(stop14, "stop-color", "#EF7436");
      attr(stop15, "offset", ".117");
      attr(stop15, "stop-color", "#EF7536");
      attr(stop16, "offset", ".125");
      attr(stop16, "stop-color", "#EF7635");
      attr(stop17, "offset", ".133");
      attr(stop17, "stop-color", "#EF7635");
      attr(stop18, "offset", ".141");
      attr(stop18, "stop-color", "#EF7735");
      attr(stop19, "offset", ".148");
      attr(stop19, "stop-color", "#EF7834");
      attr(stop20, "offset", ".156");
      attr(stop20, "stop-color", "#F07934");
      attr(stop21, "offset", ".164");
      attr(stop21, "stop-color", "#F07A33");
      attr(stop22, "offset", ".172");
      attr(stop22, "stop-color", "#F07A33");
      attr(stop23, "offset", ".18");
      attr(stop23, "stop-color", "#F07B32");
      attr(stop24, "offset", ".188");
      attr(stop24, "stop-color", "#F07C32");
      attr(stop25, "offset", ".195");
      attr(stop25, "stop-color", "#F07D32");
      attr(stop26, "offset", ".203");
      attr(stop26, "stop-color", "#F07E31");
      attr(stop27, "offset", ".211");
      attr(stop27, "stop-color", "#F17E31");
      attr(stop28, "offset", ".219");
      attr(stop28, "stop-color", "#F17F30");
      attr(stop29, "offset", ".227");
      attr(stop29, "stop-color", "#F18030");
      attr(stop30, "offset", ".234");
      attr(stop30, "stop-color", "#F1812F");
      attr(stop31, "offset", ".242");
      attr(stop31, "stop-color", "#F1822F");
      attr(stop32, "offset", ".25");
      attr(stop32, "stop-color", "#F1822F");
      attr(stop33, "offset", ".258");
      attr(stop33, "stop-color", "#F1832E");
      attr(stop34, "offset", ".266");
      attr(stop34, "stop-color", "#F2842E");
      attr(stop35, "offset", ".273");
      attr(stop35, "stop-color", "#F2852D");
      attr(stop36, "offset", ".281");
      attr(stop36, "stop-color", "#F2862D");
      attr(stop37, "offset", ".289");
      attr(stop37, "stop-color", "#F2862C");
      attr(stop38, "offset", ".297");
      attr(stop38, "stop-color", "#F2872C");
      attr(stop39, "offset", ".305");
      attr(stop39, "stop-color", "#F2882C");
      attr(stop40, "offset", ".313");
      attr(stop40, "stop-color", "#F2892B");
      attr(stop41, "offset", ".32");
      attr(stop41, "stop-color", "#F38A2B");
      attr(stop42, "offset", ".328");
      attr(stop42, "stop-color", "#F38A2A");
      attr(stop43, "offset", ".336");
      attr(stop43, "stop-color", "#F38B2A");
      attr(stop44, "offset", ".344");
      attr(stop44, "stop-color", "#F38C2A");
      attr(stop45, "offset", ".352");
      attr(stop45, "stop-color", "#F38D29");
      attr(stop46, "offset", ".359");
      attr(stop46, "stop-color", "#F38E29");
      attr(stop47, "offset", ".367");
      attr(stop47, "stop-color", "#F38E28");
      attr(stop48, "offset", ".375");
      attr(stop48, "stop-color", "#F38F28");
      attr(stop49, "offset", ".383");
      attr(stop49, "stop-color", "#F49027");
      attr(stop50, "offset", ".391");
      attr(stop50, "stop-color", "#F49127");
      attr(stop51, "offset", ".398");
      attr(stop51, "stop-color", "#F49227");
      attr(stop52, "offset", ".406");
      attr(stop52, "stop-color", "#F49226");
      attr(stop53, "offset", ".414");
      attr(stop53, "stop-color", "#F49326");
      attr(stop54, "offset", ".422");
      attr(stop54, "stop-color", "#F49425");
      attr(stop55, "offset", ".43");
      attr(stop55, "stop-color", "#F49525");
      attr(stop56, "offset", ".438");
      attr(stop56, "stop-color", "#F59624");
      attr(stop57, "offset", ".445");
      attr(stop57, "stop-color", "#F59624");
      attr(stop58, "offset", ".453");
      attr(stop58, "stop-color", "#F59724");
      attr(stop59, "offset", ".461");
      attr(stop59, "stop-color", "#F59823");
      attr(stop60, "offset", ".469");
      attr(stop60, "stop-color", "#F59923");
      attr(stop61, "offset", ".477");
      attr(stop61, "stop-color", "#F59A22");
      attr(stop62, "offset", ".484");
      attr(stop62, "stop-color", "#F59A22");
      attr(stop63, "offset", ".492");
      attr(stop63, "stop-color", "#F69B21");
      attr(stop64, "offset", ".5");
      attr(stop64, "stop-color", "#F69C21");
      attr(stop65, "offset", ".508");
      attr(stop65, "stop-color", "#F69D21");
      attr(stop66, "offset", ".516");
      attr(stop66, "stop-color", "#F69E20");
      attr(stop67, "offset", ".523");
      attr(stop67, "stop-color", "#F69E20");
      attr(stop68, "offset", ".531");
      attr(stop68, "stop-color", "#F69F1F");
      attr(stop69, "offset", ".539");
      attr(stop69, "stop-color", "#F6A01F");
      attr(stop70, "offset", ".547");
      attr(stop70, "stop-color", "#F7A11F");
      attr(stop71, "offset", ".555");
      attr(stop71, "stop-color", "#F7A21E");
      attr(stop72, "offset", ".563");
      attr(stop72, "stop-color", "#F7A21E");
      attr(stop73, "offset", ".57");
      attr(stop73, "stop-color", "#F7A31D");
      attr(stop74, "offset", ".578");
      attr(stop74, "stop-color", "#F7A41D");
      attr(stop75, "offset", ".586");
      attr(stop75, "stop-color", "#F7A51C");
      attr(stop76, "offset", ".594");
      attr(stop76, "stop-color", "#F7A61C");
      attr(stop77, "offset", ".602");
      attr(stop77, "stop-color", "#F8A61C");
      attr(stop78, "offset", ".609");
      attr(stop78, "stop-color", "#F8A71B");
      attr(stop79, "offset", ".617");
      attr(stop79, "stop-color", "#F8A81B");
      attr(stop80, "offset", ".625");
      attr(stop80, "stop-color", "#F8A91A");
      attr(stop81, "offset", ".633");
      attr(stop81, "stop-color", "#F8AA1A");
      attr(stop82, "offset", ".641");
      attr(stop82, "stop-color", "#F8AA19");
      attr(stop83, "offset", ".648");
      attr(stop83, "stop-color", "#F8AB19");
      attr(stop84, "offset", ".656");
      attr(stop84, "stop-color", "#F8AC19");
      attr(stop85, "offset", ".664");
      attr(stop85, "stop-color", "#F9AD18");
      attr(stop86, "offset", ".672");
      attr(stop86, "stop-color", "#F9AE18");
      attr(stop87, "offset", ".68");
      attr(stop87, "stop-color", "#F9AE17");
      attr(stop88, "offset", ".688");
      attr(stop88, "stop-color", "#F9AF17");
      attr(stop89, "offset", ".695");
      attr(stop89, "stop-color", "#F9B016");
      attr(stop90, "offset", ".703");
      attr(stop90, "stop-color", "#F9B116");
      attr(stop91, "offset", ".711");
      attr(stop91, "stop-color", "#F9B216");
      attr(stop92, "offset", ".719");
      attr(stop92, "stop-color", "#FAB215");
      attr(stop93, "offset", ".727");
      attr(stop93, "stop-color", "#FAB315");
      attr(stop94, "offset", ".734");
      attr(stop94, "stop-color", "#FAB414");
      attr(stop95, "offset", ".742");
      attr(stop95, "stop-color", "#FAB514");
      attr(stop96, "offset", ".75");
      attr(stop96, "stop-color", "#FAB614");
      attr(stop97, "offset", ".758");
      attr(stop97, "stop-color", "#FAB613");
      attr(stop98, "offset", ".766");
      attr(stop98, "stop-color", "#FAB713");
      attr(stop99, "offset", ".773");
      attr(stop99, "stop-color", "#FBB812");
      attr(stop100, "offset", ".781");
      attr(stop100, "stop-color", "#FBB912");
      attr(stop101, "offset", ".789");
      attr(stop101, "stop-color", "#FBBA11");
      attr(stop102, "offset", ".797");
      attr(stop102, "stop-color", "#FBBA11");
      attr(stop103, "offset", ".805");
      attr(stop103, "stop-color", "#FBBB11");
      attr(stop104, "offset", ".813");
      attr(stop104, "stop-color", "#FBBC10");
      attr(stop105, "offset", ".82");
      attr(stop105, "stop-color", "#FBBD10");
      attr(stop106, "offset", ".828");
      attr(stop106, "stop-color", "#FCBE0F");
      attr(stop107, "offset", ".836");
      attr(stop107, "stop-color", "#FCBE0F");
      attr(stop108, "offset", ".844");
      attr(stop108, "stop-color", "#FCBF0E");
      attr(stop109, "offset", ".852");
      attr(stop109, "stop-color", "#FCC00E");
      attr(stop110, "offset", ".859");
      attr(stop110, "stop-color", "#FCC10E");
      attr(stop111, "offset", ".867");
      attr(stop111, "stop-color", "#FCC20D");
      attr(stop112, "offset", ".875");
      attr(stop112, "stop-color", "#FCC20D");
      attr(stop113, "offset", ".883");
      attr(stop113, "stop-color", "#FDC30C");
      attr(stop114, "offset", ".891");
      attr(stop114, "stop-color", "#FDC40C");
      attr(stop115, "offset", ".898");
      attr(stop115, "stop-color", "#FDC50B");
      attr(stop116, "offset", ".906");
      attr(stop116, "stop-color", "#FDC60B");
      attr(stop117, "offset", ".938");
      attr(stop117, "stop-color", "#FDC60B");
      attr(stop118, "offset", "1");
      attr(stop118, "stop-color", "#FDC60B");
      attr(linearGradient, "id", "d");
      attr(linearGradient, "x1", ".2");
      attr(linearGradient, "x2", "17.522");
      attr(linearGradient, "y1", "8.905");
      attr(linearGradient, "y2", "8.905");
      attr(linearGradient, "gradientUnits", "userSpaceOnUse");
      attr(path5, "fill", "#fff");
      attr(path5, "d", "M0 0h20v20H0z");
      attr(clipPath, "id", "a");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "none");
      attr(
        svg,
        "class",
        /*clazz*/
        ctx[0]
      );
      attr(svg, "viewBox", "0 0 20 20");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, g2);
      append_hydration(g2, path0);
      append_hydration(g2, mask0);
      append_hydration(mask0, path1);
      append_hydration(g2, g1);
      append_hydration(g1, mask1);
      append_hydration(mask1, path2);
      append_hydration(g1, g0);
      append_hydration(g0, path3);
      append_hydration(g2, path4);
      append_hydration(svg, defs);
      append_hydration(defs, linearGradient);
      append_hydration(linearGradient, stop0);
      append_hydration(linearGradient, stop1);
      append_hydration(linearGradient, stop2);
      append_hydration(linearGradient, stop3);
      append_hydration(linearGradient, stop4);
      append_hydration(linearGradient, stop5);
      append_hydration(linearGradient, stop6);
      append_hydration(linearGradient, stop7);
      append_hydration(linearGradient, stop8);
      append_hydration(linearGradient, stop9);
      append_hydration(linearGradient, stop10);
      append_hydration(linearGradient, stop11);
      append_hydration(linearGradient, stop12);
      append_hydration(linearGradient, stop13);
      append_hydration(linearGradient, stop14);
      append_hydration(linearGradient, stop15);
      append_hydration(linearGradient, stop16);
      append_hydration(linearGradient, stop17);
      append_hydration(linearGradient, stop18);
      append_hydration(linearGradient, stop19);
      append_hydration(linearGradient, stop20);
      append_hydration(linearGradient, stop21);
      append_hydration(linearGradient, stop22);
      append_hydration(linearGradient, stop23);
      append_hydration(linearGradient, stop24);
      append_hydration(linearGradient, stop25);
      append_hydration(linearGradient, stop26);
      append_hydration(linearGradient, stop27);
      append_hydration(linearGradient, stop28);
      append_hydration(linearGradient, stop29);
      append_hydration(linearGradient, stop30);
      append_hydration(linearGradient, stop31);
      append_hydration(linearGradient, stop32);
      append_hydration(linearGradient, stop33);
      append_hydration(linearGradient, stop34);
      append_hydration(linearGradient, stop35);
      append_hydration(linearGradient, stop36);
      append_hydration(linearGradient, stop37);
      append_hydration(linearGradient, stop38);
      append_hydration(linearGradient, stop39);
      append_hydration(linearGradient, stop40);
      append_hydration(linearGradient, stop41);
      append_hydration(linearGradient, stop42);
      append_hydration(linearGradient, stop43);
      append_hydration(linearGradient, stop44);
      append_hydration(linearGradient, stop45);
      append_hydration(linearGradient, stop46);
      append_hydration(linearGradient, stop47);
      append_hydration(linearGradient, stop48);
      append_hydration(linearGradient, stop49);
      append_hydration(linearGradient, stop50);
      append_hydration(linearGradient, stop51);
      append_hydration(linearGradient, stop52);
      append_hydration(linearGradient, stop53);
      append_hydration(linearGradient, stop54);
      append_hydration(linearGradient, stop55);
      append_hydration(linearGradient, stop56);
      append_hydration(linearGradient, stop57);
      append_hydration(linearGradient, stop58);
      append_hydration(linearGradient, stop59);
      append_hydration(linearGradient, stop60);
      append_hydration(linearGradient, stop61);
      append_hydration(linearGradient, stop62);
      append_hydration(linearGradient, stop63);
      append_hydration(linearGradient, stop64);
      append_hydration(linearGradient, stop65);
      append_hydration(linearGradient, stop66);
      append_hydration(linearGradient, stop67);
      append_hydration(linearGradient, stop68);
      append_hydration(linearGradient, stop69);
      append_hydration(linearGradient, stop70);
      append_hydration(linearGradient, stop71);
      append_hydration(linearGradient, stop72);
      append_hydration(linearGradient, stop73);
      append_hydration(linearGradient, stop74);
      append_hydration(linearGradient, stop75);
      append_hydration(linearGradient, stop76);
      append_hydration(linearGradient, stop77);
      append_hydration(linearGradient, stop78);
      append_hydration(linearGradient, stop79);
      append_hydration(linearGradient, stop80);
      append_hydration(linearGradient, stop81);
      append_hydration(linearGradient, stop82);
      append_hydration(linearGradient, stop83);
      append_hydration(linearGradient, stop84);
      append_hydration(linearGradient, stop85);
      append_hydration(linearGradient, stop86);
      append_hydration(linearGradient, stop87);
      append_hydration(linearGradient, stop88);
      append_hydration(linearGradient, stop89);
      append_hydration(linearGradient, stop90);
      append_hydration(linearGradient, stop91);
      append_hydration(linearGradient, stop92);
      append_hydration(linearGradient, stop93);
      append_hydration(linearGradient, stop94);
      append_hydration(linearGradient, stop95);
      append_hydration(linearGradient, stop96);
      append_hydration(linearGradient, stop97);
      append_hydration(linearGradient, stop98);
      append_hydration(linearGradient, stop99);
      append_hydration(linearGradient, stop100);
      append_hydration(linearGradient, stop101);
      append_hydration(linearGradient, stop102);
      append_hydration(linearGradient, stop103);
      append_hydration(linearGradient, stop104);
      append_hydration(linearGradient, stop105);
      append_hydration(linearGradient, stop106);
      append_hydration(linearGradient, stop107);
      append_hydration(linearGradient, stop108);
      append_hydration(linearGradient, stop109);
      append_hydration(linearGradient, stop110);
      append_hydration(linearGradient, stop111);
      append_hydration(linearGradient, stop112);
      append_hydration(linearGradient, stop113);
      append_hydration(linearGradient, stop114);
      append_hydration(linearGradient, stop115);
      append_hydration(linearGradient, stop116);
      append_hydration(linearGradient, stop117);
      append_hydration(linearGradient, stop118);
      append_hydration(defs, clipPath);
      append_hydration(clipPath, path5);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*clazz*/
      1) {
        attr(
          svg,
          "class",
          /*clazz*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { class: clazz = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("class" in $$props2)
      $$invalidate(0, clazz = $$props2.class);
  };
  return [clazz];
}
class LogoSBTC extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$7, safe_not_equal, { class: 0 });
  }
}
function create_fragment$6(ctx) {
  let svg;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", { d: true, fill: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", { d: true, fill: true });
      children(path1).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M19.7001 12.4198C19.3824 13.6937 18.8168 14.8925 18.0358 15.9477C17.2547 17.003 16.2734 17.8941 15.148 18.5702C14.0225 19.2462 12.7749 19.6939 11.4764 19.8877C10.1779 20.0815 8.85393 20.0177 7.5801 19.6998C5.66184 19.2211 3.92859 18.1843 2.59955 16.7206C1.2705 15.2568 0.405334 13.4318 0.113452 11.4764C-0.178429 9.52096 0.116081 7.52289 0.959742 5.73483C1.8034 3.94677 3.15832 2.44903 4.85318 1.431C6.54803 0.412971 8.5067 -0.0796316 10.4815 0.0154847C12.4563 0.110601 14.3586 0.789164 15.9477 1.96537C17.5369 3.14157 18.7416 4.7626 19.4095 6.62346C20.0774 8.48432 20.1786 10.5015 19.7001 12.4198Z");
      attr(path0, "fill", "#F7931A");
      attr(path1, "d", "M14.41 8.57486C14.61 7.24486 13.595 6.52986 12.21 6.05153L12.66 4.24986L11.5617 3.97653L11.1234 5.73153C10.835 5.65986 10.54 5.59153 10.245 5.52486L10.685 3.7582L9.58837 3.48486L9.14003 5.28486L6.9267 4.7382L6.63503 5.90986C6.63503 5.90986 7.44837 6.09653 7.4317 6.1082C7.8767 6.21986 7.9567 6.5132 7.94337 6.74653L6.7117 11.6832C6.6567 11.8165 6.52003 12.0199 6.20837 11.9432C6.22003 11.9599 5.4117 11.7432 5.4117 11.7432L4.8667 12.9999L7.0767 13.5582L6.6217 15.3815L7.71837 15.6549L8.16837 13.8515C8.46837 13.9332 8.75837 14.0082 9.04337 14.0782L8.59337 15.8732L9.6917 16.1465L10.1467 14.3265C12.0167 14.6832 13.425 14.5399 14.0167 12.8499C14.4934 11.4882 13.9934 10.7015 13.0084 10.1899C13.725 10.0232 14.265 9.55153 14.4084 8.5782H14.41V8.57486ZM11.9017 12.0915C11.5617 13.4532 9.26837 12.7165 8.52503 12.5315L9.1267 10.1165C9.87003 10.3015 12.255 10.6699 11.9017 12.0915ZM12.2417 8.55653C11.9334 9.79653 10.0234 9.16653 9.40337 9.01153L9.94837 6.81986C10.5684 6.97486 12.565 7.2632 12.2417 8.55653Z");
      attr(path1, "fill", "white");
      attr(
        svg,
        "class",
        /*clazz*/
        ctx[0]
      );
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*clazz*/
      1) {
        attr(
          svg,
          "class",
          /*clazz*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { clazz } = $$props;
  $$self.$$set = ($$props2) => {
    if ("clazz" in $$props2)
      $$invalidate(0, clazz = $$props2.clazz);
  };
  return [clazz];
}
class LogoBitcoin extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$6, safe_not_equal, { clazz: 0 });
  }
}
function create_fragment$5(ctx) {
  let svg;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        xmlns: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path1).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "fill", "#5546FF");
      attr(path0, "d", "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z");
      attr(path1, "fill", "#fff");
      attr(path1, "d", "m14.346 15.333-2.263-3.429h3.25v-1.293H4.667v1.295h3.248l-2.262 3.427h1.688L10 11.305l2.659 4.028h1.687Zm.987-5.978V8.048h-3.184l2.232-3.381h-1.688L10 8.747l-2.694-4.08H5.618l2.236 3.385H4.665v1.303h10.667Z");
      attr(
        svg,
        "class",
        /*clazz*/
        ctx[0]
      );
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 20 20");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*clazz*/
      1) {
        attr(
          svg,
          "class",
          /*clazz*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { clazz } = $$props;
  $$self.$$set = ($$props2) => {
    if ("clazz" in $$props2)
      $$invalidate(0, clazz = $$props2.clazz);
  };
  return [clazz];
}
class StacksIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$5, safe_not_equal, { clazz: 0 });
  }
}
function create_fragment$4(ctx) {
  let textarea_1;
  let mounted;
  let dispose;
  return {
    c() {
      textarea_1 = element("textarea");
    },
    l(nodes) {
      textarea_1 = claim_element(nodes, "TEXTAREA", {});
      children(textarea_1).forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, textarea_1, anchor);
      set_input_value(
        textarea_1,
        /*name*/
        ctx[0]
      );
      ctx[3](textarea_1);
      if (!mounted) {
        dispose = listen(
          textarea_1,
          "input",
          /*textarea_1_input_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*name*/
      1) {
        set_input_value(
          textarea_1,
          /*name*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(textarea_1);
      ctx[3](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { name } = $$props;
  let textarea;
  onMount(() => {
    textarea.select();
    document.execCommand("copy");
  });
  function textarea_1_input_handler() {
    name = this.value;
    $$invalidate(0, name);
  }
  function textarea_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      textarea = $$value;
      $$invalidate(1, textarea);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
  };
  return [name, textarea, textarea_1_input_handler, textarea_1_binding];
}
class CopyClipboard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$4, safe_not_equal, { name: 0 });
  }
}
function create_default_slot_2$1(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: {
      src: User,
      class: "md:w-auto md:inline-flex items-center gap-x-1.5 bg-blue-600 px-1 py-1 font-normal text-black rounded-xl border border-blue-600 focus-visible:outline focus-visible:none hover:bg-blue-100 focus-visible:none focus-visible:outline-blue-500/50 shrink-0",
      mini: true,
      "aria-hidden": "true"
    }
  });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let t;
  return {
    c() {
      t = text("Log out");
    },
    l(nodes) {
      t = claim_text(nodes, "Log out");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$1(ctx) {
  let dropdownitem;
  let current;
  dropdownitem = new DropdownItem({
    props: {
      defaultClass: "px-4 py-2 text-error-500 hover:bg-gray-1000 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500/50",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  dropdownitem.$on(
    "click",
    /*click_handler_6*/
    ctx[12]
  );
  return {
    c() {
      create_component(dropdownitem.$$.fragment);
    },
    l(nodes) {
      claim_component(dropdownitem.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(dropdownitem, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const dropdownitem_changes = {};
      if (dirty & /*$$scope*/
      32768) {
        dropdownitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropdownitem.$set(dropdownitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(dropdownitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dropdownitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(dropdownitem, detaching);
    }
  };
}
function create_header_slot(ctx) {
  var _a, _b;
  let div32;
  let div31;
  let div16;
  let div0;
  let t0;
  let t1;
  let div3;
  let div1;
  let stacksicon0;
  let t2;
  let span0;
  let t3_value = (
    /*transformAddress*/
    ctx[4](
      /*$sbtcConfig*/
      ctx[0].keySets[CONFIG.VITE_NETWORK].stxAddress
    ) + ""
  );
  let t3;
  let t4;
  let div2;
  let button0;
  let icon0;
  let t5;
  let div6;
  let div4;
  let logobitcoin0;
  let t6;
  let span2;
  let span1;
  let t7;
  let t8_value = " ";
  let t8;
  let t9_value = (
    /*transformAddress*/
    ctx[4](
      /*$sbtcConfig*/
      ctx[0].keySets[CONFIG.VITE_NETWORK].cardinal
    ) + ""
  );
  let t9;
  let t10;
  let div5;
  let button1;
  let icon1;
  let t11;
  let div9;
  let div7;
  let logobitcoin1;
  let t12;
  let span4;
  let span3;
  let t13;
  let t14_value = " ";
  let t14;
  let t15_value = (
    /*transformAddress*/
    ctx[4](
      /*$sbtcConfig*/
      ctx[0].keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0 || ""
    ) + ""
  );
  let t15;
  let t16;
  let div8;
  let button2;
  let icon2;
  let t17;
  let div12;
  let div10;
  let logobitcoin2;
  let t18;
  let span6;
  let span5;
  let t19;
  let t20_value = " ";
  let t20;
  let t21_value = (
    /*transformAddress*/
    ctx[4](
      /*$sbtcConfig*/
      ctx[0].keySets[CONFIG.VITE_NETWORK].ordinal
    ) + ""
  );
  let t21;
  let t22;
  let div11;
  let button3;
  let icon3;
  let t23;
  let div15;
  let div13;
  let logobitcoin3;
  let t24;
  let span8;
  let span7;
  let t25;
  let t26_value = " ";
  let t26;
  let t27_value = (
    /*transformAddress*/
    ctx[4](
      /*$sbtcConfig*/
      ctx[0].keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit1 || ""
    ) + ""
  );
  let t27;
  let t28;
  let div14;
  let button4;
  let icon4;
  let t29;
  let div30;
  let div17;
  let t30;
  let t31;
  let div20;
  let div18;
  let stacksicon1;
  let t32;
  let span9;
  let t33;
  let t34;
  let div19;
  let t35_value = fmtMicroToStx(
    /*$sbtcConfig*/
    ((_b = (_a = ctx[0].keySets[CONFIG.VITE_NETWORK].stacksTokenInfo) == null ? void 0 : _a.stx) == null ? void 0 : _b.balance) || 0
  ) + "";
  let t35;
  let t36;
  let div23;
  let div21;
  let logobitcoin4;
  let t37;
  let span10;
  let t38;
  let t39;
  let div22;
  let t40_value = fmtSatoshiToBitcoin(bitcoinBalanceFromMempool(
    /*$sbtcConfig*/
    ctx[0].keySets[CONFIG.VITE_NETWORK].cardinalInfo
  ) || 0) + "";
  let t40;
  let t41;
  let div26;
  let div24;
  let logobitcoin5;
  let t42;
  let span11;
  let t43;
  let t44;
  let div25;
  let t45_value = fmtSatoshiToBitcoin(bitcoinBalanceFromMempool(
    /*$sbtcConfig*/
    ctx[0].keySets[CONFIG.VITE_NETWORK].ordinalInfo
  ) || 0) + "";
  let t45;
  let t46;
  let div29;
  let div27;
  let logosbtc;
  let t47;
  let span12;
  let t48;
  let t49;
  let div28;
  let t50_value = fmtSatoshiToBitcoin(
    /*$sbtcConfig*/
    ctx[0].keySets[CONFIG.VITE_NETWORK].sBTCBalance || 0
  ) + "";
  let t50;
  let current;
  let mounted;
  let dispose;
  stacksicon0 = new StacksIcon({ props: { clazz: "w-5 h-5" } });
  icon0 = new Icon({
    props: {
      src: ClipboardDocument,
      class: "h-5 w-5 text-white",
      "aria-hidden": "true"
    }
  });
  icon0.$on(
    "keyup",
    /*keyup_handler*/
    ctx[5]
  );
  icon0.$on(
    "click",
    /*click_handler*/
    ctx[6]
  );
  logobitcoin0 = new LogoBitcoin({ props: { clazz: "w-5 h-5" } });
  icon1 = new Icon({
    props: {
      src: ClipboardDocument,
      class: "h-5 w-5 text-white",
      "aria-hidden": "true"
    }
  });
  logobitcoin1 = new LogoBitcoin({ props: { clazz: "w-5 h-5" } });
  icon2 = new Icon({
    props: {
      src: ClipboardDocument,
      class: "h-5 w-5 text-white",
      "aria-hidden": "true"
    }
  });
  logobitcoin2 = new LogoBitcoin({ props: { clazz: "w-5 h-5" } });
  icon3 = new Icon({
    props: {
      src: ClipboardDocument,
      class: "h-5 w-5 text-white",
      "aria-hidden": "true"
    }
  });
  logobitcoin3 = new LogoBitcoin({ props: { clazz: "w-5 h-5" } });
  icon4 = new Icon({
    props: {
      src: ClipboardDocument,
      class: "h-5 w-5 text-white",
      "aria-hidden": "true"
    }
  });
  stacksicon1 = new StacksIcon({ props: { clazz: "w-5 h-5" } });
  logobitcoin4 = new LogoBitcoin({ props: { clazz: "w-5 h-5" } });
  logobitcoin5 = new LogoBitcoin({ props: { clazz: "w-5 h-5" } });
  logosbtc = new LogoSBTC({ props: { class: "w-5 h-5" } });
  return {
    c() {
      div32 = element("div");
      div31 = element("div");
      div16 = element("div");
      div0 = element("div");
      t0 = text("Addresses");
      t1 = space();
      div3 = element("div");
      div1 = element("div");
      create_component(stacksicon0.$$.fragment);
      t2 = space();
      span0 = element("span");
      t3 = text(t3_value);
      t4 = space();
      div2 = element("div");
      button0 = element("button");
      create_component(icon0.$$.fragment);
      t5 = space();
      div6 = element("div");
      div4 = element("div");
      create_component(logobitcoin0.$$.fragment);
      t6 = space();
      span2 = element("span");
      span1 = element("span");
      t7 = text("Cardinal:");
      t8 = text(t8_value);
      t9 = text(t9_value);
      t10 = space();
      div5 = element("div");
      button1 = element("button");
      create_component(icon1.$$.fragment);
      t11 = space();
      div9 = element("div");
      div7 = element("div");
      create_component(logobitcoin1.$$.fragment);
      t12 = space();
      span4 = element("span");
      span3 = element("span");
      t13 = text("Cardinal PK:");
      t14 = text(t14_value);
      t15 = text(t15_value);
      t16 = space();
      div8 = element("div");
      button2 = element("button");
      create_component(icon2.$$.fragment);
      t17 = space();
      div12 = element("div");
      div10 = element("div");
      create_component(logobitcoin2.$$.fragment);
      t18 = space();
      span6 = element("span");
      span5 = element("span");
      t19 = text("Ordinal:");
      t20 = text(t20_value);
      t21 = text(t21_value);
      t22 = space();
      div11 = element("div");
      button3 = element("button");
      create_component(icon3.$$.fragment);
      t23 = space();
      div15 = element("div");
      div13 = element("div");
      create_component(logobitcoin3.$$.fragment);
      t24 = space();
      span8 = element("span");
      span7 = element("span");
      t25 = text("Ordinal PK:");
      t26 = text(t26_value);
      t27 = text(t27_value);
      t28 = space();
      div14 = element("div");
      button4 = element("button");
      create_component(icon4.$$.fragment);
      t29 = space();
      div30 = element("div");
      div17 = element("div");
      t30 = text("Balances");
      t31 = space();
      div20 = element("div");
      div18 = element("div");
      create_component(stacksicon1.$$.fragment);
      t32 = space();
      span9 = element("span");
      t33 = text("STX");
      t34 = space();
      div19 = element("div");
      t35 = text(t35_value);
      t36 = space();
      div23 = element("div");
      div21 = element("div");
      create_component(logobitcoin4.$$.fragment);
      t37 = space();
      span10 = element("span");
      t38 = text("BTC (Cardinal)");
      t39 = space();
      div22 = element("div");
      t40 = text(t40_value);
      t41 = space();
      div26 = element("div");
      div24 = element("div");
      create_component(logobitcoin5.$$.fragment);
      t42 = space();
      span11 = element("span");
      t43 = text("BTC (Ordinal)");
      t44 = space();
      div25 = element("div");
      t45 = text(t45_value);
      t46 = space();
      div29 = element("div");
      div27 = element("div");
      create_component(logosbtc.$$.fragment);
      t47 = space();
      span12 = element("span");
      t48 = text("sBTC");
      t49 = space();
      div28 = element("div");
      t50 = text(t50_value);
      this.h();
    },
    l(nodes) {
      div32 = claim_element(nodes, "DIV", { slot: true, class: true });
      var div32_nodes = children(div32);
      div31 = claim_element(div32_nodes, "DIV", { class: true });
      var div31_nodes = children(div31);
      div16 = claim_element(div31_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      div0 = claim_element(div16_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Addresses");
      div0_nodes.forEach(detach);
      t1 = claim_space(div16_nodes);
      div3 = claim_element(div16_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      claim_component(stacksicon0.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      span0 = claim_element(div1_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, t3_value);
      span0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      button0 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      claim_component(icon0.$$.fragment, button0_nodes);
      button0_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t5 = claim_space(div16_nodes);
      div6 = claim_element(div16_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      claim_component(logobitcoin0.$$.fragment, div4_nodes);
      t6 = claim_space(div4_nodes);
      span2 = claim_element(div4_nodes, "SPAN", {});
      var span2_nodes = children(span2);
      span1 = claim_element(span2_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t7 = claim_text(span1_nodes, "Cardinal:");
      span1_nodes.forEach(detach);
      t8 = claim_text(span2_nodes, t8_value);
      t9 = claim_text(span2_nodes, t9_value);
      span2_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t10 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      button1 = claim_element(div5_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      claim_component(icon1.$$.fragment, button1_nodes);
      button1_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      t11 = claim_space(div16_nodes);
      div9 = claim_element(div16_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div7 = claim_element(div9_nodes, "DIV", { id: true, class: true });
      var div7_nodes = children(div7);
      claim_component(logobitcoin1.$$.fragment, div7_nodes);
      t12 = claim_space(div7_nodes);
      span4 = claim_element(div7_nodes, "SPAN", {});
      var span4_nodes = children(span4);
      span3 = claim_element(span4_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t13 = claim_text(span3_nodes, "Cardinal PK:");
      span3_nodes.forEach(detach);
      t14 = claim_text(span4_nodes, t14_value);
      t15 = claim_text(span4_nodes, t15_value);
      span4_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      t16 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      button2 = claim_element(div8_nodes, "BUTTON", { class: true });
      var button2_nodes = children(button2);
      claim_component(icon2.$$.fragment, button2_nodes);
      button2_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      t17 = claim_space(div16_nodes);
      div12 = claim_element(div16_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div10 = claim_element(div12_nodes, "DIV", { id: true, class: true });
      var div10_nodes = children(div10);
      claim_component(logobitcoin2.$$.fragment, div10_nodes);
      t18 = claim_space(div10_nodes);
      span6 = claim_element(div10_nodes, "SPAN", {});
      var span6_nodes = children(span6);
      span5 = claim_element(span6_nodes, "SPAN", { class: true });
      var span5_nodes = children(span5);
      t19 = claim_text(span5_nodes, "Ordinal:");
      span5_nodes.forEach(detach);
      t20 = claim_text(span6_nodes, t20_value);
      t21 = claim_text(span6_nodes, t21_value);
      span6_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      t22 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      button3 = claim_element(div11_nodes, "BUTTON", { class: true });
      var button3_nodes = children(button3);
      claim_component(icon3.$$.fragment, button3_nodes);
      button3_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      t23 = claim_space(div16_nodes);
      div15 = claim_element(div16_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      div13 = claim_element(div15_nodes, "DIV", { id: true, class: true });
      var div13_nodes = children(div13);
      claim_component(logobitcoin3.$$.fragment, div13_nodes);
      t24 = claim_space(div13_nodes);
      span8 = claim_element(div13_nodes, "SPAN", {});
      var span8_nodes = children(span8);
      span7 = claim_element(span8_nodes, "SPAN", { class: true });
      var span7_nodes = children(span7);
      t25 = claim_text(span7_nodes, "Ordinal PK:");
      span7_nodes.forEach(detach);
      t26 = claim_text(span8_nodes, t26_value);
      t27 = claim_text(span8_nodes, t27_value);
      span8_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      t28 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      button4 = claim_element(div14_nodes, "BUTTON", { class: true });
      var button4_nodes = children(button4);
      claim_component(icon4.$$.fragment, button4_nodes);
      button4_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      div15_nodes.forEach(detach);
      div16_nodes.forEach(detach);
      t29 = claim_space(div31_nodes);
      div30 = claim_element(div31_nodes, "DIV", { class: true });
      var div30_nodes = children(div30);
      div17 = claim_element(div30_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      t30 = claim_text(div17_nodes, "Balances");
      div17_nodes.forEach(detach);
      t31 = claim_space(div30_nodes);
      div20 = claim_element(div30_nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      div18 = claim_element(div20_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      claim_component(stacksicon1.$$.fragment, div18_nodes);
      t32 = claim_space(div18_nodes);
      span9 = claim_element(div18_nodes, "SPAN", { class: true });
      var span9_nodes = children(span9);
      t33 = claim_text(span9_nodes, "STX");
      span9_nodes.forEach(detach);
      div18_nodes.forEach(detach);
      t34 = claim_space(div20_nodes);
      div19 = claim_element(div20_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      t35 = claim_text(div19_nodes, t35_value);
      div19_nodes.forEach(detach);
      div20_nodes.forEach(detach);
      t36 = claim_space(div30_nodes);
      div23 = claim_element(div30_nodes, "DIV", { class: true });
      var div23_nodes = children(div23);
      div21 = claim_element(div23_nodes, "DIV", { class: true });
      var div21_nodes = children(div21);
      claim_component(logobitcoin4.$$.fragment, div21_nodes);
      t37 = claim_space(div21_nodes);
      span10 = claim_element(div21_nodes, "SPAN", { class: true });
      var span10_nodes = children(span10);
      t38 = claim_text(span10_nodes, "BTC (Cardinal)");
      span10_nodes.forEach(detach);
      div21_nodes.forEach(detach);
      t39 = claim_space(div23_nodes);
      div22 = claim_element(div23_nodes, "DIV", { class: true });
      var div22_nodes = children(div22);
      t40 = claim_text(div22_nodes, t40_value);
      div22_nodes.forEach(detach);
      div23_nodes.forEach(detach);
      t41 = claim_space(div30_nodes);
      div26 = claim_element(div30_nodes, "DIV", { class: true });
      var div26_nodes = children(div26);
      div24 = claim_element(div26_nodes, "DIV", { class: true });
      var div24_nodes = children(div24);
      claim_component(logobitcoin5.$$.fragment, div24_nodes);
      t42 = claim_space(div24_nodes);
      span11 = claim_element(div24_nodes, "SPAN", { class: true });
      var span11_nodes = children(span11);
      t43 = claim_text(span11_nodes, "BTC (Ordinal)");
      span11_nodes.forEach(detach);
      div24_nodes.forEach(detach);
      t44 = claim_space(div26_nodes);
      div25 = claim_element(div26_nodes, "DIV", { class: true });
      var div25_nodes = children(div25);
      t45 = claim_text(div25_nodes, t45_value);
      div25_nodes.forEach(detach);
      div26_nodes.forEach(detach);
      t46 = claim_space(div30_nodes);
      div29 = claim_element(div30_nodes, "DIV", { class: true });
      var div29_nodes = children(div29);
      div27 = claim_element(div29_nodes, "DIV", { class: true });
      var div27_nodes = children(div27);
      claim_component(logosbtc.$$.fragment, div27_nodes);
      t47 = claim_space(div27_nodes);
      span12 = claim_element(div27_nodes, "SPAN", { class: true });
      var span12_nodes = children(span12);
      t48 = claim_text(span12_nodes, "sBTC");
      span12_nodes.forEach(detach);
      div27_nodes.forEach(detach);
      t49 = claim_space(div29_nodes);
      div28 = claim_element(div29_nodes, "DIV", { class: true });
      var div28_nodes = children(div28);
      t50 = claim_text(div28_nodes, t50_value);
      div28_nodes.forEach(detach);
      div29_nodes.forEach(detach);
      div30_nodes.forEach(detach);
      div31_nodes.forEach(detach);
      div32_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "px-4 py-2 font-normal");
      attr(div1, "id", "icon-stacks");
      attr(div1, "class", "flex items-center gap-3 text-sm");
      attr(button0, "class", "h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50");
      attr(div2, "class", "ml-auto flex items-center");
      attr(div3, "class", "px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center");
      attr(span1, "class", "font-bold");
      attr(div4, "id", "bitcoin-c-stacks");
      attr(div4, "class", "flex items-center gap-3 text-sm");
      attr(button1, "class", "h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50");
      attr(div5, "class", "ml-auto flex items-center");
      attr(div6, "class", "px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center");
      attr(span3, "class", "font-bold");
      attr(div7, "id", "bitcoin-c-stacks");
      attr(div7, "class", "flex items-center gap-3 text-sm");
      attr(button2, "class", "h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50");
      attr(div8, "class", "ml-auto flex items-center");
      attr(div9, "class", "px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center");
      attr(span5, "class", "font-bold");
      attr(div10, "id", "bitcoin-o-stacks");
      attr(div10, "class", "flex items-center gap-3 text-sm");
      attr(button3, "class", "h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50");
      attr(div11, "class", "ml-auto flex items-center");
      attr(div12, "class", "px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center");
      attr(span7, "class", "font-bold");
      attr(div13, "id", "bitcoin-o-stacks");
      attr(div13, "class", "flex items-center gap-3 text-sm");
      attr(button4, "class", "h-8 w-8 rounded-md bg-black flex items-center justify-center border border-transparent hover:border-gray-900 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50");
      attr(div14, "class", "ml-auto flex items-center");
      attr(div15, "class", "px-4 py-1 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-6 items-center");
      attr(div16, "class", "pb-2");
      attr(div17, "class", "mt-1 px-4 py-2 font-normal");
      attr(span9, "class", "font-bold");
      attr(div18, "class", "flex items-center gap-3 text-sm");
      attr(div19, "class", "ml-auto flex items-center");
      attr(div20, "class", "px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center");
      attr(span10, "class", "font-bold");
      attr(div21, "class", "flex items-center gap-3 text-sm");
      attr(div22, "class", "ml-auto flex items-center");
      attr(div23, "class", "px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center");
      attr(span11, "class", "font-bold");
      attr(div24, "class", "flex items-center gap-3 text-sm");
      attr(div25, "class", "ml-auto flex items-center");
      attr(div26, "class", "px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center");
      attr(span12, "class", "font-bold");
      attr(div27, "class", "flex items-center gap-3 text-sm");
      attr(div28, "class", "ml-auto flex items-center");
      attr(div29, "class", "px-4 py-2 bg-gray-1000 grid grid-flow-col auto-cols-auto gap-4 items-center");
      attr(div30, "class", "bg-black");
      attr(div31, "class", "bg-black divide-y divide-gray-900");
      attr(div32, "slot", "header");
      attr(div32, "class", "bg-gray-1000 overflow-hidden py-1 text-white");
    },
    m(target, anchor) {
      insert_hydration(target, div32, anchor);
      append_hydration(div32, div31);
      append_hydration(div31, div16);
      append_hydration(div16, div0);
      append_hydration(div0, t0);
      append_hydration(div16, t1);
      append_hydration(div16, div3);
      append_hydration(div3, div1);
      mount_component(stacksicon0, div1, null);
      append_hydration(div1, t2);
      append_hydration(div1, span0);
      append_hydration(span0, t3);
      append_hydration(div3, t4);
      append_hydration(div3, div2);
      append_hydration(div2, button0);
      mount_component(icon0, button0, null);
      append_hydration(div16, t5);
      append_hydration(div16, div6);
      append_hydration(div6, div4);
      mount_component(logobitcoin0, div4, null);
      append_hydration(div4, t6);
      append_hydration(div4, span2);
      append_hydration(span2, span1);
      append_hydration(span1, t7);
      append_hydration(span2, t8);
      append_hydration(span2, t9);
      append_hydration(div6, t10);
      append_hydration(div6, div5);
      append_hydration(div5, button1);
      mount_component(icon1, button1, null);
      append_hydration(div16, t11);
      append_hydration(div16, div9);
      append_hydration(div9, div7);
      mount_component(logobitcoin1, div7, null);
      append_hydration(div7, t12);
      append_hydration(div7, span4);
      append_hydration(span4, span3);
      append_hydration(span3, t13);
      append_hydration(span4, t14);
      append_hydration(span4, t15);
      append_hydration(div9, t16);
      append_hydration(div9, div8);
      append_hydration(div8, button2);
      mount_component(icon2, button2, null);
      append_hydration(div16, t17);
      append_hydration(div16, div12);
      append_hydration(div12, div10);
      mount_component(logobitcoin2, div10, null);
      append_hydration(div10, t18);
      append_hydration(div10, span6);
      append_hydration(span6, span5);
      append_hydration(span5, t19);
      append_hydration(span6, t20);
      append_hydration(span6, t21);
      append_hydration(div12, t22);
      append_hydration(div12, div11);
      append_hydration(div11, button3);
      mount_component(icon3, button3, null);
      append_hydration(div16, t23);
      append_hydration(div16, div15);
      append_hydration(div15, div13);
      mount_component(logobitcoin3, div13, null);
      append_hydration(div13, t24);
      append_hydration(div13, span8);
      append_hydration(span8, span7);
      append_hydration(span7, t25);
      append_hydration(span8, t26);
      append_hydration(span8, t27);
      append_hydration(div15, t28);
      append_hydration(div15, div14);
      append_hydration(div14, button4);
      mount_component(icon4, button4, null);
      append_hydration(div31, t29);
      append_hydration(div31, div30);
      append_hydration(div30, div17);
      append_hydration(div17, t30);
      append_hydration(div30, t31);
      append_hydration(div30, div20);
      append_hydration(div20, div18);
      mount_component(stacksicon1, div18, null);
      append_hydration(div18, t32);
      append_hydration(div18, span9);
      append_hydration(span9, t33);
      append_hydration(div20, t34);
      append_hydration(div20, div19);
      append_hydration(div19, t35);
      append_hydration(div30, t36);
      append_hydration(div30, div23);
      append_hydration(div23, div21);
      mount_component(logobitcoin4, div21, null);
      append_hydration(div21, t37);
      append_hydration(div21, span10);
      append_hydration(span10, t38);
      append_hydration(div23, t39);
      append_hydration(div23, div22);
      append_hydration(div22, t40);
      append_hydration(div30, t41);
      append_hydration(div30, div26);
      append_hydration(div26, div24);
      mount_component(logobitcoin5, div24, null);
      append_hydration(div24, t42);
      append_hydration(div24, span11);
      append_hydration(span11, t43);
      append_hydration(div26, t44);
      append_hydration(div26, div25);
      append_hydration(div25, t45);
      append_hydration(div30, t46);
      append_hydration(div30, div29);
      append_hydration(div29, div27);
      mount_component(logosbtc, div27, null);
      append_hydration(div27, t47);
      append_hydration(div27, span12);
      append_hydration(span12, t48);
      append_hydration(div29, t49);
      append_hydration(div29, div28);
      append_hydration(div28, t50);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button0, "click", prevent_default(
            /*click_handler_1*/
            ctx[7]
          )),
          listen(button1, "click", prevent_default(
            /*click_handler_2*/
            ctx[8]
          )),
          listen(button2, "click", prevent_default(
            /*click_handler_3*/
            ctx[9]
          )),
          listen(button3, "click", prevent_default(
            /*click_handler_4*/
            ctx[10]
          )),
          listen(button4, "click", prevent_default(
            /*click_handler_5*/
            ctx[11]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      var _a2, _b2;
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t3_value !== (t3_value = /*transformAddress*/
      ctx2[4](
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].stxAddress
      ) + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t9_value !== (t9_value = /*transformAddress*/
      ctx2[4](
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].cardinal
      ) + ""))
        set_data(t9, t9_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t15_value !== (t15_value = /*transformAddress*/
      ctx2[4](
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0 || ""
      ) + ""))
        set_data(t15, t15_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t21_value !== (t21_value = /*transformAddress*/
      ctx2[4](
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].ordinal
      ) + ""))
        set_data(t21, t21_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t27_value !== (t27_value = /*transformAddress*/
      ctx2[4](
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit1 || ""
      ) + ""))
        set_data(t27, t27_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t35_value !== (t35_value = fmtMicroToStx(
        /*$sbtcConfig*/
        ((_b2 = (_a2 = ctx2[0].keySets[CONFIG.VITE_NETWORK].stacksTokenInfo) == null ? void 0 : _a2.stx) == null ? void 0 : _b2.balance) || 0
      ) + ""))
        set_data(t35, t35_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t40_value !== (t40_value = fmtSatoshiToBitcoin(bitcoinBalanceFromMempool(
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].cardinalInfo
      ) || 0) + ""))
        set_data(t40, t40_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t45_value !== (t45_value = fmtSatoshiToBitcoin(bitcoinBalanceFromMempool(
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].ordinalInfo
      ) || 0) + ""))
        set_data(t45, t45_value);
      if ((!current || dirty & /*$sbtcConfig*/
      1) && t50_value !== (t50_value = fmtSatoshiToBitcoin(
        /*$sbtcConfig*/
        ctx2[0].keySets[CONFIG.VITE_NETWORK].sBTCBalance || 0
      ) + ""))
        set_data(t50, t50_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(stacksicon0.$$.fragment, local);
      transition_in(icon0.$$.fragment, local);
      transition_in(logobitcoin0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(logobitcoin1.$$.fragment, local);
      transition_in(icon2.$$.fragment, local);
      transition_in(logobitcoin2.$$.fragment, local);
      transition_in(icon3.$$.fragment, local);
      transition_in(logobitcoin3.$$.fragment, local);
      transition_in(icon4.$$.fragment, local);
      transition_in(stacksicon1.$$.fragment, local);
      transition_in(logobitcoin4.$$.fragment, local);
      transition_in(logobitcoin5.$$.fragment, local);
      transition_in(logosbtc.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(stacksicon0.$$.fragment, local);
      transition_out(icon0.$$.fragment, local);
      transition_out(logobitcoin0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(logobitcoin1.$$.fragment, local);
      transition_out(icon2.$$.fragment, local);
      transition_out(logobitcoin2.$$.fragment, local);
      transition_out(icon3.$$.fragment, local);
      transition_out(logobitcoin3.$$.fragment, local);
      transition_out(icon4.$$.fragment, local);
      transition_out(stacksicon1.$$.fragment, local);
      transition_out(logobitcoin4.$$.fragment, local);
      transition_out(logobitcoin5.$$.fragment, local);
      transition_out(logosbtc.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div32);
      destroy_component(stacksicon0);
      destroy_component(icon0);
      destroy_component(logobitcoin0);
      destroy_component(icon1);
      destroy_component(logobitcoin1);
      destroy_component(icon2);
      destroy_component(logobitcoin2);
      destroy_component(icon3);
      destroy_component(logobitcoin3);
      destroy_component(icon4);
      destroy_component(stacksicon1);
      destroy_component(logobitcoin4);
      destroy_component(logobitcoin5);
      destroy_component(logosbtc);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$3(ctx) {
  let div;
  let t0;
  let button;
  let t1;
  let dropdown;
  let current;
  button = new Button({
    props: {
      class: "w-[50px] h-[50px] bg-transparent hover:bg-transparent focus:bg-transparent focus:border-none focus:ring-transparent",
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  dropdown = new Dropdown({
    props: {
      class: "z-20 py-1 w-full rounded-lg bg-black !border py-1 !border-gray-900",
      style: "z-index:30; background: #000!important;",
      placement: "bottom-end",
      $$slots: {
        header: [create_header_slot],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      t0 = space();
      create_component(button.$$.fragment);
      t1 = space();
      create_component(dropdown.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true });
      children(div).forEach(detach);
      t0 = claim_space(nodes);
      claim_component(button.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(dropdown.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(div, "id", "clipboard");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(button, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(dropdown, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      32768) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const dropdown_changes = {};
      if (dirty & /*$$scope, $sbtcConfig*/
      32769) {
        dropdown_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropdown.$set(dropdown_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(dropdown.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      transition_out(dropdown.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t0);
      destroy_component(button, detaching);
      if (detaching)
        detach(t1);
      destroy_component(dropdown, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $sbtcConfig;
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
  const dispatch = createEventDispatcher$1();
  const handleClick = (e) => {
    e.preventDefault();
    alert("Clicked on: " + e.target);
  };
  const copy = (event, ele, val) => {
    event.stopPropagation();
    let clippy = {
      target: document.getElementById("clipboard"),
      props: { name: val }
    };
    const app2 = new CopyClipboard(clippy);
    app2.$destroy();
    makeFlash(document.getElementById(ele));
    return false;
  };
  const doLogout = () => {
    dispatch("init_logout");
  };
  const transformAddress = (address) => {
    if (address) {
      return truncate(address, 8);
    }
    return "not connected";
  };
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  const click_handler = (event) => handleClick(event);
  const click_handler_1 = (event) => copy(event, "icon-stacks", $sbtcConfig.keySets[CONFIG.VITE_NETWORK].stxAddress);
  const click_handler_2 = (event) => copy(event, "icon-stacks", $sbtcConfig.keySets[CONFIG.VITE_NETWORK].cardinal);
  const click_handler_3 = (event) => copy(event, "icon-stacks", $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit0 || "");
  const click_handler_4 = (event) => copy(event, "icon-stacks", $sbtcConfig.keySets[CONFIG.VITE_NETWORK].ordinal);
  const click_handler_5 = (event) => copy(event, "icon-stacks", $sbtcConfig.keySets[CONFIG.VITE_NETWORK].btcPubkeySegwit1 || "");
  const click_handler_6 = () => doLogout();
  return [
    $sbtcConfig,
    handleClick,
    copy,
    doLogout,
    transformAddress,
    keyup_handler,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    click_handler_6
  ];
}
class AccountDropdown extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$3, safe_not_equal, {});
  }
}
function create_default_slot_3(ctx) {
  let brand;
  let current;
  brand = new Brand({});
  return {
    c() {
      create_component(brand.$$.fragment);
    },
    l(nodes) {
      claim_component(brand.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(brand, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(brand.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(brand.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(brand, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$sbtcConfig*/
      ctx2[2].loggedIn
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block(ctx) {
  let button;
  let t;
  let svg;
  let mask;
  let rect;
  let g;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Connect wallet\n				");
      svg = svg_element("svg");
      mask = svg_element("mask");
      rect = svg_element("rect");
      g = svg_element("g");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Connect wallet\n				");
      svg = claim_svg_element(button_nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      mask = claim_svg_element(svg_nodes, "mask", {
        id: true,
        style: true,
        maskUnits: true,
        x: true,
        y: true,
        width: true,
        height: true
      });
      var mask_nodes = children(mask);
      rect = claim_svg_element(mask_nodes, "rect", {
        y: true,
        width: true,
        height: true,
        fill: true
      });
      children(rect).forEach(detach);
      mask_nodes.forEach(detach);
      g = claim_svg_element(svg_nodes, "g", { mask: true });
      var g_nodes = children(g);
      path = claim_svg_element(g_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true
      });
      children(path).forEach(detach);
      g_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(rect, "y", "0.5");
      attr(rect, "width", "20");
      attr(rect, "height", "20");
      attr(rect, "fill", "#D9D9D9");
      attr(mask, "id", "mask0_3780_6397");
      set_style(mask, "mask-type", "alpha");
      attr(mask, "maskUnits", "userSpaceOnUse");
      attr(mask, "x", "0");
      attr(mask, "y", "0");
      attr(mask, "width", "20");
      attr(mask, "height", "21");
      attr(path, "d", "M17.5 10.5C17.5 10.0027 17.3025 9.52581 16.9508 9.17417C16.5992 8.82254 16.1223 8.625 15.625 8.625H12.5C12.5 9.28804 12.2366 9.92393 11.7678 10.3928C11.2989 10.8616 10.663 11.125 10 11.125C9.33696 11.125 8.70107 10.8616 8.23223 10.3928C7.76339 9.92393 7.5 9.28804 7.5 8.625H4.375C3.87772 8.625 3.40081 8.82254 3.04917 9.17417C2.69754 9.52581 2.5 10.0027 2.5 10.5M17.5 10.5V15.5C17.5 15.9973 17.3025 16.4742 16.9508 16.8258C16.5992 17.1775 16.1223 17.375 15.625 17.375H4.375C3.87772 17.375 3.40081 17.1775 3.04917 16.8258C2.69754 16.4742 2.5 15.9973 2.5 15.5V10.5M17.5 10.5V8M2.5 10.5V8M17.5 8C17.5 7.50272 17.3025 7.02581 16.9508 6.67417C16.5992 6.32254 16.1223 6.125 15.625 6.125H4.375C3.87772 6.125 3.40081 6.32254 3.04917 6.67417C2.69754 7.02581 2.5 7.50272 2.5 8M17.5 8V5.5C17.5 5.00272 17.3025 4.52581 16.9508 4.17417C16.5992 3.82254 16.1223 3.625 15.625 3.625H4.375C3.87772 3.625 3.40081 3.82254 3.04917 4.17417C2.69754 4.52581 2.5 5.00272 2.5 5.5V8");
      attr(path, "stroke", "black");
      attr(path, "stroke-width", "1.5");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(g, "mask", "url(#mask0_3780_6397)");
      attr(svg, "width", "20");
      attr(svg, "height", "21");
      attr(svg, "viewBox", "0 0 20 21");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(button, "class", "inline-flex items-center gap-x-1.5 px-4 py-2 font-normal text-white rounded-xl border bg-gray-500 border-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50 shrink-0");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      append_hydration(button, svg);
      append_hydration(svg, mask);
      append_hydration(mask, rect);
      append_hydration(svg, g);
      append_hydration(g, path);
      if (!mounted) {
        dispose = [
          listen(
            button,
            "keydown",
            /*keydown_handler*/
            ctx[6]
          ),
          listen(
            button,
            "click",
            /*doLogin*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2(ctx) {
  let accountdropdown;
  let current;
  accountdropdown = new AccountDropdown({});
  accountdropdown.$on(
    "init_logout",
    /*init_logout_handler*/
    ctx[7]
  );
  return {
    c() {
      create_component(accountdropdown.$$.fragment);
    },
    l(nodes) {
      claim_component(accountdropdown.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(accountdropdown, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(accountdropdown.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(accountdropdown.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(accountdropdown, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let navli;
  let current;
  navli = new NavLi({
    props: {
      nonActiveClass: (
        /*getNavActiveClass*/
        ctx[0]("/dlc-admin")
      ),
      href: "/dlc-admin",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navli.$$.fragment);
    },
    l(nodes) {
      claim_component(navli.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navli, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const navli_changes = {};
      if (dirty & /*getNavActiveClass*/
      1)
        navli_changes.nonActiveClass = /*getNavActiveClass*/
        ctx2[0]("/dlc-admin");
      if (dirty & /*$$scope*/
      1024) {
        navli_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli.$set(navli_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navli.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navli.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navli, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("dlc admin");
    },
    l(nodes) {
      t = claim_text(nodes, "dlc admin");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1(ctx) {
  let show_if = loggedIn() && isCoordinator(
    /*$sbtcConfig*/
    ctx[2].keySets[CONFIG.VITE_NETWORK]
  );
  let if_block_anchor;
  let current;
  let if_block = show_if && create_if_block$1(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*$sbtcConfig*/
      4)
        show_if = loggedIn() && isCoordinator(
          /*$sbtcConfig*/
          ctx2[2].keySets[CONFIG.VITE_NETWORK]
        );
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$sbtcConfig*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot(ctx) {
  let navbrand;
  let t0;
  let div;
  let t1;
  let navhamburger;
  let t2;
  let navul;
  let current;
  navbrand = new NavBrand({
    props: {
      href: "/",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  let if_block = !/*homepage*/
  ctx[1] && create_if_block_1(ctx);
  navhamburger = new NavHamburger({
    props: { class: "text-white hover:bg-gray-1000" }
  });
  navhamburger.$on("click", function() {
    if (is_function(
      /*toggle*/
      ctx[9]
    ))
      ctx[9].apply(this, arguments);
  });
  navul = new NavUl({
    props: {
      hidden: (
        /*hidden*/
        ctx[8]
      ),
      class: "order-1 md:flex-1",
      ulClass: "dark:bg-black dark:md:bg-white md:border-0 border border-black flex flex-col p-2 md:p-4 mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium !md:space-x-4",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navbrand.$$.fragment);
      t0 = space();
      div = element("div");
      if (if_block)
        if_block.c();
      t1 = space();
      create_component(navhamburger.$$.fragment);
      t2 = space();
      create_component(navul.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(navbrand.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(navhamburger.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(navul.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(div, "class", "hidden md:flex md:gap-2 md:order-3");
    },
    m(target, anchor) {
      mount_component(navbrand, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      insert_hydration(target, t1, anchor);
      mount_component(navhamburger, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(navul, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const navbrand_changes = {};
      if (dirty & /*$$scope*/
      1024) {
        navbrand_changes.$$scope = { dirty, ctx };
      }
      navbrand.$set(navbrand_changes);
      if (!/*homepage*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & /*homepage*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const navul_changes = {};
      if (dirty & /*hidden*/
      256)
        navul_changes.hidden = /*hidden*/
        ctx[8];
      if (dirty & /*$$scope, getNavActiveClass, $sbtcConfig*/
      1029) {
        navul_changes.$$scope = { dirty, ctx };
      }
      navul.$set(navul_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navbrand.$$.fragment, local);
      transition_in(if_block);
      transition_in(navhamburger.$$.fragment, local);
      transition_in(navul.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navbrand.$$.fragment, local);
      transition_out(if_block);
      transition_out(navhamburger.$$.fragment, local);
      transition_out(navul.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbrand, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      if (detaching)
        detach(t1);
      destroy_component(navhamburger, detaching);
      if (detaching)
        detach(t2);
      destroy_component(navul, detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let navbar;
  let current;
  navbar = new Navbar({
    props: {
      class: "mx-auto flex max-w-7xl items-center !px-6 lg:px-8 !bg-transparent",
      navDivClass: "mx-auto flex flex-wrap justify-between items-center",
      fluid: true,
      $$slots: {
        default: [
          create_default_slot,
          ({ hidden, toggle }) => ({ 8: hidden, 9: toggle }),
          ({ hidden, toggle }) => (hidden ? 256 : 0) | (toggle ? 512 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navbar.$$.fragment);
    },
    l(nodes) {
      claim_component(navbar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navbar, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const navbar_changes = {};
      if (dirty & /*$$scope, hidden, getNavActiveClass, $sbtcConfig, toggle, homepage*/
      1799) {
        navbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navbar.$set(navbar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbar, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let homepage;
  let getNavActiveClass;
  let $sbtcConfig;
  let $page;
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $sbtcConfig = $$value));
  component_subscribe($$self, page, ($$value) => $$invalidate(5, $page = $$value));
  const doLogin = async () => {
    const res = await loginStacksJs(initApplication, $sbtcConfig);
    console.log(res);
  };
  const doLogout = () => {
    logUserOut();
    sbtcConfig.update((conf) => {
      conf.loggedIn = false;
      conf.keySets[CONFIG.VITE_NETWORK] = {};
      return conf;
    });
    goto("/");
  };
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  const init_logout_handler = () => doLogout();
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    32) {
      $$invalidate(1, homepage = $page.route.id === "/");
    }
  };
  $$invalidate(0, getNavActiveClass = (item) => {
    if (location.href.indexOf(item) > -1)
      return "font-normal text-base text-blue-600 !px-4 !py-2 rounded-lg hover:bg-white/[8%] focus:bg-white/[16%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500/50";
    return "font-normal text-base text-gray-300 !px-4 !py-2 rounded-lg hover:bg-white/[8%] focus:bg-white/[16%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500/50";
  });
  return [
    getNavActiveClass,
    homepage,
    $sbtcConfig,
    doLogin,
    doLogout,
    $page,
    keydown_handler,
    init_logout_handler
  ];
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, {});
  }
}
function create_fragment$1(ctx) {
  let div3;
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let a0;
  let svg0;
  let path0;
  let t2;
  let a1;
  let svg1;
  let path1;
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = text("© 2023 UASU LLC.");
      t1 = space();
      div1 = element("div");
      a0 = element("a");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t2 = space();
      a1 = element("a");
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "© 2023 UASU LLC.");
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { href: true, target: true, class: true });
      var a0_nodes = children(a0);
      svg0 = claim_svg_element(a0_nodes, "svg", {
        class: true,
        fill: true,
        viewBox: true,
        "aria-hidden": true
      });
      var svg0_nodes = children(svg0);
      path0 = claim_svg_element(svg0_nodes, "path", { d: true });
      children(path0).forEach(detach);
      svg0_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", { href: true, target: true, class: true });
      var a1_nodes = children(a1);
      svg1 = claim_svg_element(a1_nodes, "svg", {
        class: true,
        fill: true,
        viewBox: true,
        "aria-hidden": true
      });
      var svg1_nodes = children(svg1);
      path1 = claim_svg_element(svg1_nodes, "path", {
        "fill-rule": true,
        d: true,
        "clip-rule": true
      });
      children(path1).forEach(detach);
      svg1_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84");
      attr(svg0, "class", "w-5 h-5");
      attr(svg0, "fill", "currentColor");
      attr(svg0, "viewBox", "0 0 24 24");
      attr(svg0, "aria-hidden", "true");
      attr(a0, "href", "https://discord.gg/KgTGC5Tp3D");
      attr(a0, "target", "_blank");
      attr(a0, "class", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500/50 rounded-full");
      attr(path1, "fill-rule", "evenodd");
      attr(path1, "d", "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z");
      attr(path1, "clip-rule", "evenodd");
      attr(svg1, "class", "w-5 h-5");
      attr(svg1, "fill", "currentColor");
      attr(svg1, "viewBox", "0 0 24 24");
      attr(svg1, "aria-hidden", "true");
      attr(a1, "href", "https://twitter.com/uasubtc");
      attr(a1, "target", "_blank");
      attr(a1, "class", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500/50 rounded-full");
      attr(div1, "class", "flex gap-4");
      attr(div2, "class", "flex items-baseline align-baseline justify-between flex-1");
      attr(div3, "class", "mx-auto flex max-w-7xl items-center !px-6 lg:px-8 py-6");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, a0);
      append_hydration(a0, svg0);
      append_hydration(svg0, path0);
      append_hydration(div1, t2);
      append_hydration(div1, a1);
      append_hydration(a1, svg1);
      append_hydration(svg1, path1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
    }
  };
}
class Footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
function create_if_block(ctx) {
  let div2;
  let div0;
  let previous_key = (
    /*componentKey*/
    ctx[0]
  );
  let t0;
  let div1;
  let t1;
  let footer;
  let current;
  let key_block = create_key_block();
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  footer = new Footer({});
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      key_block.c();
      t0 = space();
      div1 = element("div");
      if (default_slot)
        default_slot.c();
      t1 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, style: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      key_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (default_slot)
        default_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      claim_component(footer.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "lg:px-8 ");
      attr(div1, "class", "sm:w-full md:w-4/5 flex min-h-[calc(100vh-160px)] lg:px-8 justify-start align-top items-start mx-auto flex-col");
      attr(div2, "class", "text-white font-extralight min-h-screen");
      set_style(div2, "background-color", "#333333");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      key_block.m(div0, null);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      append_hydration(div2, t1);
      mount_component(footer, div2, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*componentKey*/
      1 && safe_not_equal(previous_key, previous_key = /*componentKey*/
      ctx2[0])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block();
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(div0, null);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      key_block.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      destroy_component(footer);
    }
  };
}
function create_key_block(ctx) {
  let header;
  let current;
  header = new Header({});
  return {
    c() {
      create_component(header.$$.fragment);
    },
    l(nodes) {
      claim_component(header.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*inited*/
    ctx[1] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*inited*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*inited*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $sbtcConfig;
  let $page;
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(7, $sbtcConfig = $$value));
  component_subscribe($$self, page, ($$value) => $$invalidate(8, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let componentKey = 0;
  let inited = false;
  console.log("process.env: ", { "BASE_URL": "./", "MODE": "production", "DEV": false, "PROD": true, "SSR": false });
  setConfig($page.url.search);
  const search = $page.url.search;
  if (!isLegal(location.href)) {
    componentKey++;
    goto("/?net=testnet");
  }
  beforeNavigate((nav) => {
    var _a, _b, _c, _d;
    if (!isLegal(((_a = nav.to) == null ? void 0 : _a.route.id) || "")) {
      nav.cancel();
      loginStacksJs(initApplication, $sbtcConfig);
      $$invalidate(0, componentKey++, componentKey);
      return;
    }
    const next = (((_b = nav.to) == null ? void 0 : _b.url.pathname) || "") + (((_c = nav.to) == null ? void 0 : _c.url.search) || "");
    if (((_d = nav.to) == null ? void 0 : _d.url.search.indexOf("testnet")) === -1 && search.indexOf("net=testnet") > -1) {
      nav.cancel();
      goto(next + "?net=testnet");
    }
  });
  afterNavigate((nav) => {
    var _a;
    ((_a = nav == null ? void 0 : nav.to) == null ? void 0 : _a.route.id) === "/";
    $$invalidate(0, componentKey++, componentKey);
  });
  let { data } = $$props;
  const unsubscribe = sbtcConfig.subscribe((conf) => {
  });
  onDestroy(unsubscribe);
  onMount(async () => {
    try {
      await initApplication($sbtcConfig ? $sbtcConfig : defaultConfig, false);
    } catch (err) {
      console.log(err);
    }
    $$invalidate(1, inited = true);
  });
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(2, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [componentKey, inited, data, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 2 });
  }
}
export {
  Layout as component,
  _layout as universal
};
