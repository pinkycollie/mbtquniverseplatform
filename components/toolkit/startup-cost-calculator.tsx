"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Download, Save, PlusCircle, Trash2 } from "lucide-react"

interface CostItem {
  id: string
  name: string
  amount: number
  category: string
  isOneTime: boolean
}

export default function StartupCostCalculator() {
  const [costItems, setCostItems] = useState<CostItem[]>([
    { id: "1", name: "Business Registration", amount: 500, category: "Legal", isOneTime: true },
    { id: "2", name: "Office Space (monthly)", amount: 1500, category: "Facilities", isOneTime: false },
    { id: "3", name: "Equipment", amount: 3000, category: "Equipment", isOneTime: true },
    { id: "4", name: "Website Development", amount: 2000, category: "Marketing", isOneTime: true },
    { id: "5", name: "Insurance (monthly)", amount: 300, category: "Insurance", isOneTime: false },
  ])

  const [newItem, setNewItem] = useState<Partial<CostItem>>({
    name: "",
    amount: 0,
    category: "Legal",
    isOneTime: true,
  })

  const categories = ["Legal", "Facilities", "Equipment", "Marketing", "Insurance", "Other"]
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

  const addItem = () => {
    if (newItem.name && newItem.amount) {
      setCostItems([
        ...costItems,
        {
          id: Date.now().toString(),
          name: newItem.name,
          amount: Number(newItem.amount),
          category: newItem.category || "Other",
          isOneTime: newItem.isOneTime || false,
        },
      ])
      setNewItem({
        name: "",
        amount: 0,
        category: "Legal",
        isOneTime: true,
      })
    }
  }

  const removeItem = (id: string) => {
    setCostItems(costItems.filter((item) => item.id !== id))
  }

  const updateItem = (id: string, field: keyof CostItem, value: any) => {
    setCostItems(
      costItems.map((item) =>
        item.id === id ? { ...item, [field]: field === "amount" ? Number(value) : value } : item,
      ),
    )
  }

  const totalOneTimeCosts = costItems.filter((item) => item.isOneTime).reduce((sum, item) => sum + item.amount, 0)

  const totalMonthlyCosts = costItems.filter((item) => !item.isOneTime).reduce((sum, item) => sum + item.amount, 0)

  const totalFirstYearCosts = totalOneTimeCosts + totalMonthlyCosts * 12

  const chartData = categories
    .map((category) => ({
      name: category,
      value: costItems
        .filter((item) => item.category === category)
        .reduce((sum, item) => sum + (item.isOneTime ? item.amount : item.amount * 12), 0),
    }))
    .filter((item) => item.value > 0)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Startup Cost Calculator</CardTitle>
        <CardDescription>Estimate your business startup costs and ongoing expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="costs" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="costs">Enter Costs</TabsTrigger>
            <TabsTrigger value="summary">Cost Summary</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
          </TabsList>

          <TabsContent value="costs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-lg">
              <Input
                placeholder="Item name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="md:col-span-2"
              />
              <Input
                type="number"
                placeholder="Amount ($)"
                value={newItem.amount || ""}
                onChange={(e) => setNewItem({ ...newItem, amount: Number.parseFloat(e.target.value) })}
              />
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="border rounded-md px-3 py-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isOneTime"
                  checked={newItem.isOneTime}
                  onChange={(e) => setNewItem({ ...newItem, isOneTime: e.target.checked })}
                  className="rounded"
                />
                <label htmlFor="isOneTime">One-time cost</label>
                <Button onClick={addItem} size="sm" className="ml-auto">
                  <PlusCircle className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {costItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Input
                          value={item.name}
                          onChange={(e) => updateItem(item.id, "name", e.target.value)}
                          className="border-0 p-0 h-auto"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={item.category}
                          onChange={(e) => updateItem(item.id, "category", e.target.value)}
                          className="border-0 bg-transparent"
                        >
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Input
                          type="number"
                          value={item.amount}
                          onChange={(e) => updateItem(item.id, "amount", e.target.value)}
                          className="border-0 p-0 h-auto"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={item.isOneTime}
                            onChange={(e) => updateItem(item.id, "isOneTime", e.target.checked)}
                            className="rounded mr-2"
                          />
                          <span>{item.isOneTime ? "One-time" : "Monthly"}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="summary">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">One-Time Costs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">${totalOneTimeCosts.toLocaleString()}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Monthly Costs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">${totalMonthlyCosts.toLocaleString()}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">First Year Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">${totalFirstYearCosts.toLocaleString()}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-3">Cost Breakdown</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">One-Time Costs</h4>
                  {costItems
                    .filter((item) => item.isOneTime)
                    .map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.name} ({item.category})
                        </span>
                        <span>${item.amount.toLocaleString()}</span>
                      </div>
                    ))}

                  <div className="border-t my-3"></div>

                  <h4 className="font-medium">Monthly Costs</h4>
                  {costItems
                    .filter((item) => !item.isOneTime)
                    .map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.name} ({item.category})
                        </span>
                        <span>${item.amount.toLocaleString()}/month</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="visualization">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button className="bg-[#FFBF00] text-black hover:bg-[#E6AC00]">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </CardFooter>
    </Card>
  )
}
