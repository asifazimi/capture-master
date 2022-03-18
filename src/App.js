function App() {
  return (
    <div className="App">
      <ul role="list" class="p-6 divide-y divide-slate-200">
        <li class="flex py-4 first:pt-0 last:pb-0">
          <img
            class="h-10 w-10 rounded-full"
            src={"./img/asif.jpeg"}
            alt="Image"
          />
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">Mohammad Asif</p>
            <p class="text-sm text-slate-500 truncate">
              iasifazimi@outlook.com
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default App;
