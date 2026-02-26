import { useState } from "react";
import { Link } from "wouter";
import { 
  Search, Filter, MapPin, Phone, Mail, Globe, 
  LayoutGrid, Map as MapIcon
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { PROJECTS, PROJECT_TYPES, CATEGORIES, REGIONS } from "@/lib/mock-data";

// Fix Leaflet's default icon issue
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Basic filtering
  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(project.type);
    const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(project.region);
    return matchesSearch && matchesType && matchesRegion;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
    setCurrentPage(1);
  };

  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );
    setCurrentPage(1);
  };

  const FiltersContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-4 pb-2 border-b">Тип проекта</h3>
        <div className="space-y-3">
          {PROJECT_TYPES.map(type => (
            <div key={type} className="flex items-start space-x-3">
              <Checkbox 
                id={`type-${type}`} 
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <label 
                htmlFor={`type-${type}`} 
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4 pb-2 border-b">Регион</h3>
        <div className="space-y-3">
          {REGIONS.map(region => (
            <div key={region} className="flex items-start space-x-3">
              <Checkbox 
                id={`region-${region}`} 
                checked={selectedRegions.includes(region)}
                onCheckedChange={() => toggleRegion(region)}
              />
              <label 
                htmlFor={`region-${region}`} 
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
              >
                {region}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">Каталог проектов</h1>
        <p className="text-muted-foreground text-lg">Найдите организацию для получения помощи или поддержки проекта</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Mobile Filters */}
        <div className="md:hidden w-full flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Поиск по названию..." 
              className="pl-9 w-full bg-white"
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader className="mb-6">
                <SheetTitle>Фильтры</SheetTitle>
              </SheetHeader>
              <FiltersContent />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-72 shrink-0">
          <div className="sticky top-24 space-y-6 bg-white p-6 rounded-xl border shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Поиск по названию..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
              />
            </div>
            
            <FiltersContent />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col min-h-[500px]">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-muted-foreground">
              Найдено проектов: <span className="font-semibold text-foreground">{filteredProjects.length}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
              <Button 
                variant={viewMode === "list" ? "default" : "ghost"} 
                size="sm" 
                className="h-8 rounded-md"
                onClick={() => setViewMode("list")}
              >
                <LayoutGrid className="w-4 h-4 mr-2" /> Списком
              </Button>
              <Button 
                variant={viewMode === "map" ? "default" : "ghost"} 
                size="sm" 
                className="h-8 rounded-md"
                onClick={() => setViewMode("map")}
              >
                <MapIcon className="w-4 h-4 mr-2" /> На карте
              </Button>
            </div>
          </div>

          {viewMode === "map" ? (
            <div className="w-full h-[600px] rounded-xl overflow-hidden border bg-slate-50 z-0">
              <MapContainer 
                center={[55.751244, 37.618423]} 
                zoom={5} 
                style={{ height: '100%', width: '100%', zIndex: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredProjects.map(project => (
                  <Marker 
                    key={project.id} 
                    position={project.coordinates || [55.75, 37.61]}
                  >
                    <Popup>
                      <div className="max-w-[200px]">
                        <h4 className="font-serif font-bold text-base mb-1">{project.name}</h4>
                        <div className="text-xs text-muted-foreground mb-2 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" /> {project.region}
                        </div>
                        <p className="text-xs line-clamp-2 mb-3">{project.description}</p>
                        <Button variant="default" size="sm" className="w-full text-xs h-7" asChild>
                          <Link href={`/projects/${project.id}`}>Подробнее</Link>
                        </Button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {currentProjects.map(project => (
                  <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant="secondary" className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none shadow-sm">
                          {project.type}
                        </Badge>
                      </div>
                      <img 
                        src={project.images[0]} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-4">
                      <div className="text-xs font-medium text-muted-foreground mb-2 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" /> {project.region}
                      </div>
                      <CardTitle className="font-serif text-xl leading-tight line-clamp-2">
                        <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                          {project.name}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 text-sm text-muted-foreground pb-4">
                      <p className="line-clamp-3">{project.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-1">
                        {project.categories.slice(0, 2).map(cat => (
                          <Badge key={cat} variant="outline" className="text-[10px] font-normal rounded-full bg-slate-50">
                            {cat}
                          </Badge>
                        ))}
                        {project.categories.length > 2 && (
                          <Badge variant="outline" className="text-[10px] font-normal rounded-full bg-slate-50">
                            +{project.categories.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between border-t p-4 bg-slate-50/50 mt-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-xs font-medium h-8">
                            Быстрый просмотр
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="font-serif text-2xl pr-8">{project.name}</DialogTitle>
                            <DialogDescription className="flex items-center pt-2">
                              <Badge variant="outline" className="mr-2">{project.type}</Badge>
                              <span className="flex items-center text-xs"><MapPin className="w-3 h-3 mr-1"/> {project.region}</span>
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="text-sm">{project.description}</div>
                            <div className="grid grid-cols-2 gap-4 mt-4 bg-slate-50 p-4 rounded-lg">
                              {project.phone && (
                                <div className="flex items-center text-sm">
                                  <Phone className="w-4 h-4 text-muted-foreground mr-2" />
                                  {project.phone}
                                </div>
                              )}
                              {project.email && (
                                <div className="flex items-center text-sm">
                                  <Mail className="w-4 h-4 text-muted-foreground mr-2" />
                                  {project.email}
                                </div>
                              )}
                              {project.address && (
                                <div className="flex items-center text-sm col-span-2">
                                  <MapPin className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
                                  <span>{project.address}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex justify-end gap-3 mt-2">
                            <Button variant="default" asChild>
                              <Link href={`/projects/${project.id}`}>Подробнее о проекте</Link>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button variant="default" size="sm" className="h-8 rounded-full" asChild>
                        <Link href={`/projects/${project.id}`}>Подробнее</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed mt-6">
                  <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-1">Ничего не найдено</h3>
                  <p className="text-muted-foreground">Попробуйте изменить параметры поиска или фильтры</p>
                  <Button variant="link" onClick={() => {setSearchQuery(""); setSelectedTypes([]); setSelectedRegions([])}} className="mt-4">
                    Сбросить фильтры
                  </Button>
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-10 flex justify-center items-center gap-2">
                  <Button 
                    variant="outline" 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  >
                    Назад
                  </Button>
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <Button
                        key={i}
                        variant={currentPage === i + 1 ? "default" : "outline"}
                        size="icon"
                        onClick={() => setCurrentPage(i + 1)}
                        className="w-10 h-10"
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  >
                    Вперед
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
