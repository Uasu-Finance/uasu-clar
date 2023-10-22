import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, v as group_outros, d as transition_out, f as check_outros, g as transition_in, a8 as createEventDispatcher, y as create_component, z as claim_component, A as mount_component, B as destroy_component, q as text, r as claim_text, u as set_data, e as empty, G as create_slot, a as space, c as claim_space, W as append_hydration, J as listen, K as update_slot_base, L as get_all_dirty_from_scope, M as get_slot_changes, a6 as set_input_value, ab as head_selector, a4 as src_url_equal, ac as globals, ad as stop_propagation, Y as noop, R as run_all, T as bubble } from "../chunks/index.7f5fe353.js";
import { B as Button, g as goto } from "../chunks/navigation.90129433.js";
import { v as validEmail } from "../chunks/utils.eacbc159.js";
const prerender = false;
const ssr = false;
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
const bullbear = "" + new URL("../assets/bullbear.3ab0956d.png", import.meta.url).href;
function create_else_block(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      type: "button",
      class: "text-blue-600  text-1xl inline-flex items-center gap-x-1.5 bg-blue-01 px-4 py-2 font-normal  rounded-xl border border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  button.$on(
    "click",
    /*click_handler_1*/
    ctx[5]
  );
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope, label*/
      514) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_if_block$2(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      type: "button",
      class: "bg-blue-600 text-blue-600 text-1xl inline-flex items-center gap-x-1.5 bg-blue-01 px-4 py-2 font-normal  rounded-xl border border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[4]
  );
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope, label*/
      514) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*label*/
        ctx[1]
      );
    },
    l(nodes) {
      t = claim_text(
        nodes,
        /*label*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*label*/
      2)
        set_data(
          t,
          /*label*/
          ctx2[1]
        );
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$1(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*label*/
        ctx[1]
      );
    },
    l(nodes) {
      t = claim_text(
        nodes,
        /*label*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*label*/
      2)
        set_data(
          t,
          /*label*/
          ctx2[1]
        );
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$4(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*darkScheme*/
      ctx2[0]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mr-3");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
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
        if_block.m(div, null);
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
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { darkScheme } = $$props;
  let { label } = $$props;
  let { target } = $$props;
  const dispatch = createEventDispatcher();
  const doClicked = (event) => {
    const menuTarget = {
      offsetTop: event.target.offsetTop,
      offsetLeft: event.target.offsetLeft
    };
    dispatch("clicked", { target, menuTarget });
  };
  const click_handler = (event) => doClicked(event);
  const click_handler_1 = (event) => doClicked(event);
  $$self.$$set = ($$props2) => {
    if ("darkScheme" in $$props2)
      $$invalidate(0, darkScheme = $$props2.darkScheme);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("target" in $$props2)
      $$invalidate(3, target = $$props2.target);
  };
  return [darkScheme, label, doClicked, target, click_handler, click_handler_1];
}
class Button_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$4, safe_not_equal, { darkScheme: 0, label: 1, target: 3 });
  }
}
const Modal_svelte_svelte_type_style_lang = "";
const get_debug_slot_changes = (dirty) => ({});
const get_debug_slot_context = (ctx) => ({});
const get_close_slot_changes = (dirty) => ({});
const get_close_slot_context = (ctx) => ({});
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function create_if_block$1(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let t2;
  let current;
  let mounted;
  let dispose;
  const title_slot_template = (
    /*#slots*/
    ctx[3].title
  );
  const title_slot = create_slot(
    title_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    get_title_slot_context
  );
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  const close_slot_template = (
    /*#slots*/
    ctx[3].close
  );
  const close_slot = create_slot(
    close_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    get_close_slot_context
  );
  const debug_slot_template = (
    /*#slots*/
    ctx[3].debug
  );
  const debug_slot = create_slot(
    debug_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    get_debug_slot_context
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (title_slot)
        title_slot.c();
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (close_slot)
        close_slot.c();
      t2 = space();
      if (debug_slot)
        debug_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (title_slot)
        title_slot.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if (default_slot)
        default_slot.l(div0_nodes);
      t1 = claim_space(div0_nodes);
      if (close_slot)
        close_slot.l(div0_nodes);
      t2 = claim_space(div0_nodes);
      if (debug_slot)
        debug_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "sv-modal svelte-m2m4og");
      attr(div1, "class", "h-full w-full backdrop opacity-90 svelte-m2m4og");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (title_slot) {
        title_slot.m(div0, null);
      }
      append_hydration(div0, t0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      append_hydration(div0, t1);
      if (close_slot) {
        close_slot.m(div0, null);
      }
      append_hydration(div0, t2);
      if (debug_slot) {
        debug_slot.m(div0, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          div1,
          "click",
          /*dismiss*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              title_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              get_title_slot_changes
            ),
            get_title_slot_context
          );
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (close_slot) {
        if (close_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            close_slot,
            close_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              close_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              get_close_slot_changes
            ),
            get_close_slot_context
          );
        }
      }
      if (debug_slot) {
        if (debug_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            debug_slot,
            debug_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              debug_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              get_debug_slot_changes
            ),
            get_debug_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      transition_in(default_slot, local);
      transition_in(close_slot, local);
      transition_in(debug_slot, local);
      current = true;
    },
    o(local) {
      transition_out(title_slot, local);
      transition_out(default_slot, local);
      transition_out(close_slot, local);
      transition_out(debug_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (title_slot)
        title_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      if (close_slot)
        close_slot.d(detaching);
      if (debug_slot)
        debug_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$3(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*showModal*/
    ctx[0] && create_if_block$1(ctx)
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
        /*showModal*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*showModal*/
          1) {
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
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { showModal = false } = $$props;
  const dispatch = createEventDispatcher();
  const dismiss = () => {
    dispatch("closeModal");
  };
  scroll(0, 0);
  $$self.$$set = ($$props2) => {
    if ("showModal" in $$props2)
      $$invalidate(0, showModal = $$props2.showModal);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [showModal, dismiss, $$scope, slots];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$3, safe_not_equal, { showModal: 0 });
  }
}
function create_if_block_1(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(
        /*errorReason*/
        ctx[1]
      );
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*errorReason*/
        ctx[1]
      );
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*errorReason*/
      2)
        set_data(
          t,
          /*errorReason*/
          ctx2[1]
        );
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(
        /*emailSaved*/
        ctx[2]
      );
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*emailSaved*/
        ctx[2]
      );
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*emailSaved*/
      4)
        set_data(
          t,
          /*emailSaved*/
          ctx2[2]
        );
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$2(ctx) {
  let div4;
  let div3;
  let h1;
  let t0;
  let t1;
  let div0;
  let p;
  let t2;
  let t3;
  let div2;
  let input;
  let t4;
  let div1;
  let button;
  let t5;
  let t6;
  let current;
  let mounted;
  let dispose;
  button = new Button_1({
    props: {
      darkScheme: true,
      label: "Send",
      target: ""
    }
  });
  button.$on(
    "clicked",
    /*clicked_handler*/
    ctx[5]
  );
  let if_block0 = (
    /*errorReason*/
    ctx[1] && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*emailSaved*/
    ctx[2] && create_if_block(ctx)
  );
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      h1 = element("h1");
      t0 = text("Watch this space!");
      t1 = space();
      div0 = element("div");
      p = element("p");
      t2 = text("Join our waiting list and be the first to buy rare sats and costly Bitcoin digital assets with your friends.");
      t3 = space();
      div2 = element("div");
      input = element("input");
      t4 = space();
      div1 = element("div");
      create_component(button.$$.fragment);
      t5 = space();
      if (if_block0)
        if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Watch this space!");
      h1_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Join our waiting list and be the first to buy rare sats and costly Bitcoin digital assets with your friends.");
      p_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      input = claim_element(div2_nodes, "INPUT", {
        type: true,
        id: true,
        placeholder: true,
        class: true
      });
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(button.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      if (if_block0)
        if_block0.l(div3_nodes);
      t6 = claim_space(div3_nodes);
      if (if_block1)
        if_block1.l(div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-2xl text-blue-600 font-normal");
      attr(p, "class", "text-1xl");
      attr(div0, "class", "text-white flex flex-col gap-y-16 mb-5");
      attr(input, "type", "email");
      attr(input, "id", "email-entry");
      attr(input, "placeholder", "Enter your email");
      attr(input, "class", "grow p-3 rounded-md border h-14");
      attr(div1, "class", "py-0");
      attr(div2, "class", "w-full flex items-start justify-start gap-2");
      attr(div3, "class", "p-10 font-semibold flex bg-gray-1000 bg-opacity-50 flex-col gap-4 items-baseline rounded-3xl");
      attr(div4, "id", "join-us");
      attr(div4, "class", "md:w-3/4 sm:w-full mb-20 md:mb-40 mx-auto grow text-gray-800 bg-black p-5 border-[0.5px] border-none rounded-3xl");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, h1);
      append_hydration(h1, t0);
      append_hydration(div3, t1);
      append_hydration(div3, div0);
      append_hydration(div0, p);
      append_hydration(p, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div2);
      append_hydration(div2, input);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      append_hydration(div2, t4);
      append_hydration(div2, div1);
      mount_component(button, div1, null);
      append_hydration(div3, t5);
      if (if_block0)
        if_block0.m(div3, null);
      append_hydration(div3, t6);
      if (if_block1)
        if_block1.m(div3, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*value*/
      1 && input.value !== /*value*/
      ctx2[0]) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
      if (
        /*errorReason*/
        ctx2[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(div3, t6);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*emailSaved*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(div3, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(button);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let value;
  let errorReason;
  let emailSaved;
  const joinUs = () => {
    $$invalidate(1, errorReason = void 0);
    if (!value)
      return;
    if (validEmail(value)) {
      $$invalidate(2, emailSaved = "Thank you - we will keep you posted");
    } else {
      $$invalidate(1, errorReason = "Something wrong with the email address - please try again.");
    }
    dispatch("submitted", { submitted: true });
  };
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  const clicked_handler = () => joinUs();
  return [value, errorReason, emailSaved, joinUs, input_input_handler, clicked_handler];
}
class JoinUs extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, {});
  }
}
const { document: document_1 } = globals;
function create_default_slot(ctx) {
  let div;
  let joinusexp2;
  let current;
  let mounted;
  let dispose;
  joinusexp2 = new JoinUs({});
  joinusexp2.$on(
    "submitted",
    /*toggleModal*/
    ctx[1]
  );
  return {
    c() {
      div = element("div");
      create_component(joinusexp2.$$.fragment);
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      claim_component(joinusexp2.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(joinusexp2, div, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div,
            "keydown",
            /*keydown_handler*/
            ctx[3]
          ),
          listen(div, "click", stop_propagation(
            /*click_handler*/
            ctx[4]
          ))
        ];
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(joinusexp2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(joinusexp2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(joinusexp2);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$1(ctx) {
  let meta;
  let t0;
  let modal;
  let t1;
  let div7;
  let h1;
  let t2;
  let t3;
  let div3;
  let div1;
  let div0;
  let p0;
  let t4;
  let t5;
  let p1;
  let t6;
  let t7;
  let p2;
  let t8;
  let t9;
  let p3;
  let t10;
  let t11;
  let div2;
  let img;
  let img_src_value;
  let t12;
  let div6;
  let div4;
  let button0;
  let t13;
  let div5;
  let button1;
  let current;
  modal = new Modal({
    props: {
      showModal: (
        /*showModal*/
        ctx[0]
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  modal.$on(
    "click",
    /*closeModal*/
    ctx[2]
  );
  modal.$on(
    "closeModal",
    /*closeModal*/
    ctx[2]
  );
  button0 = new Button_1({
    props: {
      darkScheme: true,
      label: "Launch app",
      target: ""
    }
  });
  button0.$on(
    "clicked",
    /*clicked_handler*/
    ctx[5]
  );
  button1 = new Button_1({
    props: {
      darkScheme: false,
      label: "Join us",
      target: ""
    }
  });
  button1.$on(
    "clicked",
    /*clicked_handler_1*/
    ctx[6]
  );
  return {
    c() {
      meta = element("meta");
      t0 = space();
      create_component(modal.$$.fragment);
      t1 = space();
      div7 = element("div");
      h1 = element("h1");
      t2 = text("Want to effortlessly de-risk your bitcoin?");
      t3 = space();
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      p0 = element("p");
      t4 = text("Feeling the heat from the Bitcoin hype?");
      t5 = space();
      p1 = element("p");
      t6 = text("Want to de-risk your investment without facing counterparty risks or socialized losses?");
      t7 = space();
      p2 = element("p");
      t8 = text("Seeking a low-risk method that stays native to Bitcoin, avoiding complex smart contracts, bridges, undesirable coins, and third-party custodians?");
      t9 = space();
      p3 = element("p");
      t10 = text("You're not alone. We're crafting the solution.");
      t11 = space();
      div2 = element("div");
      img = element("img");
      t12 = space();
      div6 = element("div");
      div4 = element("div");
      create_component(button0.$$.fragment);
      t13 = space();
      div5 = element("div");
      create_component(button1.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1x5a5oz", document_1.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
      t1 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      h1 = claim_element(div7_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t2 = claim_text(h1_nodes, "Want to effortlessly de-risk your bitcoin?");
      h1_nodes.forEach(detach);
      t3 = claim_space(div7_nodes);
      div3 = claim_element(div7_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "Feeling the heat from the Bitcoin hype?");
      p0_nodes.forEach(detach);
      t5 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Want to de-risk your investment without facing counterparty risks or socialized losses?");
      p1_nodes.forEach(detach);
      t7 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", { class: true });
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "Seeking a low-risk method that stays native to Bitcoin, avoiding complex smart contracts, bridges, undesirable coins, and third-party custodians?");
      p2_nodes.forEach(detach);
      t9 = claim_space(div0_nodes);
      p3 = claim_element(div0_nodes, "P", { class: true });
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "You're not alone. We're crafting the solution.");
      p3_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t11 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      img = claim_element(div2_nodes, "IMG", { src: true, class: true, alt: true });
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t12 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      claim_component(button0.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach);
      t13 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      claim_component(button1.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      this.h();
    },
    h() {
      document_1.title = "Fast Bitcoin withdrawals";
      attr(meta, "name", "description");
      attr(meta, "content", "Get your bitcoin back from web3 defi protocols in hours.");
      attr(h1, "class", "leading-normal my-10 text-4xl text-blue-600 font-semibold");
      attr(p0, "class", "mb-4");
      attr(p1, "class", "mb-4");
      attr(p2, "class", "mb-4");
      attr(p3, "class", "cta");
      attr(div0, "class", "cta");
      attr(div1, "class", "w-full font-normal text-white");
      if (!src_url_equal(img.src, img_src_value = bullbear))
        attr(img, "src", img_src_value);
      attr(img, "class", "bull-bear");
      attr(img, "alt", "Bull market vs. Bear market illustration");
      attr(div2, "class", "w-full self-end");
      attr(div3, "class", "flex md:flex-row flex-col gap-y-16 mb-16");
      attr(div4, "class", "py-5");
      attr(div5, "class", "py-5");
      attr(div6, "class", "w-full flex justify-center gap-2");
      attr(div7, "class", "md:w-3/4 sm:w-full mt-5 mb-5 mx-auto grow text-gray-800 bg-opacity-100 p-5 border-[0.5px] border-none rounded-3xl");
    },
    m(target, anchor) {
      append_hydration(document_1.head, meta);
      insert_hydration(target, t0, anchor);
      mount_component(modal, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div7, anchor);
      append_hydration(div7, h1);
      append_hydration(h1, t2);
      append_hydration(div7, t3);
      append_hydration(div7, div3);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      append_hydration(div0, p0);
      append_hydration(p0, t4);
      append_hydration(div0, t5);
      append_hydration(div0, p1);
      append_hydration(p1, t6);
      append_hydration(div0, t7);
      append_hydration(div0, p2);
      append_hydration(p2, t8);
      append_hydration(div0, t9);
      append_hydration(div0, p3);
      append_hydration(p3, t10);
      append_hydration(div3, t11);
      append_hydration(div3, div2);
      append_hydration(div2, img);
      append_hydration(div7, t12);
      append_hydration(div7, div6);
      append_hydration(div6, div4);
      mount_component(button0, div4, null);
      append_hydration(div6, t13);
      append_hydration(div6, div5);
      mount_component(button1, div5, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const modal_changes = {};
      if (dirty & /*showModal*/
      1)
        modal_changes.showModal = /*showModal*/
        ctx2[0];
      if (dirty & /*$$scope*/
      256) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      detach(meta);
      if (detaching)
        detach(t0);
      destroy_component(modal, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div7);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let showModal;
  const toggleModal = () => {
    $$invalidate(0, showModal = !showModal);
  };
  const closeModal = () => {
    $$invalidate(0, showModal = false);
  };
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  const clicked_handler = () => goto("/quotes");
  const clicked_handler_1 = () => toggleModal();
  return [
    showModal,
    toggleModal,
    closeModal,
    keydown_handler,
    click_handler,
    clicked_handler,
    clicked_handler_1
  ];
}
class SplashPage extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let meta;
  let t;
  let div;
  let splashpage;
  let current;
  splashpage = new SplashPage({});
  return {
    c() {
      meta = element("meta");
      t = space();
      div = element("div");
      create_component(splashpage.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-17dp1hu", document.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(splashpage.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "Untoppable Insurance";
      attr(meta, "name", "description");
      attr(meta, "content", "Bitcoin DeFi the future of money");
      attr(div, "class", "h-full mx-auto flex flex-col justify-center px-1 lg:px-2 py-6");
    },
    m(target, anchor) {
      append_hydration(document.head, meta);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      mount_component(splashpage, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(splashpage.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(splashpage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      detach(meta);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      destroy_component(splashpage);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component,
  _page as universal
};
