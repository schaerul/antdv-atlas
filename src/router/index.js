import { createWebHistory, createRouter } from "vue-router";
import Button from "@/components/Button.vue";
import Cascader from "@/components/Cascader.vue";
import DatePicker from "@/components/DatePicker.vue";
import TableFixedColumnHeader from "@/components/TableFixedColumnHeader.vue";
import TableEllipses from "@/components/TableEllipses.vue";
import Transfer from "@/components/Transfer.vue";
import TreeSelect from "@/components/TreeSelect.vue";
import Select from "@/components/Select.vue";
import Dropdown from "@/components/Dropdown.vue";
import Form from "@/components/Form.vue";
import Badge from "@/components/Badge.vue";
import Tab from "@/components/Tab.vue";
import Statistic from "@/components/Statistic.vue";
import Drawer from "@/components/Drawer.vue";
import Modal from "@/components/Modal.vue";
import Popconfirm from "@/components/Popconfirm.vue";
import Empty from "@/components/Empty.vue";
import Tooltip from "@/components/Tooltip.vue";
import Input from "@/components/Input.vue";
import Steps from "@/components/Steps.vue";
import Collapse from "@/components/Collapse.vue";
import Description from "@/components/Description.vue";
import PageHeader from "@/components/PageHeader.vue";
import Tag from "@/components/Tag.vue";
import Skeleton from "@/components/Skeleton.vue";
import Checkbox from "@/components/Checkbox.vue";
import Switch from "@/components/Switch.vue";
import Message from "@/components/Message.vue";
import Notification from "@/components/Notification.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Pagination from "@/components/Pagination.vue";
import AutoComplete from "@/components/Autocomplete.vue";
import InputNumber from "@/components/InputNumber.vue";
import Radio from "@/components/Radio.vue";
import TimePicker from "@/components/TimePicker.vue";
import Upload from "@/components/Upload.vue";
import Avatar from "@/components/Avatar.vue";
import Timeline from "@/components/Timeline.vue";
import Progress from "@/components/Progress.vue";
import TableExpandableRow from "@/components/TableExpandableRow.vue";
import TableEditable from "@/components/TableEditable.vue";
// import TableEditableCell from "@/components/TableEditableCell.vue";

const routes = [
  {
    path: "/button",
    name: "Button",
    component: Button,
  },
  {
    path: "/cascader",
    name: "Cascader",
    component: Cascader,
  },
  {
    path: "/datepicker",
    name: "DatePicker",
    component: DatePicker,
  },
  {
    path: "/table-fixedcolumnheader",
    name: "TableFixedColumnHeader",
    component: TableFixedColumnHeader,
  },
  {
    path: "/table-ellipses",
    name: "TableEllipses",
    component: TableEllipses,
  },
  {
    path: "/transfer",
    name: "Transfer",
    component: Transfer,
  },
  {
    path: "/treeselect",
    name: "TreeSelect",
    component: TreeSelect,
  },
  {
    path: "/select",
    name: "Select",
    component: Select,
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: Dropdown,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/badge",
    name: "Badge",
    component: Badge,
  },
  {
    path: "/tab",
    name: "Tab",
    component: Tab,
  },
  {
    path: "/statistic",
    name: "Statistic",
    component: Statistic,
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: Drawer,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/popconfirm",
    name: "Popconfirm",
    component: Popconfirm,
  },
  {
    path: "/empty",
    name: "Empty",
    component: Empty,
  },
  {
    path: "/tooltip",
    name: "Tooltip",
    component: Tooltip,
  },
  {
    path: "/input",
    name: "Input",
    component: Input,
  },
  {
    path: "/steps",
    name: "Steps",
    component: Steps,
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: Collapse,
  },
  {
    path: "/description",
    name: "Description",
    component: Description,
  },
  {
    path: "/page-header",
    name: "PageHeader",
    component: PageHeader,
  },
  {
    path: "/tag",
    name: "Tag",
    component: Tag,
  },
  {
    path: "/skeleton",
    name: "Skeleton",
    component: Skeleton,
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: Checkbox,
  },
  {
    path: "/switch",
    name: "Switch",
    component: Switch,
  },
  {
    path: "/message",
    name: "Message",
    component: Message,
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification,
  },
  {
    path: "/breadcrumb",
    name: "Breadcrumb",
    component: Breadcrumb,
  },
  {
    path: "/pagination",
    name: "Pagination",
    component: Pagination,
  },
  {
    path: "/autocomplete",
    name: "AutoComplete",
    component: AutoComplete,
  },
  {
    path: "/input-number",
    name: "InputNumber",
    component: InputNumber,
  },
  {
    path: "/radio",
    name: "Radio",
    component: Radio,
  },
  {
    path: "/time-picker",
    name: "TimePicker",
    component: TimePicker,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: Avatar,
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
  },
  {
    path: "/progress",
    name: "Progress",
    component: Progress,
  },
  {
    path: "/expandable-row",
    name: "TableExpandableRow",
    component: TableExpandableRow,
  },
  {
    path: "/editable-row",
    name: "TableEditable",
    component: TableEditable,
  },
  // {
  //   path: "/editable-cell",
  //   name: "TableEditableCell",
  //   component: TableEditableCell,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;